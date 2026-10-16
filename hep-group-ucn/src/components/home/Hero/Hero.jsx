"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import styles from "./Hero.module.css";
import Container from "@/components/layout/Container";

export default function Hero() {
  const [step, setStep] = useState(0);
  const locale = useLocale();
  const t = useTranslations("HomeHero");

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
            {step === 3 ? t("finalTitle") : t("title")}
          </h1>

          <p key={step} className={styles.subtitle}>
            {t(`subtitles.${step}`)}
          </p>

          <div className={styles.actions}>
            <Link className={styles.btn} href={`/${locale}/research`}>
              {t("exploreResearch")}
            </Link>
            <Link className={styles.btnGhost} href={`/${locale}/people`}>
              {t("meetTeam")}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
