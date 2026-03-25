"use client";

import styles from "./ActivitiesHero.module.css";
import Container from "@/components/layout/Container";

export default function ActivitiesHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgBase} />
      <div className={styles.bgGlow} />
      <div className={styles.grid} />

      <Container>
        <div className={styles.inner}>
          <div className={styles.kickerWrap}>
            <span className={styles.kicker}>Activities</span>
            <span className={styles.kickerLine} />
          </div>

          <div className={styles.content}>
            <div className={styles.left}>
              <h1 className={styles.title}>
                Workshops, outreach,
                <span>and the broader life</span>
                of the group
              </h1>

              <p className={styles.lead}>
                Workshops, outreach, academic exchange, and the shared
                experiences that shape our group life.
              </p>
            </div>

            <div className={styles.right}>
              <div className={styles.panel}>
                <div className={styles.panelTop}>Activities Overview</div>

                <div className={styles.panelBody}>
                  <p>
                    A page dedicated to academic workshops, broader scientific
                    activity, and the community experiences that accompany the
                    group’s life in Antofagasta.
                  </p>

                  <div className={styles.stats}>
                    <div>
                      <span>Academic</span>
                      <strong>Workshops · Outreach · Exchange</strong>
                    </div>
                    <div>
                      <span>Community</span>
                      <strong>Shared moments with visitors and collaborators</strong>
                    </div>
                    <div>
                      <span>Focus</span>
                      <strong>Scientific activity with human context</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.floatingCard}>
                <span className={styles.floatingLabel}>Community</span>
                <p>
                  Academic life, shared experiences, and the group beyond the
                  seminar room.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}