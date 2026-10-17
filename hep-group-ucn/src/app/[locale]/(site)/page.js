import Hero from "@/components/home/Hero/Hero";
import Research from "@/components/home/Research/Research";
import AboutPreview from "@/components/home/AboutPreview/AboutPreview";
import Activities from "@/components/home/Activities/Activities";
import PeoplePreview from "@/components/home/PeoplePreview/PeoplePreview";
import Publications from "@/components/home/Publications/Publications";
import News from "@/components/home/News/News";
import JoinUsCTA from "@/components/about/JoinUsCTA/JoinUsCTA";
import { getInspirePublications } from "@/lib/inspirePublications";
import { client } from "@/sanity/lib/client";
import { PUBLICATION_AUTHORS_QUERY } from "@/sanity/lib/queries";

export const revalidate = 21600;

export default async function HomePage() {
  let recentPapers = [];

  try {
    const people = await client.fetch(
      PUBLICATION_AUTHORS_QUERY,
      {},
      { next: { revalidate: 3600 } }
    );
    const papers = await getInspirePublications(
      people.map((person) => person.inspireAuthorId)
    );
    recentPapers = papers
      .filter((paper) => !paper.isCollaboration && !paper.isExperiment)
      .slice(0, 3);
  } catch (error) {
    console.error("Unable to load recent home publications from INSPIRE", error);
  }

  return (
    <>
      <Hero />
      <AboutPreview />
      <Research />
      <Activities />
      <PeoplePreview />
      <Publications papers={recentPapers} />
      <News />
      <JoinUsCTA />
    </>
  );
}
