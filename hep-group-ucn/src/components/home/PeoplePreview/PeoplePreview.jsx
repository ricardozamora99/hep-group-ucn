"use client";

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
          <span className={styles.kicker}>People</span>
          <h2 className={styles.title}>
            A group is defined
            <span>by the people who sustain it</span>
          </h2>
        </div>

        <div className={styles.layout}>
          <div className={styles.statement}>
            <p>
              Leadership, students, and collaborators give the group its real
              form. Research is built through continuity, mentorship, dialogue,
              and the collective effort of an academic community.
            </p>

            <Link className={styles.btn} href={`/${locale}/people`}>
              View Full Team
            </Link>
          </div>

          <div className={styles.grid}>
            {people.map((person, idx) => (
              <article
                key={person.name}
                className={`${styles.card} ${idx === 0 ? styles.featured : ""}`}
              >
                <div className={styles.index}>{idx === 0 ? "01" : `0${idx + 1}`}</div>
                <h3>{person.name}</h3>
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