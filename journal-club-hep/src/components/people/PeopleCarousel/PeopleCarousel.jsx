"use client";

import { useRef } from "react";
import Image from "next/image";
import styles from "./PeopleCarousel.module.css";

export default function PeopleCarousel({ items, type = "alumni" }) {
  const scrollerRef = useRef(null);

  const scrollByOne = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;

    const firstCard = el.querySelector(`.${styles.card}`);
    const gap = 18;
    const step = firstCard
      ? firstCard.getBoundingClientRect().width + gap
      : el.clientWidth * 0.8;

    const maxLeft = el.scrollWidth - el.clientWidth;
    const EPS = 8;

    const atStart = el.scrollLeft <= EPS;
    const atEnd = el.scrollLeft >= maxLeft - EPS;

    if (dir > 0 && atEnd) {
      el.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    if (dir < 0 && atStart) {
      el.scrollTo({ left: maxLeft, behavior: "smooth" });
      return;
    }

    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <div className={styles.wrap}>
      <button
        type="button"
        className={styles.arrowLeft}
        onClick={() => scrollByOne(-1)}
        aria-label="Previous people cards"
      >
        ‹
      </button>

      <div className={styles.scroller} ref={scrollerRef}>
        {items.map((item) => (
          <article key={item.name} className={styles.card}>
            <div className={styles.imageWrap}>
              <Image
                src={item.image}
                alt={item.name}
                fill
                className={styles.image}
                sizes="(max-width: 900px) 85vw, 30vw"
              />
            </div>

            <div className={styles.body}>
              <span className={styles.kicker}>
                {type === "alumni" ? item.level : item.institution}
              </span>

              <h3 className={styles.name}>{item.name}</h3>

              {type === "alumni" ? (
                <>
                  <p className={styles.meta}>{item.years}</p>
                  <p className={styles.text}>{item.current}</p>
                </>
              ) : (
                <>
                  <p className={styles.meta}>Frequent collaborator</p>
                  <p className={styles.text}>{item.focus}</p>
                </>
              )}
            </div>
          </article>
        ))}
      </div>

      <button
        type="button"
        className={styles.arrowRight}
        onClick={() => scrollByOne(1)}
        aria-label="Next people cards"
      >
        ›
      </button>
    </div>
  );
}