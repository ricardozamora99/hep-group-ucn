"use client";

import styles from "./AboutHero.module.css";
import Container from "@/components/layout/Container";

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgBase} />
      <div className={styles.bgGlow} />
      <div className={styles.grid} />

      <Container>
        <div className={styles.inner}>
          <div className={styles.kickerWrap}>
            <span className={styles.kicker}>About the Group</span>
            <span className={styles.kickerLine} />
          </div>

          <div className={styles.content}>
            <div className={styles.left}>
              <h1 className={styles.title}>
                Building bridges across
                <span>particle physics, cosmology,</span>
                and data-driven theory
              </h1>

              <p className={styles.lead}>
                The UCN Particle Physics & Cosmology Group develops research at
                the intersection of fundamental theory, phenomenology,
                computation, and academic formation, connecting local scientific
                growth with international collaborations and contemporary
                questions in high energy physics.
              </p>
            </div>

            <div className={styles.right}>
              <div className={styles.panel}>
                <div className={styles.panelTop}>Institutional Profile</div>
                <div className={styles.panelBody}>
                  <p>
                    A research environment oriented toward fundamental
                    questions, rigorous training, collaboration, and scientific
                    projection.
                  </p>

                  <div className={styles.stats}>
                    <div>
                      <span>Focus</span>
                      <strong>HEP & Cosmology</strong>
                    </div>
                    <div>
                      <span>Approach</span>
                      <strong>Theory + Computation</strong>
                    </div>
                    <div>
                      <span>Environment</span>
                      <strong>Research & Training</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.floatingCard}>
                <span className={styles.floatingLabel}>UCN</span>
                <p>
                  Fundamental physics with an international outlook and a strong
                  academic identity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}