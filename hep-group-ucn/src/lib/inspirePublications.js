import "server-only";

const INSPIRE_API = "https://inspirehep.net/api/literature";
const ARXIV_LOGO = "/Journals/ArXiv_logo.png";

function formatAuthorName(author) {
  if (author.first_name && author.last_name) return author.first_name + " " + author.last_name;
  const fullName = author.full_name || "";
  const [lastName, ...firstNames] = fullName.split(",").map((part) => part.trim());
  return firstNames.length ? firstNames.join(" ") + " " + lastName : fullName;
}

function formatAuthors(firstAuthor) {
  const name = firstAuthor ? formatAuthorName(firstAuthor) : "";
  return name ? name + " et al." : "";
}

function plainText(value = "") {
  return value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function summarizeAbstract(abstracts = []) {
  const abstract = plainText(abstracts[0]?.value);
  if (!abstract || abstract.length <= 280) return abstract;
  const excerpt = abstract.slice(0, 280);
  const lastSpace = excerpt.lastIndexOf(" ");
  return excerpt.slice(0, lastSpace > 220 ? lastSpace : 280) + "…";
}

function formatJournal(publicationInfo = []) {
  const publication = publicationInfo.find((item) => item.journal_title);
  if (!publication) return null;
  return [
    publication.journal_title,
    publication.journal_volume,
    publication.artid || publication.page_start,
  ].filter(Boolean).join(" ");
}

function normalizeTopic(categories = []) {
  const term = categories[0]?.term || "Other";
  const labels = {
    "Phenomenology-HEP": "Phenomenology",
    "Theory-HEP": "Theory",
    "Experiment-HEP": "Experiment",
    "Gravitation and Cosmology": "Cosmology",
  };
  return labels[term] || term;
}

function normalizePaper(hit) {
  const metadata = hit.metadata || {};
  const categories = (metadata.inspire_categories || [])
    .map((category) => category.term)
    .filter(Boolean);
  const collaborations = (metadata.collaborations || [])
    .map((collaboration) => collaboration.value)
    .filter(Boolean);
  const controlNumber = metadata.control_number || hit.id;
  const arxivId = metadata.arxiv_eprints?.[0]?.value;
  const doi = metadata.dois?.[0]?.value;
  const date = metadata.earliest_date || metadata.preprint_date || "";
  const publicationYear = metadata.publication_info?.find((item) => item.year)?.year;
  const year = publicationYear || Number.parseInt(date.slice(0, 4), 10) || null;
  let code = "INSPIRE:" + controlNumber;
  let url = "https://inspirehep.net/literature/" + controlNumber;

  if (arxivId) {
    code = "arXiv:" + arxivId;
    url = "https://arxiv.org/abs/" + arxivId;
  }
  if (doi) {
    code = "DOI: " + doi;
    url = "https://doi.org/" + doi;
  }

  return {
    id: String(controlNumber),
    year,
    source: "arXiv",
    journal: formatJournal(metadata.publication_info),
    title: plainText(metadata.titles?.[0]?.title) || "Untitled publication",
    authors: formatAuthors(metadata.first_author),
    code,
    info: summarizeAbstract(metadata.abstracts),
    topic: normalizeTopic(metadata.inspire_categories),
    image: ARXIV_LOGO,
    url,
    date,
    citationCount: metadata.citation_count || 0,
    collaborations,
    isCollaboration: collaborations.length > 0,
    isExperiment: categories.includes("Experiment-HEP"),
  };
}

async function fetchAuthorPapers(authorId) {
  const url = new URL(INSPIRE_API);
  url.searchParams.set("q", "authors.recid:" + authorId);
  url.searchParams.set("sort", "mostrecent");
  url.searchParams.set("size", "250");
  url.searchParams.set("fields", [
    "titles.title", "first_author.full_name", "arxiv_eprints.value", "dois.value",
    "publication_info.journal_title", "publication_info.journal_volume",
    "publication_info.artid", "publication_info.page_start", "publication_info.year",
    "abstracts.value", "earliest_date", "preprint_date", "control_number",
    "citation_count", "inspire_categories.term", "collaborations.value",
  ].join(","));

  const response = await fetch(url, { next: { revalidate: 21600 } });
  if (!response.ok) {
    throw new Error("INSPIRE request failed for author " + authorId + ": " + response.status);
  }
  const data = await response.json();
  return data.hits?.hits || [];
}

export async function getInspirePublications(authorIds) {
  const uniqueIds = [...new Set(authorIds.filter(Boolean).map(String))];
  if (uniqueIds.length === 0) return [];

  const results = await Promise.allSettled(uniqueIds.map(fetchAuthorPapers));
  const successful = results.flatMap((result) =>
    result.status === "fulfilled" ? result.value : []
  );
  if (successful.length === 0 && results.some((result) => result.status === "rejected")) {
    throw new Error("INSPIRE publications could not be loaded.");
  }

  const uniquePapers = new Map();
  successful.forEach((hit) => {
    const paper = normalizePaper(hit);
    uniquePapers.set(paper.id, paper);
  });

  return [...uniquePapers.values()]
    .sort((a, b) => {
      const byDate = (b.date || "").localeCompare(a.date || "");
      return byDate || b.citationCount - a.citationCount || a.title.localeCompare(b.title);
    })
    .map((paper, index) => ({ ...paper, featured: index === 0 }));
}
