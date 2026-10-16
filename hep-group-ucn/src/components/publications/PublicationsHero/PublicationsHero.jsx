"use client";
import LocalizedText from "@/components/i18n/LocalizedText";

import styles from "./PublicationsHero.module.css";
import Container from "@/components/layout/Container";

export default function PublicationsHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgBase} />
      <div className={styles.bgGlow} />
      <div className={styles.grid} />

      <Container>
        <div className={styles.inner}>
          <div className={styles.kickerWrap}>
            <span className={styles.kicker}><LocalizedText id="p_82b2eb07aaea">Publications</LocalizedText></span>
            <span className={styles.kickerLine} />
          </div>

          <div className={styles.content}>
            <div className={styles.left}>
              <h1 className={styles.title}><LocalizedText id="p_160ae58650d5">Publications across</LocalizedText><span><LocalizedText id="p_231f7f0a483d">cosmology, particle physics,</LocalizedText></span><LocalizedText id="p_436b8bec37ae">and computation</LocalizedText></h1>

              <p className={styles.lead}><LocalizedText id="p_26277096b185">This page gathers representative scientific output related to cosmology, dark matter, neutrino physics, Higgs physics, large-scale structure, gravitational waves, and computational methods, presented in a curated and searchable format.</LocalizedText></p>
            </div>

            <div className={styles.right}>
              <div className={styles.panel}>
                <div className={styles.panelTop}><LocalizedText id="p_070128f868f7">Publication Overview</LocalizedText></div>
                <div className={styles.panelBody}>
                  <p><LocalizedText id="p_ada3be0340dd">A curated publication space designed to explore research output by topic, title, and scientific direction.</LocalizedText></p>

                  <div className={styles.stats}>
                    <div>
                      <span><LocalizedText id="p_523487a5de21">Coverage</LocalizedText></span>
                      <strong>2023 · 2024 · 2025 · 2026</strong>
                    </div>
                    <div>
                      <span><LocalizedText id="p_43ae3265b99f">Themes</LocalizedText></span>
                      <strong><LocalizedText id="p_ae0d4002dcab">Cosmology · DM · Neutrinos · BSM</LocalizedText></strong>
                    </div>
                    <div>
                      <span><LocalizedText id="p_2f343666aaa8">Format</LocalizedText></span>
                      <strong><LocalizedText id="p_5194c8545a4c">Searchable · Curated · Topic-based</LocalizedText></strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.floatingCard}>
                <span className={styles.floatingLabel}><LocalizedText id="p_b2439bcb8dee">Output</LocalizedText></span>
                <p><LocalizedText id="p_4336950e5c73">A research record organized through themes, visibility, and scientific context.</LocalizedText></p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
