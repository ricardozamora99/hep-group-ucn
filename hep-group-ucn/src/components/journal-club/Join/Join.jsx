"use client";

import styles from "./Join.module.css";
import Container from "@/components/layout/Container";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function Join() {
  const t = useTranslations("Join");
  const locale = useLocale();

  return (
    <section id="join" className={styles.section}>
      <Container>
        <header className={styles.header}>
          <div className={styles.kicker}>{t("kicker")}</div>
          <h2 className={styles.title}>{t("title")}</h2>
          <div className={styles.underline} />
        </header>

        <div className={styles.wrap}>
          {/* Left: text */}
          <div className={styles.lead}>
            <p className={styles.text}>{t("text")}</p>

            <ul className={styles.bullets}>
              <li>{t("b1")}</li>
              <li>{t("b2")}</li>
              <li>{t("b3")}</li>
            </ul>
          </div>

          {/* Right: contact card */}
          <Link href={`/${locale}/contact`} className={styles.card} aria-label={t("cardLabel")}>
            <h3 className={styles.cardTitle}>{t("cardTitle")}</h3>
            <p className={styles.contactText}>{t("cardText")}</p>
            <span className={styles.contactAction}>{t("cardAction")} →</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
