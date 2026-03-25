"use client";

import styles from "./ResearchHero.module.css";
import Container from "@/components/layout/Container";

export default function ResearchHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgBase} />
      <div className={styles.bgGlow} />
      <div className={styles.grid} />

      <Container>
        <div className={styles.inner}>
          <div className={styles.kickerWrap}>
            <span className={styles.kicker}>Research</span>
            <span className={styles.kickerLine} />
          </div>

          <div className={styles.content}>
            <div className={styles.left}>
              <h1 className={styles.title}>
                Scientific questions across
                <span>particle physics, cosmology,</span>
                and computation
              </h1>

              <p className={styles.lead}>
                The group develops research in particle phenomenology, neutrino
                physics, cosmology, leptogenesis, dark matter, Higgs-related
                questions, lepton flavour violation, and numerical approaches
                that connect theoretical ideas with phenomenological and
                observational relevance.
              </p>
            </div>

            <div className={styles.right}>
              <div className={styles.panel}>
                <div className={styles.panelTop}>Research Overview</div>
                <div className={styles.panelBody}>
                  <p>
                    A scientific program organized around fundamental questions,
                    phenomenological consequences, and computational methods
                    across multiple scales.
                  </p>

                  <div className={styles.stats}>
                    <div>
                      <span>Core</span>
                      <strong>Theory & Phenomenology</strong>
                    </div>
                    <div>
                      <span>Topics</span>
                      <strong>Neutrinos · DM · Higgs · Early Universe</strong>
                    </div>
                    <div>
                      <span>Methods</span>
                      <strong>Analytical + Numerical</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.floatingCard}>
                <span className={styles.floatingLabel}>Research</span>
                <p>
                  Theory, phenomenology, and computation in dialogue across
                  fundamental physics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}