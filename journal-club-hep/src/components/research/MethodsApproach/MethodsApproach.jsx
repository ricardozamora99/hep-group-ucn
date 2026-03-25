"use client";

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
            <span className={styles.kicker}>Methods & Approach</span>
            <h2 className={styles.title}>
              How the group develops
              <span>its research practice</span>
            </h2>
            <p className={styles.lead}>
              Research is carried out through a combination of formal theory,
              phenomenological interpretation, and computational analysis,
              allowing the group to move between conceptual questions and
              concrete quantitative exploration.
            </p>
          </div>

          <div className={styles.right}>
            {methods.map((m) => (
              <article key={m.title} className={styles.card}>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}