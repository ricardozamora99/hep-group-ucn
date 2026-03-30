"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import styles from "./AlumniSection.module.css";
import Container from "@/components/layout/Container";
import {
  formerPhDMembers,
  formerMastersMembers,
  formerPostdocs,
  formerBachelorsMembers,
} from "./alumniData";

function FormerMemberCard({ member }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={member.image}
          alt={member.name}
          fill
          className={styles.image}
          sizes="(max-width: 900px) 100vw, 25vw"
        />
      </div>

      <div className={styles.cardBody}>
        <span className={styles.years}>{member.years}</span>
        <h4 className={styles.name}>{member.name}</h4>
        <p className={styles.description}>{member.description}</p>

        <div className={styles.nowBlock}>
          <span className={styles.nowLabel}>Currently at</span>
          <p className={styles.nowText}>
            {member.currentInstitution}
            {member.currentRole ? ` — ${member.currentRole}` : ""}
          </p>
        </div>
      </div>
    </article>
  );
}

function FormerMembersCarousel({ title, kicker, members }) {
  const [index, setIndex] = useState(0);
  const visibleCards = 4;

  const totalPages = Math.ceil(members.length / visibleCards);

  const pages = useMemo(() => {
    const grouped = [];
    for (let i = 0; i < members.length; i += visibleCards) {
      grouped.push(members.slice(i, i + visibleCards));
    }
    return grouped;
  }, [members]);

  const goPrev = () => {
    setIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const goNext = () => {
    setIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <section className={styles.group}>
      <div className={styles.groupHeader}>
        <div>
          <span className={styles.groupKicker}>{kicker}</span>
          <h3 className={styles.groupTitle}>{title}</h3>
        </div>

        <div className={styles.controls}>
          <button
            type="button"
            className={styles.arrow}
            onClick={goPrev}
            aria-label={`Previous ${title}`}
          >
            ←
          </button>
          <button
            type="button"
            className={styles.arrow}
            onClick={goNext}
            aria-label={`Next ${title}`}
          >
            →
          </button>
        </div>
      </div>

      <div className={styles.viewport}>
        <div
          className={styles.track}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {pages.map((page, pageIndex) => (
            <div className={styles.slide} key={`${title}-page-${pageIndex}`}>
              <div className={styles.grid}>
                {page.map((member) => (
                  <FormerMemberCard
                    key={`${title}-${member.name}`}
                    member={member}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.pagination}>
        {pages.map((_, dotIndex) => (
          <button
            key={`${title}-dot-${dotIndex}`}
            type="button"
            className={`${styles.dot} ${
              dotIndex === index ? styles.dotActive : ""
            }`}
            onClick={() => setIndex(dotIndex)}
            aria-label={`Go to page ${dotIndex + 1} of ${title}`}
          />
        ))}
      </div>
    </section>
  );
}

export default function AlumniSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.top}>
          <div className={styles.heading}>
            <span className={styles.kicker}>Academic Trajectory</span>
            <h2 className={styles.title}>
              Former Members
              <span>and current destinations</span>
            </h2>
          </div>

          <p className={styles.intro}>
            The group’s trajectory can also be seen through its former members:
            students and researchers who continued into graduate programs,
            postdoctoral positions, laboratories, and institutions in Chile and
            abroad.
          </p>
        </div>

        <FormerMembersCarousel
          title="Former PhD Students"
          kicker="PhD"
          members={formerPhDMembers}
        />

        <FormerMembersCarousel
          title="Former Master’s Students"
          kicker="Master’s"
          members={formerMastersMembers}
        />

        <FormerMembersCarousel
          title="Former Postdoctoral Researchers"
          kicker="Postdoctoral"
          members={formerPostdocs}
        />

        <FormerMembersCarousel
          title="Former Bachelor’s Students"
          kicker="Bachelor’s"
          members={formerBachelorsMembers}
        />
      </Container>
    </section>
  );
}