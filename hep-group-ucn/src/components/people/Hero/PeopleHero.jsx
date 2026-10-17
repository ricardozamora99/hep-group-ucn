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
            <span className={styles.kicker}><LocalizedText id="p_people_community">Community</LocalizedText></span>
            <span className={styles.kickerLine} />
          </div>

          <div className={styles.content}>
            <div className={styles.left}>
              <h1 className={styles.title}><LocalizedText id="p_7db20897053b">People</LocalizedText><span><LocalizedText id="p_7e9f136a8a33">&amp; Network</LocalizedText></span>
              </h1>

              <p className={styles.lead}><LocalizedText id="p_557564e172a2">Current members, alumni, and close collaborators who shape the academic life of the group.</LocalizedText></p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
