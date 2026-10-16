"use client";
import LocalizedText from "@/components/i18n/LocalizedText";

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
            <span className={styles.kicker}><LocalizedText id="p_1744b96470b5">Network</LocalizedText></span>
            <h2 className={styles.title}><LocalizedText id="p_d6f02fe6e436">Frequent</LocalizedText><span><LocalizedText id="p_0e7166bcec7a">collaborators</LocalizedText></span>
            </h2>
          </div>

          <p className={styles.intro}><LocalizedText id="p_c3ffb0624cbc">A broader research network also shapes the group’s scientific life through recurring collaborations, exchange, and shared academic activity.</LocalizedText></p>
        </div>

        <PeopleCarousel items={collaborators} type="collaborators" />
      </Container>
    </section>
  );
}
