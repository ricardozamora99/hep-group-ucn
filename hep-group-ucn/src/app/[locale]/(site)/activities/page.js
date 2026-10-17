import ActivitiesHero from "@/components/activities/Hero/ActivitiesHero";
import WorkshopsSection from "@/components/activities/Workshops/WorkshopsSection";
import JournalClubTeaser from "@/components/activities/JournalClubTeaser/JournalClubTeaser";
import BeyondAcademia from "@/components/activities/BeyondAcademia/BeyondAcademia";
import ActivitiesCTA from "@/components/activities/ActivitiesCTA/ActivitiesCTA";
import AcademicParticipation from "@/components/activities/AcademicParticipation/AcademicParticipation";
import { client } from "@/sanity/lib/client";
import { ACADEMIC_ACTIVITIES_QUERY } from "@/sanity/lib/queries";

export const revalidate = 3600;

const PAGE_SIZE = 6;

export default async function ActivitiesPage({ params, searchParams }) {
  const { locale } = await params;
  const query = await searchParams;
  const requestedPage = Number.parseInt(query?.participationPage, 10);
  let page = Number.isFinite(requestedPage) && requestedPage > 0 ? requestedPage : 1;
  let result = { items: [], total: 0 };

  try {
    result = await client.fetch(
      ACADEMIC_ACTIVITIES_QUERY,
      { locale, start: (page - 1) * PAGE_SIZE, end: page * PAGE_SIZE },
      { next: { revalidate: 3600 } }
    );
  } catch (error) {
    console.error("Unable to load academic participation", error);
  }

  const totalPages = Math.max(1, Math.ceil(result.total / PAGE_SIZE));
  if (page > totalPages) {
    page = totalPages;
    try {
      result = await client.fetch(
        ACADEMIC_ACTIVITIES_QUERY,
        { locale, start: (page - 1) * PAGE_SIZE, end: page * PAGE_SIZE },
        { next: { revalidate: 3600 } }
      );
    } catch (error) {
      console.error("Unable to load the final academic participation page", error);
    }
  }

  return (
    <>
      <ActivitiesHero />
      <WorkshopsSection />
      <AcademicParticipation
        items={result.items}
        total={result.total}
        page={page}
        totalPages={totalPages}
        locale={locale}
      />
      <JournalClubTeaser />
      <BeyondAcademia />
      <ActivitiesCTA />
    </>
  );
}
