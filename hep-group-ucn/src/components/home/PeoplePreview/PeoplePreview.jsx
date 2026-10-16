"use client";
import LocalizedText from "@/components/i18n/LocalizedText";

import Link from "next/link";
import { useLocale } from "next-intl";
import styles from "./PeoplePreview.module.css";
import Container from "@/components/layout/Container";

const people = [
  {
    name: "Group Leadership",
    role: "Principal Investigator",
    note: "The scientific and academic direction of the group is anchored in sustained research leadership.",
  },
  {
    name: "Students",
    role: "PhD / MSc Researchers",
    note: "The group grows through the participation of students working on active theoretical and computational problems.",
  },
  {
    name: "Collaborators",
    role: "Academic Network",
    note: "Its broader identity is enriched by dialogue with researchers and institutions beyond UCN.",
  },
];

export default function PeoplePreview() {
  const locale = useLocale();

  return (
    <section id="people-preview" className={styles.section}>
      <Container>
        <div className={styles.top}>
          <span className={styles.kicker}><LocalizedText id="p_7db20897053b">People</LocalizedText></span>
          <h2 className={styles.title}><LocalizedText id="p_b101c9b03038">A group is defined</LocalizedText><span><LocalizedText id="p_8406c14c796f">by the people who sustain it</LocalizedText></span>
          </h2>
        </div>

        <div className={styles.layout}>
          <div className={styles.statement}>
            <p><LocalizedText id="p_509916d34ccc">Leadership, students, and collaborators give the group its real form. Research is built through continuity, mentorship, dialogue, and the collective effort of an academic community.</LocalizedText></p>

            <Link className={styles.btn} href={`/${locale}/people`}><LocalizedText id="p_0695ccef37d0">View Full Team</LocalizedText></Link>
          </div>

          <div className={styles.grid}>
            {people.map((person, idx) => (
              <article
                key={person.name}
                className={`${styles.card} ${idx === 0 ? styles.featured : ""}`}
              >
                <div className={styles.index}>{idx === 0 ? "01" : `0${idx + 1}`}</div>
                <h3><LocalizedText text={person.name} /></h3>
                <div className={styles.role}>{person.role}</div>
                <p>{person.note}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
