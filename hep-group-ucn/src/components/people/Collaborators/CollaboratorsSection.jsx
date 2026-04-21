"use client";

import styles from "./CollaboratorsSection.module.css";
import Container from "@/components/layout/Container";
import PeopleCarousel from "@/components/people/PeopleCarousel/PeopleCarousel";
import { collaborators } from "./collaboratorsData";

export default function CollaboratorsSection() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.top}>
          <div className={styles.heading}>
            <span className={styles.kicker}>Network</span>
            <h2 className={styles.title}>
              Frequent
              <span>collaborators</span>
            </h2>
          </div>

          <p className={styles.intro}>
            A broader research network also shapes the group’s scientific life
            through recurring collaborations, exchange, and shared academic
            activity.
          </p>
        </div>

        <PeopleCarousel items={collaborators} type="collaborators" />
      </Container>
    </section>
  );
}