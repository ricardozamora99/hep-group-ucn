"use client";
import LocalizedText from "@/components/i18n/LocalizedText";

import styles from "./MissionVision.module.css";
import Container from "@/components/layout/Container";

export default function MissionVision() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <span className={styles.kicker}><LocalizedText id="p_999f23fcd7be">Identity</LocalizedText></span>
          <h2><LocalizedText id="p_cbe2bff3e172">Mission, vision, and intellectual direction</LocalizedText></h2>
        </div>

        <div className={styles.grid}>
          <article className={styles.mission}>
            <span className={styles.label}><LocalizedText id="p_e6b85bfbf550">Mission</LocalizedText></span>
            <h3><LocalizedText id="p_05af98454732">To advance research in particle physics and cosmology through rigorous theoretical work, computational methods, and academic formation.</LocalizedText></h3>
            <p><LocalizedText id="p_99d0e91fc9dc">The group aims to develop meaningful contributions to fundamental physics while cultivating a local research culture that is connected to international dialogue, scientific responsibility, and the training of future researchers.</LocalizedText></p>
          </article>

          <article className={styles.vision}>
            <span className={styles.label}><LocalizedText id="p_c587c2601ccf">Vision</LocalizedText></span>
            <h3><LocalizedText id="p_6ddffefdf370">To consolidate a research space with international relevance, conceptual depth, and strong educational impact.</LocalizedText></h3>
            <p><LocalizedText id="p_aa2d7288b75b">Our long-term horizon is to strengthen a sustained environment for high energy physics and cosmology at UCN, where scientific inquiry is ambitious, collaborative, and intellectually open.</LocalizedText></p>
          </article>

          <article className={styles.values}>
            <span className={styles.label}><LocalizedText id="p_b6b243caef1e">Approach</LocalizedText></span>
            <ul>
              <li><LocalizedText id="p_701f48d2e0c8">Conceptual rigor and physical clarity</LocalizedText></li>
              <li><LocalizedText id="p_69256702c906">Dialogue between formal theory and computation</LocalizedText></li>
              <li><LocalizedText id="p_d6172e3dab9a">Commitment to training and academic community</LocalizedText></li>
              <li><LocalizedText id="p_d421b920907f">Collaboration across institutions and scales</LocalizedText></li>
            </ul>
          </article>
        </div>
      </Container>
    </section>
  );
}
