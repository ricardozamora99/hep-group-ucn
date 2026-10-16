"use client";
import LocalizedText from "@/components/i18n/LocalizedText";

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
            <span className={styles.kicker}><LocalizedText id="p_8f53a5bb8a3e">About the Group</LocalizedText></span>
            <span className={styles.kickerLine} />
          </div>

          <div className={styles.content}>
            <div className={styles.left}>
              <h1 className={styles.title}><LocalizedText id="p_33375a7c854d">Building bridges across</LocalizedText><span><LocalizedText id="p_c2e91c678f44">particle physics, cosmology,</LocalizedText></span><LocalizedText id="p_01d6fa29afd3">and data-driven theory</LocalizedText></h1>

              <p className={styles.lead}><LocalizedText id="p_5873c58c76a0">The UCN Particle Physics & Cosmology Group develops research at the intersection of fundamental theory, phenomenology, computation, and academic formation, connecting local scientific growth with international collaborations and contemporary questions in high energy physics.</LocalizedText></p>
            </div>

            <div className={styles.right}>
              <div className={styles.panel}>
                <div className={styles.panelTop}><LocalizedText id="p_fdfb6e081660">Institutional Profile</LocalizedText></div>
                <div className={styles.panelBody}>
                  <p><LocalizedText id="p_de714e673e80">A research environment oriented toward fundamental questions, rigorous training, collaboration, and scientific projection.</LocalizedText></p>

                  <div className={styles.stats}>
                    <div>
                      <span><LocalizedText id="p_9d3cab2b5efe">Focus</LocalizedText></span>
                      <strong><LocalizedText id="p_a89a1eeb2c06">HEP & Cosmology</LocalizedText></strong>
                    </div>
                    <div>
                      <span><LocalizedText id="p_b6b243caef1e">Approach</LocalizedText></span>
                      <strong><LocalizedText id="p_acf0a0ec629a">Theory + Computation</LocalizedText></strong>
                    </div>
                    <div>
                      <span><LocalizedText id="p_9e471951a1b4">Environment</LocalizedText></span>
                      <strong><LocalizedText id="p_9ab51f80b65a">Research & Training</LocalizedText></strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.floatingCard}>
                <span className={styles.floatingLabel}><LocalizedText id="p_aeba03966311">UCN</LocalizedText></span>
                <p><LocalizedText id="p_79b803874df9">Fundamental physics with an international outlook and a strong academic identity.</LocalizedText></p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
