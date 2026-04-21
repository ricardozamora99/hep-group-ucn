"use client";

import styles from "./ResearchAreas.module.css";
import Container from "@/components/layout/Container";

const areas = [
  {
    title: "Particle Phenomenology",
    text: "Work on extensions of the Standard Model, phenomenological consequences of new physics, Higgs-related questions, and links between theory and observables.",
    featured: true,
  },
  {
    title: "Neutrino Physics",
    text: "Neutrino masses, oscillation-related questions, seesaw structures, flavour, and the broader theoretical implications of neutrino phenomenology.",
  },
  {
    title: "Cosmology & Early Universe",
    text: "Baryogenesis, leptogenesis, dark matter models, and mechanisms connecting particle physics to the thermal and dynamical history of the universe.",
  },
  {
    title: "Lepton Flavour & Precision Effects",
    text: "Lepton flavour violation and related probes of new physics beyond the Standard Model.",
  },
];

export default function ResearchAreas() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.top}>
          <div className={styles.heading}>
            <span className={styles.kicker}>Research Areas</span>
            <h2 className={styles.title}>
              The main scientific pillars
              <span>of the group’s work</span>
            </h2>
          </div>

          <p className={styles.intro}>
            The research program is broad, but organized around a coherent set
            of theoretical, phenomenological, and cosmological questions.
          </p>
        </div>

        <div className={styles.grid}>
          <article className={styles.featuredCard}>
            <span className={styles.badge}>Featured Area</span>
            <h3>{areas[0].title}</h3>
            <p>{areas[0].text}</p>
          </article>

          <div className={styles.sideColumn}>
            {areas.slice(1).map((area) => (
              <article key={area.title} className={styles.card}>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}