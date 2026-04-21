"use client";

import Container from "@/components/layout/Container";
import styles from "./ContactGroups.module.css";
import {
  postdocs,
  phdStudents,
  mastersStudents,
  bachelorsStudents,
} from "./contactData";

function ContactSection({ kicker, title, people }) {
  return (
    <section className={styles.group}>
      <div className={styles.groupHeader}>
        <span className={styles.kicker}>{kicker}</span>
        <h2 className={styles.groupTitle}>{title}</h2>
      </div>

      <div className={styles.grid}>
        {people.map((person) => (
          <article key={person.email} className={styles.card}>
            <h3 className={styles.name}>{person.name}</h3>
            <a href={`mailto:${person.email}`} className={styles.email}>
              {person.email}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function ContactGroups() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrap}>
          <ContactSection
            kicker="Group Contacts"
            title="Postdoctoral Researchers"
            people={postdocs}
          />

          <ContactSection
            kicker="Group Contacts"
            title="PhD Students"
            people={phdStudents}
          />

          <ContactSection
            kicker="Group Contacts"
            title="Master’s Students"
            people={mastersStudents}
          />

          <ContactSection
            kicker="Group Contacts"
            title="Bachelor’s Students"
            people={bachelorsStudents}
          />
        </div>
      </Container>
    </section>
  );
}