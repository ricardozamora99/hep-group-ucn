import PeopleHero from "@/components/people/Hero/PeopleHero";
import CurrentMembers from "@/components/people/CurrentMembers/CurrentMembers";
import AlumniSection from "@/components/people/Alumni/AlumniSection";
import CollaboratorsSection from "@/components/people/Collaborators/CollaboratorsSection";
import PeopleCTA from "@/components/people/PeopleCTA/PeopleCTA";

export default function PeoplePage() {
  return (
    <>
      <PeopleHero />
      <CurrentMembers />
      <AlumniSection />
      <CollaboratorsSection />
      <PeopleCTA />
    </>
  );
}