"use client";

import Link from "next/link";
import styles from "./PeoplePreview.module.css";
import Container from "@/components/layout/Container";

const people = [
  {
    name: "Group Head",
    role: "Principal Investigator",
    note: "Leading research directions in particle physics and cosmology at UCN.",
  },
  {
    name: "New Member 1",
    role: "PhD / MSc Researcher",
    note: "Working on theoretical and computational aspects of high energy physics.",
  },
  {
    name: "New Member 2",
    role: "PhD / MSc Researcher",
    note: "Contributing to current projects in cosmology, phenomenology, and data-driven methods.",
  },
];

export default function PeoplePreview() {
  return (
    <section id="people-preview" className={styles.section}>
      <Container>
        <div className={styles.shell}>
          <header className={styles.header}>
            <div className={styles.kicker}>People</div>
            <h2 className={styles.title}>Meet the Group</h2>
            <div className={styles.underline} />
            <p className={styles.lead}>
              A research group is shaped by its people: its leadership, its students,
              and the collaborations that sustain its academic life.
            </p>
          </header>

          <div className={styles.grid}>
            {people.map((person, idx) => (
              <article
                key={person.name}
                className={`${styles.card} ${idx === 0 ? styles.featured : ""}`}
              >
                <div className={styles.cardIndex}>
                  {idx === 0 ? "Head" : `0${idx}`}
                </div>
                <h3 className={styles.cardName}>{person.name}</h3>
                <div className={styles.cardRole}>{person.role}</div>
                <p className={styles.cardNote}>{person.note}</p>
              </article>
            ))}
          </div>

          <div className={styles.actions}>
            <Link className={styles.btn} href="/people">
              View Full Team
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}