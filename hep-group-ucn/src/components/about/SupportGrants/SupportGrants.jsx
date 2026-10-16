"use client";
import LocalizedText from "@/components/i18n/LocalizedText";

import styles from "./SupportGrants.module.css";
import Container from "@/components/layout/Container";

const supportItems = [
  "Institutional support and academic infrastructure",
  "Funded projects and research development lines",
  "Visibility for sustained scientific activity",
];

export default function SupportGrants() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.layout}>
          <div className={styles.left}>
            <span className={styles.kicker}><LocalizedText id="p_52e3108d92dd">Support & grants</LocalizedText></span>
            <h2><LocalizedText id="p_63902e0d04df">Scientific growth also requires structure</LocalizedText></h2>
            <p><LocalizedText id="p_ee462a03ed00">Research develops within institutional frameworks that make continuity possible. Funding, university support, and project structures play a central role in sustaining long-term scientific work, training, and collaboration.</LocalizedText></p>

            <div className={styles.items}>
              {supportItems.map((item) => (
                <div key={item} className={styles.item}>
                  <LocalizedText text={item} />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.cardMain}>
              <span className={styles.label}><LocalizedText id="p_7204d34b61ee">Institutional note</LocalizedText></span>
              <h3><LocalizedText id="p_459ff4d2b6e7">Support gives continuity to ideas, people, and projects.</LocalizedText></h3>
            </div>

            <div className={styles.cardSub}>
              <p><LocalizedText id="p_d7a009f890f8">This section can later host specific grants, project titles, funding programs, institutional partners, or logos when you want to make it more concrete.</LocalizedText></p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
