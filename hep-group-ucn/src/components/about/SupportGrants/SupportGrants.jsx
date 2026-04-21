"use client";

import styles from "./SupportGrants.module.css";
import Container from "@/components/layout/Container";

const supportItems = [
  "Institutional support and academic infrastructure",
  "Funded projects and research development lines",
  "Visibility for sustained scientific activity",
];

export default function SupportGrants() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.layout}>
          <div className={styles.left}>
            <span className={styles.kicker}>Support & grants</span>
            <h2>Scientific growth also requires structure</h2>
            <p>
              Research develops within institutional frameworks that make
              continuity possible. Funding, university support, and project
              structures play a central role in sustaining long-term scientific
              work, training, and collaboration.
            </p>

            <div className={styles.items}>
              {supportItems.map((item) => (
                <div key={item} className={styles.item}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.cardMain}>
              <span className={styles.label}>Institutional note</span>
              <h3>Support gives continuity to ideas, people, and projects.</h3>
            </div>

            <div className={styles.cardSub}>
              <p>
                This section can later host specific grants, project titles,
                funding programs, institutional partners, or logos when you want
                to make it more concrete.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}