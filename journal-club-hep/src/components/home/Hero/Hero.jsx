"use client";

import { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import Container from "@/components/layout/Container";

const subtitles = [
  "Probing the Fundamental Building Blocks of Matter",
  "Exploring the Universe at the Largest Scales",
  "Advancing Data-Driven Methods in High Energy Physics",
  "Connecting fundamental physics across scales, from particles to the universe."
];

export default function Hero() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 1800);
    const t2 = setTimeout(() => setStep(2), 4200);
    const t3 = setTimeout(() => setStep(3), 6800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <section id="top" className={styles.hero}>
      {/* Base full-screen layer: Particle Physics */}
      <div
        className={[
          styles.layer,
          styles.layerPP,
          step === 3 ? styles.finalPP : ""
        ].join(" ")}
        aria-hidden="true"
      />

      {/* Full-screen layer entering from left: Cosmology */}
      <div
        className={[
          styles.layer,
          styles.layerCMB,
          step >= 1 ? styles.entered : "",
          step === 3 ? styles.finalCMB : ""
        ].join(" ")}
        aria-hidden="true"
      />

      {/* Full-screen layer entering from right: Computation */}
      <div
        className={[
          styles.layer,
          styles.layerNN,
          step >= 2 ? styles.entered : "",
          step === 3 ? styles.finalNN : ""
        ].join(" ")}
        aria-hidden="true"
      />

      <div className={styles.overlay} aria-hidden="true" />

      <Container>
        <div className={styles.inner}>
          <h1 className={styles.title}>
            {step === 3
              ? "Particle Physics and Cosmology at UCN"
              : "UCN Particle Physics & Cosmology Group"}
          </h1>

            <p key={step} className={styles.subtitle}>
            {subtitles[step]}
            </p>

          <div className={styles.actions}>
            <a className={styles.btn} href="/research">
              Explore Research
            </a>
            <a className={styles.btnGhost} href="/people">
              Meet the Team
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}