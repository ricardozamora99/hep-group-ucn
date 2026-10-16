"use client";
import LocalizedText from "@/components/i18n/LocalizedText";

import styles from "./ResearchScope.module.css";
import Container from "@/components/layout/Container";

const areas = [
  {
    title: "Particle Phenomenology",
    text: "Studies of physics beyond the Standard Model, effective structures, and phenomenological implications of new theoretical frameworks.",
  },
  {
    title: "Neutrino Physics",
    text: "Work related to neutrino masses, seesaw constructions, flavor structure, leptogenesis, and the broader role of neutrinos in fundamental theory.",
  },
  {
    title: "Cosmology & Early Universe",
    text: "Links between particle physics and cosmological observables, including baryogenesis, dark matter, thermal history, and related mechanisms.",
  },
  {
    title: "Computational Methods",
    text: "Numerical pipelines, parameter scans, Boltzmann equations, phenomenological constraints, and reproducible computational workflows.",
  },
];

export default function ResearchScope() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.top}>
          <div>
            <span className={styles.kicker}><LocalizedText id="p_ceb5c893508c">Scientific scope</LocalizedText></span>
            <h2><LocalizedText id="p_2ac9a94e6013">Research lines in dialogue across scales</LocalizedText></h2>
          </div>

          <p className={styles.sideText}><LocalizedText id="p_d58ee8bb0b87">The group’s scientific profile is broad but coherent: it is shaped by the search for conceptual consistency, phenomenological relevance, and connections between particle physics and the universe.</LocalizedText></p>
        </div>

        <div className={styles.band}>
          <div className={styles.bandInner}>
            <span><LocalizedText id="p_6833bf07bc8a">Main research fields</LocalizedText></span>
            <strong><LocalizedText id="p_f2c8ecb58aef">Theory · Phenomenology · Cosmology · Computation</LocalizedText></strong>
          </div>
        </div>

        <div className={styles.grid}>
          {areas.map((area) => (
            <article key={area.title} className={styles.card}>
              <div className={styles.cardLine} />
              <h3><LocalizedText text={area.title} /></h3>
              <p><LocalizedText text={area.text} /></p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
