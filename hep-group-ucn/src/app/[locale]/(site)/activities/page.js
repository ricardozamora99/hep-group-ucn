import ActivitiesHero from "@/components/activities/Hero/ActivitiesHero";
import WorkshopsSection from "@/components/activities/Workshops/WorkshopsSection";
import JournalClubTeaser from "@/components/activities/JournalClubTeaser/JournalClubTeaser";
import BeyondAcademia from "@/components/activities/BeyondAcademia/BeyondAcademia";
import ActivitiesCTA from "@/components/activities/ActivitiesCTA/ActivitiesCTA";

export default function ActivitiesPage() {
  return (
    <>
      <ActivitiesHero />
      <WorkshopsSection />
      <JournalClubTeaser />
      <BeyondAcademia />
      <ActivitiesCTA />
    </>
  );
}