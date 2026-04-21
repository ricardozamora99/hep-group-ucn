import ContactIntro from "@/components/contact/Intro/ContactIntro";
import ContactGroups from "@/components/contact/ContactGroups/ContactGroups";
import ContactCTA from "@/components/contact/ContactCTA/ContactCTA";

export default function ContactPage() {
  return (
    <>
      <ContactIntro />
      <ContactGroups />
      <ContactCTA />
    </>
  );
}