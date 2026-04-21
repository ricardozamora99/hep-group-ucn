import Research from "@/components/research/ResearchHero/ResearchHero";
import ResearchAreas from "@/components/research/ResearchAreas/ResearchAreas";
import KeyQuestions from "@/components/research/KeyQuestions/KeyQuestions";
import MethodsApproach from "@/components/research/MethodsApproach/MethodsApproach";
import ResearchLinks from "@/components/research/ResearchLinks/ResearchLinks";
import ResearchCTA from "@/components/research/ResearchCTA/ResearchCTA";

export default function ResearchPage() {
  return (
    <main>
      <Research />
      <ResearchAreas />
      <KeyQuestions />
      <MethodsApproach />
      <ResearchLinks />
      <ResearchCTA />
    </main>
  );
}