"use client";

import styles from "./CollaborationsHero.module.css";
import Container from "@/components/layout/Container";

export default function CollaborationsHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgBase} />
      <div className={styles.bgGlow} />
      <div className={styles.grid} />

      <Container>
        <div className={styles.inner}>
          <div className={styles.kickerWrap}>
            <span className={styles.kicker}>Collaborations</span>
            <span className={styles.kickerLine} />
          </div>

          <div className={styles.content}>
            <div className={styles.left}>
              <h1 className={styles.title}>
                Scientific links across
                <span>experiments, universities,</span>
                and research networks
              </h1>

              <p className={styles.lead}>
                The group’s research life is strengthened by sustained academic
                links with international experiments, partner institutions, and
                recurring collaborators who contribute to training, discussion,
                and scientific development.
              </p>
            </div>

            <div className={styles.right}>
              <div className={styles.panel}>
                <div className={styles.panelTop}>Collaboration Profile</div>
                <div className={styles.panelBody}>
                  <p>
                    A network shaped by experimental links, institutional
                    exchange, and long-term scientific interaction in particle
                    physics and cosmology.
                  </p>

                  <div className={styles.stats}>
                    <div>
                      <span>Scope</span>
                      <strong>Experiments & Universities</strong>
                    </div>
                    <div>
                      <span>Examples</span>
                      <strong>DUNE, NOvA, partner institutions</strong>
                    </div>
                    <div>
                      <span>Role</span>
                      <strong>Research, exchange, and training</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.floatingCard}>
                <span className={styles.floatingLabel}>Network</span>
                <p>
                  Local academic growth connected to broader international
                  research activity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}