"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import styles from "./Team.module.css";
import Container from "@/components/layout/Container";
import Image from "next/image";

export default function Team() {
  const t = useTranslations("Team");
  const locale = useLocale();
  const PHOTO = "/speakers/ricardo.png";

  const currentMembers = [
    {
      name: "Ricardo Zamora",
      role: t("phd"),
      affiliation: t("affiliationTBD"),
    },
    {
      name: "Ricardo Zamora",
      role: t("msc"),
      affiliation: t("affiliationTBD"),
    },
    {
      name: "Ricardo Zamora",
      role: t("msc"),
      affiliation: t("affiliationTBD"),
    },
    {
      name: "Ricardo Zamora",
      role: t("bsc"),
      affiliation: t("affiliationTBD"),
    },
  ];

  return (
    <section id="team" className={styles.section}>
      <Container>
        <header className={styles.header}>
          <div className={styles.kicker}>{t("kicker")}</div>
          <h2 className={styles.title}>{t("title")}</h2>
          <div className={styles.underline} />
          <p className={styles.lead}>{t("membersSub")}</p>
        </header>

        <div className={styles.grid}>
          {currentMembers.map((m, i) => (
            <article className={styles.card} key={`m-${i}`}>
              <div className={styles.photoWrap}>
                <div className={styles.photoBox}>
                  <Image
                    src={PHOTO}
                    alt={`${m.name} portrait`}
                    fill
                    sizes="(max-width: 900px) 40vw, 120px"
                    className={styles.photo}
                  />
                </div>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.cardName}>{m.name}</div>
                <div className={styles.cardRole}>{m.role}</div>
                <div className={styles.cardAffiliation}>{m.affiliation}</div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.actions}>
          <Link className={styles.btnGhost} href={`/${locale}/people`}>
            See the Whole Group
          </Link>
        </div>
      </Container>
    </section>
  );
}