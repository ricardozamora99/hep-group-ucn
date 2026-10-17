"use client";

import { useMemo, useState } from "react";
import { useLocale } from "next-intl";
import PublicationsToolbar from "@/components/publications/PublicationsToolbar/PublicationsToolbar";
import FeaturedPublication from "@/components/publications/FeaturedPublication/FeaturedPublication";
import PublicationCollections from "@/components/publications/PublicationCollections/PublicationCollections";
import PublicationsCTA from "@/components/publications/PublicationsCTA/PublicationsCTA";

export default function PublicationsCatalog({ papers, loadError }) {
  const locale = useLocale();
  const [search, setSearch] = useState("");
  const [topic, setTopic] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const topics = useMemo(
    () => [...new Set(papers.map((paper) => paper.topic))].sort(),
    [papers]
  );

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return papers.filter((paper) => {
      const matchesTopic = topic === "All" || paper.topic === topic;
      const searchable = [
        paper.title, paper.authors, paper.topic, paper.journal, paper.code,
      ].filter(Boolean).join(" ").toLowerCase();
      return matchesTopic && (query === "" || searchable.includes(query));
    });
  }, [papers, search, topic]);

  const featured = filtered.find((paper) => paper.featured) || filtered[0] || null;
  const collectionItems = featured
    ? filtered.filter((paper) => paper.id !== featured.id)
    : filtered;

  const updateSearch = (value) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const updateTopic = (value) => {
    setTopic(value);
    setCurrentPage(1);
  };

  return (
    <>
      <PublicationsToolbar
        search={search}
        setSearch={updateSearch}
        topic={topic}
        setTopic={updateTopic}
        topics={topics}
      />
      {loadError ? (
        <div style={{ padding: "32px 24px", textAlign: "center" }}>
          {locale === "es"
            ? "Las publicaciones no pudieron cargarse desde INSPIRE en este momento."
            : "Publications could not be loaded from INSPIRE at this moment."}
        </div>
      ) : (
        <>
          <FeaturedPublication paper={featured} />
          <PublicationCollections
            papers={collectionItems}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            itemsPerPage={9}
          />
        </>
      )}
      <PublicationsCTA />
    </>
  );
}
