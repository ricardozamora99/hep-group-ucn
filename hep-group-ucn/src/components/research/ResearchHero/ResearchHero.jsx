"use client";
import LocalizedText from "@/components/i18n/LocalizedText";

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
            <span className={styles.kicker}><LocalizedText id="p_979d6300fd98">Research</LocalizedText></span>
            <span className={styles.kickerLine} />
          </div>

          <div className={styles.content}>
            <div className={styles.left}>
              <h1 className={styles.title}><LocalizedText id="p_d3777db7cc73">Scientific questions across</LocalizedText><span><LocalizedText id="p_c2e91c678f44">particle physics, cosmology,</LocalizedText></span><LocalizedText id="p_436b8bec37ae">and computation</LocalizedText></h1>

              <p className={styles.lead}><LocalizedText id="p_021458d37cfb">The group develops research in particle phenomenology, neutrino physics, cosmology, leptogenesis, dark matter, Higgs-related questions, lepton flavour violation, and numerical approaches that connect theoretical ideas with phenomenological and observational relevance.</LocalizedText></p>
            </div>

            <div className={styles.right}>
              <div className={styles.panel}>
                <div className={styles.panelTop}><LocalizedText id="p_6f4cfdc170cf">Research Overview</LocalizedText></div>
                <div className={styles.panelBody}>
                  <p><LocalizedText id="p_61f8cb6e0e08">A scientific program organized around fundamental questions, phenomenological consequences, and computational methods across multiple scales.</LocalizedText></p>

                  <div className={styles.stats}>
                    <div>
                      <span><LocalizedText id="p_70ea1983c983">Core</LocalizedText></span>
                      <strong><LocalizedText id="p_c4205bbdb822">Theory & Phenomenology</LocalizedText></strong>
                    </div>
                    <div>
                      <span><LocalizedText id="p_e22820fcf5cd">Topics</LocalizedText></span>
                      <strong><LocalizedText id="p_e2b6a02eaa9e">Neutrinos · DM · Higgs · Early Universe</LocalizedText></strong>
                    </div>
                    <div>
                      <span><LocalizedText id="p_8696622f3441">Methods</LocalizedText></span>
                      <strong><LocalizedText id="p_4c480b515cb2">Analytical + Numerical</LocalizedText></strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.floatingCard}>
                <span className={styles.floatingLabel}><LocalizedText id="p_979d6300fd98">Research</LocalizedText></span>
                <p><LocalizedText id="p_2e1d49a2628d">Theory, phenomenology, and computation in dialogue across fundamental physics.</LocalizedText></p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
