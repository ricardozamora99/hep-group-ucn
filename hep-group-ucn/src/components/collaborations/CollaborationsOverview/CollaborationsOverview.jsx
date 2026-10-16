"use client";
import LocalizedText from "@/components/i18n/LocalizedText";

import Image from "next/image";
import { useLocale } from "next-intl";
import styles from "./CollaborationsOverview.module.css";
import Container from "@/components/layout/Container";
import { collaborations } from "./collaborationsData";

function CollaborationCard({ item, reverse = false }) {
  const locale = useLocale();
  const localized = (field) =>
    locale === "es" ? item[`${field}Es`] ?? item[field] : item[field];

  return (
    <article
      className={`${styles.card} ${reverse ? styles.cardReverse : ""}`}
    >
      <div className={styles.imageWrap}>
        <Image
          src={item.image}
          alt={item.name}
          fill
          className={styles.image}
          sizes="(max-width: 980px) 100vw, 42vw"
        />
      </div>

      <div className={styles.content}>
        <span className={styles.kicker}><LocalizedText id="p_11a2b0f91452">Collaboration</LocalizedText></span>
        <h2 className={styles.name}>{item.name}</h2>
        <p className={styles.subtitle}>{localized("subtitle")}</p>
        <p className={styles.description}>{localized("description")}</p>

        <div className={styles.meta}>
          <span className={styles.metaLabel}><LocalizedText id="p_58acc5109e03">Time range</LocalizedText></span>
          <p className={styles.metaText}>{localized("period")}</p>
        </div>
      </div>
    </article>
  );
}

export default function CollaborationsOverview() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.top}>
          <div>
            <span className={styles.topKicker}><LocalizedText id="p_5e5cca7079ff">Institutional & Experimental Links</LocalizedText></span>
            <h2 className={styles.topTitle}><LocalizedText id="p_fdcc35b5b1a8">Collaborations that extend</LocalizedText><span><LocalizedText id="p_37eb41883bde">the group’s scientific reach</LocalizedText></span>
            </h2>
          </div>

          <p className={styles.topIntro}><LocalizedText id="p_473aa04b650e">These links connect the group with broader experimental and academic environments, strengthening research exchange, visibility, and future opportunities for participation and training.</LocalizedText></p>
        </div>

        <div className={styles.stack}>
          {collaborations.map((item, index) => (
            <CollaborationCard
              key={item.name}
              item={item}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
