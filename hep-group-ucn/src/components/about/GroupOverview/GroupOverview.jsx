"use client";
import LocalizedText from "@/components/i18n/LocalizedText";

import styles from "./GroupOverview.module.css";
import Container from "@/components/layout/Container";

export default function GroupOverview() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.top}>
          <div className={styles.heading}>
            <span className={styles.kicker}><LocalizedText id="p_696ab4d5bfb5">Who we are</LocalizedText></span>
            <h2><LocalizedText id="p_c41aa723d45f">A research group shaped by</LocalizedText><span><LocalizedText id="p_09e33d2afb97">fundamental questions</LocalizedText></span>
            </h2>
          </div>

          <div className={styles.introCard}>
            <p><LocalizedText id="p_e5fc5d70a385">Our work seeks conceptual clarity, phenomenological relevance, and mathematical rigor while cultivating a strong academic community around contemporary problems in high energy physics and cosmology.</LocalizedText></p>
          </div>
        </div>

        <div className={styles.layout}>
          <div className={styles.mainText}>
            <p><LocalizedText id="p_d3fbd1c0e4c9">The UCN Particle Physics & Cosmology Group brings together research interests in particle phenomenology, beyond-the-Standard Model physics, neutrino physics, early-universe questions, and related computational methods. The group develops work that moves naturally between formal theoretical structures and the numerical tools required to test ideas against physical constraints.</LocalizedText></p>

            <p><LocalizedText id="p_5f72c5c56e6d">Beyond its scientific agenda, the group also functions as an academic environment for training, discussion, and intellectual exchange. It contributes to the development of students and young researchers through seminars, group discussions, supervision, journal activities, and participation in broader research networks.</LocalizedText></p>

            <p><LocalizedText id="p_c8a576248318">This dual identity — rigorous research and academic formation — defines the group’s character: locally rooted, scientifically ambitious, and open to collaboration across institutions and scales of inquiry.</LocalizedText></p>
          </div>

          <aside className={styles.sideColumn}>
            <div className={styles.note}>
              <span><LocalizedText id="p_0fc466c67cbd">Research character</LocalizedText></span>
              <strong><LocalizedText id="p_721cb5f545b1">Theory, phenomenology, and computational physics</LocalizedText></strong>
            </div>

            <div className={styles.note}>
              <span><LocalizedText id="p_dddb2f9ff5d4">Academic role</LocalizedText></span>
              <strong><LocalizedText id="p_f950ce6d2e1e">Training, discussion, supervision, and community</LocalizedText></strong>
            </div>

            <div className={styles.noteAccent}>
              <span><LocalizedText id="p_4b12707508fc">Guiding idea</LocalizedText></span>
              <p><LocalizedText id="p_687c4454fbaa">To connect deep theoretical problems with active scientific dialogue and international visibility.</LocalizedText></p>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
