import About from "@/components/journal-club/About/About";
import Speakers from "@/components/journal-club/Speakers/Speakers";
import Team from "@/components/journal-club/Team/Team";
import Join from "@/components/journal-club/Join/Join";
import Hero from "@/components/journal-club/Hero/Hero";

export default function JournalClubPage() {
  return (
    <main>
      <Hero />
      <About />
      <Speakers />
      <Team />
      <Join />
    </main>
  );
}