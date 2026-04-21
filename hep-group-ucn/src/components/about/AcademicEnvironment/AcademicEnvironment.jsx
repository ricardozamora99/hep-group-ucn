"use client";

import styles from "./AcademicEnvironment.module.css";
import Container from "@/components/layout/Container";

const items = [
  "Journal club activities and scientific discussion",
  "Student formation through research and supervision",
  "Seminars, workshops, and internal exchange",
  "Integration of computation into modern theoretical work",
];

export default function AcademicEnvironment() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.layout}>
          <div className={styles.left}>
            <span className={styles.kicker}>Academic environment</span>
            <h2>
              Research is also built
              <span>through community</span>
            </h2>
            <p>
              The group understands scientific development not only as the
              production of results, but also as the cultivation of a living
              academic environment. Training, conversation, mentorship, and
              regular intellectual exchange are part of the structure through
              which ideas mature and new researchers emerge.
            </p>

            <div className={styles.rule} />

            <ul className={styles.list}>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.right}>
            <div className={styles.frame}>
              <div className={styles.frameInner}>
                <span className={styles.smallLabel}>Atmosphere</span>
                <h3>Discussion, formation, and continuity</h3>
                <p>
                  A group grows when research questions are sustained by a
                  shared intellectual culture.
                </p>
              </div>
            </div>

            <div className={styles.stack}>
              <div className={styles.miniCard}>
                <span>Training</span>
                <strong>Students and early researchers</strong>
              </div>
              <div className={styles.miniCard}>
                <span>Activity</span>
                <strong>Seminars, meetings, and scientific dialogue</strong>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}