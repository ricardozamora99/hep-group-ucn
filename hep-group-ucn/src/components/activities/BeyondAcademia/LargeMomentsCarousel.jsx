"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./LargeMomentsCarousel.module.css";

export default function LargeMomentsCarousel({ images }) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const goPrev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;

    if (diff > 40) goNext();
    if (diff < -40) goPrev();
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [images.length]);

  return (
    <div className={styles.wrap}>
      <div
        className={styles.carousel}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <button
          type="button"
          className={styles.arrowLeft}
          onClick={goPrev}
          aria-label="Previous moment"
        >
          ‹
        </button>

        <div className={styles.frame}>
          <Image
            src={images[current].src}
            alt={images[current].alt || `Moment ${current + 1}`}
            fill
            className={styles.image}
            sizes="100vw"
            priority={current === 0}
          />
        </div>

        <button
          type="button"
          className={styles.arrowRight}
          onClick={goNext}
          aria-label="Next moment"
        >
          ›
        </button>
      </div>

      <div className={styles.captionBox}>
        <div className={styles.captionTop}>
          <span className={styles.captionLabel}>Beyond Academia</span>
          <span className={styles.counter}>
            {current + 1} / {images.length}
          </span>
        </div>

        <p className={styles.caption}>
          {images[current].caption}
        </p>
      </div>

      <div className={styles.dots}>
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`${styles.dot} ${index === current ? styles.active : ""}`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to moment ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}