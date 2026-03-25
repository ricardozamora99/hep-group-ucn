"use client";

import { useRef } from "react";
import Image from "next/image";
import styles from "./PhotoCarousel.module.css";

export default function PhotoCarousel({ images, title }) {
  const scrollerRef = useRef(null);

  const scrollByOne = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;

    const firstSlide = el.querySelector(`.${styles.slide}`);
    const gap = 18;
    const step = firstSlide ? firstSlide.getBoundingClientRect().width + gap : el.clientWidth;

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
    <div className={styles.carousel}>
      <button
        type="button"
        className={styles.arrowLeft}
        onClick={() => scrollByOne(-1)}
        aria-label={`Previous ${title} photo`}
      >
        ‹
      </button>

      <div className={styles.scroller} ref={scrollerRef}>
        {images.map((img, index) => (
          <div className={styles.slide} key={`${img.src}-${index}`}>
            <div className={styles.frame}>
              <Image
                src={img.src}
                alt={img.alt || `${title} photo ${index + 1}`}
                fill
                className={styles.image}
                sizes="(max-width: 980px) 100vw, 60vw"
              />
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        className={styles.arrowRight}
        onClick={() => scrollByOne(1)}
        aria-label={`Next ${title} photo`}
      >
        ›
      </button>
    </div>
  );
}