"use client";
import LocalizedText from "@/components/i18n/LocalizedText";

import styles from "./BeyondAcademia.module.css";
import Container from "@/components/layout/Container";
import LargeMomentsCarousel from "./LargeMomentsCarousel";

const moments = [
  {
    src: "/brand/logoucn.png",
    alt: "Beyond academia moment 1",
    caption: "Shared moments with visitors and collaborators in Antofagasta.",
  },
  {
    src: "/brand/logoucn.png",
    alt: "Beyond academia moment 2",
    caption: "Informal conversations, coffee, and group life beyond the seminar room.",
  },
  {
    src: "/brand/logoucn.png",
    alt: "Beyond academia moment 3",
    caption: "Casual meetings and shared experiences with guests.",
  },
  {
    src: "/brand/logoucn.png",
    alt: "Beyond academia moment 4",
    caption: "Outdoor activities and memorable moments with the group.",
  },
  {
    src: "/brand/logoucn.png",
    alt: "Beyond academia moment 5",
    caption: "The social side of academic exchange and collaboration.",
  },
  {
    src: "/brand/logoucn.png",
    alt: "Beyond academia moment 6",
    caption: "Group life in Antofagasta beyond formal academic settings.",
  },
];

export default function BeyondAcademia() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.head}>
          <span className={styles.kicker}><LocalizedText id="p_bb501d7877eb">Community</LocalizedText></span>
          <h2 className={styles.title}><LocalizedText id="p_b903b1ff1ded">Shared moments</LocalizedText><span><LocalizedText id="p_dfa0fe0f38d0">beyond academia</LocalizedText></span>
          </h2>
          <p className={styles.lead}><LocalizedText id="p_e53dc86b752e">Group life also includes informal gatherings, visiting researchers, and shared experiences in Antofagasta beyond the seminar room.</LocalizedText></p>
        </div>

        <LargeMomentsCarousel images={moments} />
      </Container>
    </section>
  );
}
