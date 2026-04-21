"use client";

import styles from "./GroupOverview.module.css";
import Container from "@/components/layout/Container";

export default function GroupOverview() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.top}>
          <div className={styles.heading}>
            <span className={styles.kicker}>Who we are</span>
            <h2>
              A research group shaped by
              <span>fundamental questions</span>
            </h2>
          </div>

          <div className={styles.introCard}>
            <p>
              Our work seeks conceptual clarity, phenomenological relevance, and
              mathematical rigor while cultivating a strong academic community
              around contemporary problems in high energy physics and cosmology.
            </p>
          </div>
        </div>

        <div className={styles.layout}>
          <div className={styles.mainText}>
            <p>
              The UCN Particle Physics & Cosmology Group brings together
              research interests in particle phenomenology, beyond-the-Standard
              Model physics, neutrino physics, early-universe questions, and
              related computational methods. The group develops work that moves
              naturally between formal theoretical structures and the numerical
              tools required to test ideas against physical constraints.
            </p>

            <p>
              Beyond its scientific agenda, the group also functions as an
              academic environment for training, discussion, and intellectual
              exchange. It contributes to the development of students and young
              researchers through seminars, group discussions, supervision,
              journal activities, and participation in broader research
              networks.
            </p>

            <p>
              This dual identity — rigorous research and academic formation —
              defines the group’s character: locally rooted, scientifically
              ambitious, and open to collaboration across institutions and
              scales of inquiry.
            </p>
          </div>

          <aside className={styles.sideColumn}>
            <div className={styles.note}>
              <span>Research character</span>
              <strong>Theory, phenomenology, and computational physics</strong>
            </div>

            <div className={styles.note}>
              <span>Academic role</span>
              <strong>Training, discussion, supervision, and community</strong>
            </div>

            <div className={styles.noteAccent}>
              <span>Guiding idea</span>
              <p>
                To connect deep theoretical problems with active scientific
                dialogue and international visibility.
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}