import CollaborationsHero from "@/components/collaborations/CollaborationsHero/CollaborationsHero";
import CollaborationsOverview from "@/components/collaborations/CollaborationsOverview/CollaborationsOverview";
import CollaboratorsSection from "@/components/people/Collaborators/CollaboratorsSection";

export default function CollaborationsPage() {
  return (
    <>
      <CollaborationsHero />
      <CollaborationsOverview />
      <CollaboratorsSection />
    </>
  );
}