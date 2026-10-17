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
import { ACADEMIC_NEWS_QUERY, PUBLICATION_AUTHORS_QUERY } from "@/sanity/lib/queries";

export const revalidate = 21600;

export default async function HomePage({ params }) {
  const { locale } = await params;
  let recentPapers = [];
  let newsItems = [];

  try {
    newsItems = await client.fetch(
      ACADEMIC_NEWS_QUERY,
      { locale },
      { next: { revalidate: 3600 } }
    );
  } catch (error) {
    console.error("Unable to load featured academic activities", error);
  }

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
      <News items={newsItems} locale={locale} />
      <JoinUsCTA />
    </>
  );
}
