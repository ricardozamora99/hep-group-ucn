import PeopleHero from "@/components/people/Hero/PeopleHero";
import CurrentMembers from "@/components/people/CurrentMembers/CurrentMembers";
import AlumniSection from "@/components/people/Alumni/AlumniSection";
import CTA from "@/components/home/CTA/CTA";

export default function PeoplePage() {
  return (
    <>
      <PeopleHero />
      <CurrentMembers />
      <AlumniSection />
      <CTA />
    </>
  );
}