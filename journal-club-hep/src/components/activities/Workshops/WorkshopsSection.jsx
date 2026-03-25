"use client";

import styles from "./WorkshopsSection.module.css";
import Container from "@/components/layout/Container";
import WorkshopBlock from "./WorkshopBlock";
import { workshops } from "./workshopsData";

export default function WorkshopsSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.top}>
          <div className={styles.heading}>
            <span className={styles.kicker}>Academic Activities</span>
            <h2 className={styles.title}>
              Workshops, outreach,
              <span>and academic exchange</span>
            </h2>
          </div>

          <p className={styles.intro}>
            A selection of workshops and related academic activities that reflect
            the group’s broader educational and scientific engagement.
          </p>
        </div>

        <div className={styles.list}>
          {workshops.map((workshop, index) => (
            <WorkshopBlock
              key={workshop.id}
              workshop={workshop}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}