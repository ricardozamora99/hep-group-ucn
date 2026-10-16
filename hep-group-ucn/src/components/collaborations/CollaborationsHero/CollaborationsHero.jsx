"use client";
import LocalizedText from "@/components/i18n/LocalizedText";

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
            <span className={styles.kicker}><LocalizedText id="p_9708849b2590">Collaborations</LocalizedText></span>
            <span className={styles.kickerLine} />
          </div>

          <div className={styles.content}>
            <div className={styles.left}>
              <h1 className={styles.title}><LocalizedText id="p_36233f5b57b2">Scientific links across</LocalizedText><span><LocalizedText id="p_bf28ff5bbcb5">experiments, universities,</LocalizedText></span><LocalizedText id="p_5475e701fd24">and research networks</LocalizedText></h1>

              <p className={styles.lead}><LocalizedText id="p_26a4e94a6a64">The group’s research life is strengthened by sustained academic links with international experiments, partner institutions, and recurring collaborators who contribute to training, discussion, and scientific development.</LocalizedText></p>
            </div>

            <div className={styles.right}>
              <div className={styles.panel}>
                <div className={styles.panelTop}><LocalizedText id="p_b6697b365f86">Collaboration Profile</LocalizedText></div>
                <div className={styles.panelBody}>
                  <p><LocalizedText id="p_5988d686774e">A network shaped by experimental links, institutional exchange, and long-term scientific interaction in particle physics and cosmology.</LocalizedText></p>

                  <div className={styles.stats}>
                    <div>
                      <span><LocalizedText id="p_b073f6c68ef8">Scope</LocalizedText></span>
                      <strong><LocalizedText id="p_9bc98fa7c6b1">Experiments & Universities</LocalizedText></strong>
                    </div>
                    <div>
                      <span><LocalizedText id="p_e68ee04dff59">Examples</LocalizedText></span>
                      <strong><LocalizedText id="p_869f325dbfec">DUNE, NOvA, partner institutions</LocalizedText></strong>
                    </div>
                    <div>
                      <span><LocalizedText id="p_14736a2eb9f4">Role</LocalizedText></span>
                      <strong><LocalizedText id="p_7adb504f64c5">Research, exchange, and training</LocalizedText></strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.floatingCard}>
                <span className={styles.floatingLabel}><LocalizedText id="p_1744b96470b5">Network</LocalizedText></span>
                <p><LocalizedText id="p_31d8a5768465">Local academic growth connected to broader international research activity.</LocalizedText></p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
