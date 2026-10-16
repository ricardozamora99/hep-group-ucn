"use client";
import LocalizedText from "@/components/i18n/LocalizedText";

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
            <span className={styles.kicker}><LocalizedText id="p_7db20897053b">People</LocalizedText></span>
            <span className={styles.kickerLine} />
          </div>

          <div className={styles.content}>
            <div className={styles.left}>
              <h1 className={styles.title}><LocalizedText id="p_7db20897053b">People</LocalizedText><span><LocalizedText id="p_7e9f136a8a33">&amp; Network</LocalizedText></span>
              </h1>

              <p className={styles.lead}><LocalizedText id="p_557564e172a2">Current members, alumni, and close collaborators who shape the academic life of the group.</LocalizedText></p>
            </div>

            <div className={styles.right}>
              <div className={styles.panel}>
                <div className={styles.panelTop}><LocalizedText id="p_f5035307d99d">Group Structure</LocalizedText></div>

                <div className={styles.panelBody}>
                  <p><LocalizedText id="p_18b0daf315dc">The group brings together current students, past members, and frequent collaborators across different stages of academic formation and research exchange.</LocalizedText></p>

                  <div className={styles.stats}>
                    <div>
                      <span><LocalizedText id="p_e0d1b68224bf">Current</LocalizedText></span>
                      <strong><LocalizedText id="p_edbccdd5df8f">Head · PhD · Master’s · Bachelor’s</LocalizedText></strong>
                    </div>
                    <div>
                      <span><LocalizedText id="p_c808c87cd1ad">Academic Continuity</LocalizedText></span>
                      <strong><LocalizedText id="p_ca23fdc9d9eb">Alumni and training trajectory</LocalizedText></strong>
                    </div>
                    <div>
                      <span><LocalizedText id="p_1744b96470b5">Network</LocalizedText></span>
                      <strong><LocalizedText id="p_da63bfc7d353">Frequent collaborators across institutions</LocalizedText></strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.floatingCard}>
                <span className={styles.floatingLabel}><LocalizedText id="p_840e65e80543">People &amp; Network</LocalizedText></span>
                <p><LocalizedText id="p_d63781dc97eb">A view of the group through its members, academic trajectory, and close collaborations.</LocalizedText></p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
