"use client";
import LocalizedText from "@/components/i18n/LocalizedText";

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
            <span className={styles.kicker}><LocalizedText id="p_650a80281010">Research Areas</LocalizedText></span>
            <h2 className={styles.title}><LocalizedText id="p_0f06f90f9ccc">The main scientific pillars</LocalizedText><span><LocalizedText id="p_d36c818b06e0">of the group’s work</LocalizedText></span>
            </h2>
          </div>

          <p className={styles.intro}><LocalizedText id="p_5ba24f68f661">The research program is broad, but organized around a coherent set of theoretical, phenomenological, and cosmological questions.</LocalizedText></p>
        </div>

        <div className={styles.grid}>
          <article className={styles.featuredCard}>
            <span className={styles.badge}><LocalizedText id="p_9d83bd8e0108">Featured Area</LocalizedText></span>
            <h3><LocalizedText text={areas[0].title} /></h3>
            <p><LocalizedText text={areas[0].text} /></p>
          </article>

          <div className={styles.sideColumn}>
            {areas.slice(1).map((area) => (
              <article key={area.title} className={styles.card}>
                <h3><LocalizedText text={area.title} /></h3>
                <p><LocalizedText text={area.text} /></p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
