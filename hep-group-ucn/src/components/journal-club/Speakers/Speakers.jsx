"use client";

import styles from "./Speakers.module.css";
import Container from "@/components/layout/Container";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef } from "react";

export default function Speakers() {
  const t = useTranslations("Speakers");
  const scrollerRef = useRef(null);

  const PHOTO = "/brand/logoucn.png";

  const calendarUrl =
    "https://calendar.google.com/calendar/embed?src=89eb9d7b3f7923f0e11df75bf6f529a1fc80c84a1517e3e091b67c1b32391c33%40group.calendar.google.com&ctz=America%2FBogota";

  const upcoming = {
    name: "Main topic",
    title: "Upcoming Talk Title",
    date: "To be announced",
    place: "UCN Physics Department, Room 505",
    activity: "Journal Club Session",
    speaker: "Group Members",
    description: "The group members will present and discuss a recent research paper related to our field. The session will include a presentation by the speaker, followed by an open discussion among attendees. This is a great opportunity to stay updated on the latest developments.",
  };

  const images = [
    
    "/calendar/cal05.jpg",
    "/calendar/cal262.jpg",
    "/calendar/cal261.jpg",
    "/calendar/cal07.png",
    "/calendar/cal01.jpg",
    "/calendar/cal02.jpg",
    "/calendar/cal03.jpg",
    "/calendar/cal04.jpg",
    "/calendar/cal06.jpg",
    "/calendar/cal031.png",
    "/calendar/cal08.png",
    "/calendar/cal09.png",
    "/calendar/cal10.png",
    "/calendar/cal11.png",
    "/calendar/cal12.png",
    "/calendar/cal13.png",
    "/calendar/cal14.png",
    "/calendar/cal15.png",
    "/calendar/cal16.png",
  ];

  const scrollByOne = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;

    const firstSlide = el.querySelector(`.${styles.slide}`);
    const gap = 18;
    const step = firstSlide ? firstSlide.getBoundingClientRect().width + gap : 320;

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
    <section id="speakers" className={styles.section}>
      <Container>
        <header className={styles.header}>
          <div className={styles.kicker}>{t("kicker")}</div>
          <h2 className={styles.title}>{t("title")}</h2>
          <div className={styles.underline} />
        </header>

        <div className={styles.calendarLinkWrap}>
          <a
            href={calendarUrl}
            target="_blank"
            rel="noreferrer"
            className={styles.calendarLink}
          >
            Open Journal Club Calendar
          </a>
        </div>

        {/* UPCOMING */}
        <div className={styles.block}>
          <div className={styles.blockHead}>
            <h3 className={styles.blockTitle}>{t("upcomingTitle")}</h3>
            <p className={styles.blockSub}>{t("upcomingSub")}</p>
          </div>

          <div className={styles.feature}>
            <div className={styles.featureGrid}>
              <div className={styles.featurePhoto}>
                <div className={styles.photoMat}>
                  <Image
                    src={PHOTO}
                    alt={`${upcoming.name} portrait`}
                    fill
                    sizes="(max-width: 900px) 60vw, 240px"
                    className={styles.photo}
                  />
                </div>
              </div>

              <div className={styles.featureInfo}>
                <div className={styles.featureName}>{upcoming.name}</div>
                <div className={styles.featureTalk}>{upcoming.title}</div>

                <div className={styles.kv}>
                  <div className={styles.k}>{t("date")}:</div>
                  <div className={styles.v}>{upcoming.date}</div>

                  <div className={styles.k}>{t("location")}:</div>
                  <div className={styles.v}>{upcoming.place}</div>
                </div>
              </div>
            </div>

            <div className={styles.infoGrid}>
              <div className={styles.infoBox}>
                <h3 className={styles.infoTitle}>Next Session</h3>

                <div className={styles.infoKv}>
                  <div className={styles.infoK}>Activity:</div>
                  <div className={styles.infoV}>{upcoming.activity}</div>

                  <div className={styles.infoK}>Title:</div>
                  <div className={styles.infoV}>{upcoming.title}</div>

                  <div className={styles.infoK}>Speaker:</div>
                  <div className={styles.infoV}>{upcoming.speaker}</div>
                </div>
              </div>

              <div className={styles.infoBox}>
                <h3 className={styles.infoTitle}>Description</h3>
                <div className={styles.descBox}>{upcoming.description}</div>
              </div>
            </div>
          </div>
        </div>

        {/* PAST */}
        <div className={styles.block}>
          <div className={styles.blockHead}>
            <h3 className={styles.blockTitle}>{t("pastTitle")}</h3>
            <p className={styles.blockSub}>{t("pastSub")}</p>
          </div>

          <div className={styles.carousel}>
            <button
              type="button"
              className={styles.arrowLeft}
              onClick={() => scrollByOne(-1)}
              aria-label="Previous"
            >
              ‹
            </button>

            <div className={styles.scroller} ref={scrollerRef}>
              {images.map((src, i) => (
                <div className={styles.slide} key={src}>
                  <div className={styles.imgBox}>
                    <Image
                      src={src}
                      alt={`Past session ${i + 1}`}
                      fill
                      sizes="(max-width: 900px) 80vw, 33vw"
                      className={styles.img}
                    />
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              className={styles.arrowRight}
              onClick={() => scrollByOne(1)}
              aria-label="Next"
            >
              ›
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}