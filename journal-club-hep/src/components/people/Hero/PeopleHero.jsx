"use client";

import styles from "./PeopleHero.module.css";
import Container from "@/components/layout/Container";

export default function PeopleHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgBase} />
      <div className={styles.bgGlow} />
      <div className={styles.grid} />

      <Container>
        <div className={styles.inner}>
          <div className={styles.kickerWrap}>
            <span className={styles.kicker}>People</span>
            <span className={styles.kickerLine} />
          </div>

          <div className={styles.content}>
            <div className={styles.left}>
              <h1 className={styles.title}>
                People
                <span>&amp; Network</span>
              </h1>

              <p className={styles.lead}>
                Current members, alumni, and close collaborators who shape the
                academic life of the group.
              </p>
            </div>

            <div className={styles.right}>
              <div className={styles.panel}>
                <div className={styles.panelTop}>Group Structure</div>

                <div className={styles.panelBody}>
                  <p>
                    The group brings together current students, past members,
                    and frequent collaborators across different stages of
                    academic formation and research exchange.
                  </p>

                  <div className={styles.stats}>
                    <div>
                      <span>Current</span>
                      <strong>Head · PhD · Master’s · Bachelor’s</strong>
                    </div>
                    <div>
                      <span>Academic Continuity</span>
                      <strong>Alumni and training trajectory</strong>
                    </div>
                    <div>
                      <span>Network</span>
                      <strong>Frequent collaborators across institutions</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.floatingCard}>
                <span className={styles.floatingLabel}>People &amp; Network</span>
                <p>
                  A view of the group through its members, academic trajectory,
                  and close collaborations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}