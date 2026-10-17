import Research from "@/components/research/ResearchHero/ResearchHero";
import ResearchAreas from "@/components/research/ResearchAreas/ResearchAreas";
import KeyQuestions from "@/components/research/KeyQuestions/KeyQuestions";
import MethodsApproach from "@/components/research/MethodsApproach/MethodsApproach";
import ResearchLinks from "@/components/research/ResearchLinks/ResearchLinks";
import ResearchCTA from "@/components/research/ResearchCTA/ResearchCTA";
import { getInspirePublications } from "@/lib/inspirePublications";
import { client } from "@/sanity/lib/client";
import { PUBLICATION_AUTHORS_QUERY } from "@/sanity/lib/queries";

export const revalidate = 21600;

export default async function ResearchPage() {
  let selectedPapers = [];

  try {
    const people = await client.fetch(
      PUBLICATION_AUTHORS_QUERY,
      {},
      { next: { revalidate: 3600 } }
    );
    const papers = await getInspirePublications(
      people.map((person) => person.inspireAuthorId)
    );
    selectedPapers = papers
      .filter((paper) => !paper.isCollaboration)
      .slice(0, 12);
  } catch (error) {
    console.error("Unable to load selected research output from INSPIRE", error);
  }

  return (
    <main>
      <Research />
      <ResearchAreas />
      <KeyQuestions />
      <MethodsApproach />
      <ResearchLinks papers={selectedPapers} />
      <ResearchCTA />
    </main>
  );
}
