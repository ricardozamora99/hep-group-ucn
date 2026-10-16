"use client";
import LocalizedText from "@/components/i18n/LocalizedText";

import styles from "./MethodsApproach.module.css";
import Container from "@/components/layout/Container";

const methods = [
  {
    title: "Theoretical Modeling",
    text: "Construction and analysis of models in particle physics, neutrino physics, Higgs-related scenarios, and cosmological extensions.",
  },
  {
    title: "Phenomenological Analysis",
    text: "Study of observable implications, constraints, flavour effects, precision signatures, and viability of theoretical frameworks.",
  },
  {
    title: "Computational Workflows",
    text: "Numerical scans, Boltzmann equations, parameter-space exploration, and reproducible research pipelines for modern phenomenology.",
  },
];

export default function MethodsApproach() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.layout}>
          <div className={styles.left}>
            <span className={styles.kicker}><LocalizedText id="p_f00ca33ef6a8">Methods & Approach</LocalizedText></span>
            <h2 className={styles.title}><LocalizedText id="p_1e08add17b6e">How the group develops</LocalizedText><span><LocalizedText id="p_b18cc0cfd2a8">its research practice</LocalizedText></span>
            </h2>
            <p className={styles.lead}><LocalizedText id="p_63d1bb89cd8c">Research is carried out through a combination of formal theory, phenomenological interpretation, and computational analysis, allowing the group to move between conceptual questions and concrete quantitative exploration.</LocalizedText></p>
          </div>

          <div className={styles.right}>
            {methods.map((m) => (
              <article key={m.title} className={styles.card}>
                <h3><LocalizedText text={m.title} /></h3>
                <p><LocalizedText text={m.text} /></p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
