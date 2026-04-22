"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import styles from "./Team.module.css";
import Container from "@/components/layout/Container";
import Image from "next/image";

export default function Team() {
  const t = useTranslations("Team");
  const locale = useLocale();

  const currentMembers = [
    {
      name: "Supriya Pan",
      role: "Postdoctoral Researcher",
      affiliation: "India",
      image: "/people/current/supriya.png",
    },
    {
      name: "Kimy Agudelo",
      role: "PhD Student",
      affiliation: "Colombia",
      image: "/people/current/kimy.png",
    },
    {
      name: "Tatiana Araya",
      role: "PhD Student",
      affiliation: "Chile",
      image: "/people/current/tatiana.png",
    },
    {
      name: "Ethan",
      role: "Bachelor’s Student",
      affiliation: "Chile",
      image: "/people/current/ethan.png",
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
                    src={m.image}
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