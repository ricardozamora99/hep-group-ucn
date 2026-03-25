"use client";

import Image from "next/image";
import styles from "./CurrentMembers.module.css";
import Container from "@/components/layout/Container";
import {
  head,
  phdStudents,
  mastersStudents,
  bachelorsStudents,
} from "./peopleData";

function MemberCard({ member }) {
  return (
    <article className={styles.memberCard}>
      <div className={styles.memberImageWrap}>
        <Image
          src={member.image}
          alt={member.name}
          fill
          className={styles.memberImage}
          sizes="(max-width: 900px) 100vw, 33vw"
        />
      </div>

      <div className={styles.memberBody}>
        <span className={styles.memberRole}>{member.role}</span>
        <h3 className={styles.memberName}>{member.name}</h3>
        <p className={styles.memberFocus}>{member.focus}</p>
      </div>
    </article>
  );
}

function MemberGroup({ title, members }) {
  return (
    <div className={styles.group}>
      <div className={styles.groupHeader}>
        <span className={styles.groupKicker}>Current Members</span>
        <h3 className={styles.groupTitle}>{title}</h3>
      </div>

      <div className={styles.grid}>
        {members.map((member) => (
          <MemberCard key={`${title}-${member.name}`} member={member} />
        ))}
      </div>
    </div>
  );
}

export default function CurrentMembers() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.top}>
          <div className={styles.heading}>
            <span className={styles.kicker}>Current Members</span>
            <h2 className={styles.title}>
              The group as it stands
              <span>today</span>
            </h2>
          </div>

          <p className={styles.intro}>
            A snapshot of the current structure of the group, from its head to
            students across different stages of academic formation.
          </p>
        </div>

        <article className={styles.headBlock}>
          <div className={styles.headImageWrap}>
            <Image
              src={head.image}
              alt={head.name}
              fill
              className={styles.headImage}
              sizes="(max-width: 980px) 100vw, 40vw"
            />
          </div>

          <div className={styles.headContent}>
            <span className={styles.headKicker}>{head.role}</span>
            <h3 className={styles.headName}>{head.name}</h3>
            <p className={styles.headText}>{head.focus}</p>
          </div>
        </article>

        <MemberGroup title="PhD Students" members={phdStudents} />
        <MemberGroup title="Master’s Students" members={mastersStudents} />
        <MemberGroup title="Bachelor’s Students" members={bachelorsStudents} />
      </Container>
    </section>
  );
}