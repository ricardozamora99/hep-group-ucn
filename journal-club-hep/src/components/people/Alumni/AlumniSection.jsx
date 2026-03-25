"use client";

import styles from "./AlumniSection.module.css";
import Container from "@/components/layout/Container";
import PeopleCarousel from "@/components/people/PeopleCarousel/PeopleCarousel";
import { alumni } from "./alumniData";

export default function AlumniSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.top}>
          <div className={styles.heading}>
            <span className={styles.kicker}>Academic Trajectory</span>
            <h2 className={styles.title}>
              Alumni
              <span>and former members</span>
            </h2>
          </div>

          <p className={styles.intro}>
            Past members reflect the continuity of the group through training,
            research formation, and later academic or professional paths.
          </p>
        </div>

        <PeopleCarousel items={alumni} type="alumni" />
      </Container>
    </section>
  );
}