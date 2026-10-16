"use client";
import LocalizedText from "@/components/i18n/LocalizedText";

import styles from "./WorkshopBlock.module.css";
import PhotoCarousel from "./PhotoCarousel";
import { useLocale } from "next-intl";

export default function WorkshopBlock({ workshop, reverse = false }) {
  const locale = useLocale();
  const localized = (field) =>
    locale === "es" ? workshop[`${field}Es`] ?? workshop[field] : workshop[field];

  return (
    <article className={`${styles.block} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.textCol}>
        <span className={styles.number}>{workshop.number}</span>

        <div className={styles.textInner}>
          <div className={styles.metaTop}>
            <span className={styles.type}>{localized("type")}</span>
            <span className={styles.line} />
          </div>

          <h3 className={styles.title}>{localized("title")}</h3>

          <div className={styles.meta}>
            <p><strong><LocalizedText id="p_a9e0c7058512">Speaker</LocalizedText></strong> {workshop.speaker}</p>
            <p><strong><LocalizedText id="p_15b61974b270">Location</LocalizedText></strong> {workshop.place}</p>
            <p><strong><LocalizedText id="p_99c40ab40592">Date</LocalizedText></strong> {localized("date")}</p>
          </div>

          <p className={styles.description}>{localized("description")}</p>
        </div>
      </div>

      <div className={styles.mediaCol}>
        <PhotoCarousel images={workshop.images} title={localized("title")} />
      </div>
    </article>
  );
}
