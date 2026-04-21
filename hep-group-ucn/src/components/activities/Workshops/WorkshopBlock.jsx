"use client";

import styles from "./WorkshopBlock.module.css";
import PhotoCarousel from "./PhotoCarousel";

export default function WorkshopBlock({ workshop, reverse = false }) {
  return (
    <article className={`${styles.block} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.textCol}>
        <span className={styles.number}>{workshop.number}</span>

        <div className={styles.textInner}>
          <div className={styles.metaTop}>
            <span className={styles.type}>{workshop.type}</span>
            <span className={styles.line} />
          </div>

          <h3 className={styles.title}>{workshop.title}</h3>

          <div className={styles.meta}>
            <p><strong>Speaker</strong> {workshop.speaker}</p>
            <p><strong>Location</strong> {workshop.place}</p>
            <p><strong>Date</strong> {workshop.date}</p>
          </div>

          <p className={styles.description}>{workshop.description}</p>
        </div>
      </div>

      <div className={styles.mediaCol}>
        <PhotoCarousel images={workshop.images} title={workshop.title} />
      </div>
    </article>
  );
}