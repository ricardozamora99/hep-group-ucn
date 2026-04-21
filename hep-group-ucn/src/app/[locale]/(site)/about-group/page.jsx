import AboutHero from "@/components/about/AboutHero/AboutHero";
import GroupOverview from "@/components/about/GroupOverview/GroupOverview";
import MissionVision from "@/components/about/MissionVision/MissionVision";
import ResearchScope from "@/components/about/ResearchScope/ResearchScope";
import AcademicEnvironment from "@/components/about/AcademicEnvironment/AcademicEnvironment";
import CollaborationNetwork from "@/components/about/CollaborationNetwork/CollaborationNetwork";
import SupportGrants from "@/components/about/SupportGrants/SupportGrants";
import JoinUsCTA from "@/components/about/JoinUsCTA/JoinUsCTA";

export default function AboutGroupPage() {
  return (
    <>
      <AboutHero />
      <GroupOverview />
      <MissionVision />
      <ResearchScope />
      <AcademicEnvironment />
      <CollaborationNetwork />
      <SupportGrants />
      <JoinUsCTA />
    </>
  );
}