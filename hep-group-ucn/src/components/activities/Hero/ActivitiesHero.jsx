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

              <p className={styles.lead}><LocalizedText id="p_508297d0df53">Beyond research results, this page documents the encounters and shared experiences that sustain the group’s academic community.</LocalizedText></p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
