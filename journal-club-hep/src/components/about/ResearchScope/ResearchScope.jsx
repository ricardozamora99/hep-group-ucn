"use client";

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
            <span className={styles.kicker}>Scientific scope</span>
            <h2>Research lines in dialogue across scales</h2>
          </div>

          <p className={styles.sideText}>
            The group’s scientific profile is broad but coherent: it is shaped
            by the search for conceptual consistency, phenomenological
            relevance, and connections between particle physics and the
            universe.
          </p>
        </div>

        <div className={styles.band}>
          <div className={styles.bandInner}>
            <span>Main research fields</span>
            <strong>Theory · Phenomenology · Cosmology · Computation</strong>
          </div>
        </div>

        <div className={styles.grid}>
          {areas.map((area) => (
            <article key={area.title} className={styles.card}>
              <div className={styles.cardLine} />
              <h3>{area.title}</h3>
              <p>{area.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}