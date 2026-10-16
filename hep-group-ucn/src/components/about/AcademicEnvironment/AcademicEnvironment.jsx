"use client";
import LocalizedText from "@/components/i18n/LocalizedText";

import styles from "./AcademicEnvironment.module.css";
import Container from "@/components/layout/Container";

const items = [
  "Journal club activities and scientific discussion",
  "Student formation through research and supervision",
  "Seminars, workshops, and internal exchange",
  "Integration of computation into modern theoretical work",
];

export default function AcademicEnvironment() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.layout}>
          <div className={styles.left}>
            <span className={styles.kicker}><LocalizedText id="p_3d2627a9f42b">Academic environment</LocalizedText></span>
            <h2><LocalizedText id="p_31941fdc33f3">Research is also built</LocalizedText><span><LocalizedText id="p_1b0ff94174b9">through community</LocalizedText></span>
            </h2>
            <p><LocalizedText id="p_87594981e462">The group understands scientific development not only as the production of results, but also as the cultivation of a living academic environment. Training, conversation, mentorship, and regular intellectual exchange are part of the structure through which ideas mature and new researchers emerge.</LocalizedText></p>

            <div className={styles.rule} />

            <ul className={styles.list}>
              {items.map((item) => (
                <li key={item}><LocalizedText text={item} /></li>
              ))}
            </ul>
          </div>

          <div className={styles.right}>
            <div className={styles.frame}>
              <div className={styles.frameInner}>
                <span className={styles.smallLabel}><LocalizedText id="p_402b3d52f2b5">Atmosphere</LocalizedText></span>
                <h3><LocalizedText id="p_bd7226b43997">Discussion, formation, and continuity</LocalizedText></h3>
                <p><LocalizedText id="p_0f2365f5e6ff">A group grows when research questions are sustained by a shared intellectual culture.</LocalizedText></p>
              </div>
            </div>

            <div className={styles.stack}>
              <div className={styles.miniCard}>
                <span><LocalizedText id="p_36a798e3f392">Training</LocalizedText></span>
                <strong><LocalizedText id="p_870460afe885">Students and early researchers</LocalizedText></strong>
              </div>
              <div className={styles.miniCard}>
                <span><LocalizedText id="p_38da1505ca83">Activity</LocalizedText></span>
                <strong><LocalizedText id="p_a37176c4f35b">Seminars, meetings, and scientific dialogue</LocalizedText></strong>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
