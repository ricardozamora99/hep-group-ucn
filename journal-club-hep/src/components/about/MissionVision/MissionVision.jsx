"use client";

import styles from "./MissionVision.module.css";
import Container from "@/components/layout/Container";

export default function MissionVision() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <span className={styles.kicker}>Identity</span>
          <h2>Mission, vision, and intellectual direction</h2>
        </div>

        <div className={styles.grid}>
          <article className={styles.mission}>
            <span className={styles.label}>Mission</span>
            <h3>
              To advance research in particle physics and cosmology through
              rigorous theoretical work, computational methods, and academic
              formation.
            </h3>
            <p>
              The group aims to develop meaningful contributions to fundamental
              physics while cultivating a local research culture that is
              connected to international dialogue, scientific responsibility,
              and the training of future researchers.
            </p>
          </article>

          <article className={styles.vision}>
            <span className={styles.label}>Vision</span>
            <h3>
              To consolidate a research space with international relevance,
              conceptual depth, and strong educational impact.
            </h3>
            <p>
              Our long-term horizon is to strengthen a sustained environment for
              high energy physics and cosmology at UCN, where scientific inquiry
              is ambitious, collaborative, and intellectually open.
            </p>
          </article>

          <article className={styles.values}>
            <span className={styles.label}>Approach</span>
            <ul>
              <li>Conceptual rigor and physical clarity</li>
              <li>Dialogue between formal theory and computation</li>
              <li>Commitment to training and academic community</li>
              <li>Collaboration across institutions and scales</li>
            </ul>
          </article>
        </div>
      </Container>
    </section>
  );
}