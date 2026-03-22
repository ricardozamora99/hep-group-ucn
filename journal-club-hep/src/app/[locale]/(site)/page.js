import Hero from "@/components/home/Hero/Hero";
import Research from "@/components/home/Research/Research";
import AboutPreview from "@/components/home/AboutPreview/AboutPreview";
import Activities from "@/components/home/Activities/Activities";
import PeoplePreview from "@/components/home/PeoplePreview/PeoplePreview";
import Publications from "@/components/home/Publications/Publications";
import News from "@/components/home/News/News";
import CTA from "@/components/home/CTA/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Research />
      <Activities />
      <PeoplePreview />
      <Publications />
      <News />
      <CTA />
    </>
  );
}