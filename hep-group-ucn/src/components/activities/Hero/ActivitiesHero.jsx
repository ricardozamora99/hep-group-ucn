"use client";
import LocalizedText from "@/components/i18n/LocalizedText";

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
            <span className={styles.kicker}><LocalizedText id="p_4d0076e6b4c7">Activities</LocalizedText></span>
            <span className={styles.kickerLine} />
          </div>

          <div className={styles.content}>
            <div className={styles.left}>
              <h1 className={styles.title}><LocalizedText id="p_5b152f0e6f86">Workshops, outreach,</LocalizedText><span><LocalizedText id="p_877550a3275d">and the broader life</LocalizedText></span><LocalizedText id="p_fd17482496c6">of the group</LocalizedText></h1>

              <p className={styles.lead}><LocalizedText id="p_508297d0df53">Workshops, outreach, academic exchange, and the shared experiences that shape our group life.</LocalizedText></p>
            </div>

            <div className={styles.right}>
              <div className={styles.panel}>
                <div className={styles.panelTop}><LocalizedText id="p_8e3a81052ab3">Activities Overview</LocalizedText></div>

                <div className={styles.panelBody}>
                  <p><LocalizedText id="p_f93908a70f6c">A page dedicated to academic workshops, broader scientific activity, and the community experiences that accompany the group’s life in Antofagasta.</LocalizedText></p>

                  <div className={styles.stats}>
                    <div>
                      <span><LocalizedText id="p_20a41b5bec99">Academic</LocalizedText></span>
                      <strong><LocalizedText id="p_67c512692fa4">Workshops · Outreach · Exchange</LocalizedText></strong>
                    </div>
                    <div>
                      <span><LocalizedText id="p_bb501d7877eb">Community</LocalizedText></span>
                      <strong><LocalizedText id="p_7565912d86a2">Shared moments with visitors and collaborators</LocalizedText></strong>
                    </div>
                    <div>
                      <span><LocalizedText id="p_9d3cab2b5efe">Focus</LocalizedText></span>
                      <strong><LocalizedText id="p_ab924bdb00d5">Scientific activity with human context</LocalizedText></strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.floatingCard}>
                <span className={styles.floatingLabel}><LocalizedText id="p_bb501d7877eb">Community</LocalizedText></span>
                <p><LocalizedText id="p_016af17a9ccd">Academic life, shared experiences, and the group beyond the seminar room.</LocalizedText></p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
