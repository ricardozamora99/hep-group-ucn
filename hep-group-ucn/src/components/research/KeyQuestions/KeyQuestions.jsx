"use client";
import LocalizedText from "@/components/i18n/LocalizedText";

import styles from "./KeyQuestions.module.css";
import Container from "@/components/layout/Container";

const questions = [
  "What mechanisms can explain neutrino masses, flavour structure, and oscillation-related phenomena?",
  "How can physics beyond the Standard Model manifest through Higgs, lepton-flavour, and precision effects?",
  "What particle-physics mechanisms can account for dark matter and matter-antimatter asymmetry?",
  "How can theoretical structures be tested through phenomenological constraints and computational analysis?",
];

export default function KeyQuestions() {
  return (
    <section className={styles.section}>
      <Container>
        <header className={styles.header}>
          <span className={styles.kicker}><LocalizedText id="p_44e32aa95388">Key Questions</LocalizedText></span>
          <h2 className={styles.title}><LocalizedText id="p_36092c0b3e11">The problems that drive</LocalizedText><span><LocalizedText id="p_1e838a6dfbfb">the research program</LocalizedText></span>
          </h2>
        </header>

        <div className={styles.grid}>
          {questions.map((q, i) => (
            <article key={i} className={styles.card}>
              <span className={styles.index}>0{i + 1}</span>
              <p><LocalizedText text={q} /></p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
