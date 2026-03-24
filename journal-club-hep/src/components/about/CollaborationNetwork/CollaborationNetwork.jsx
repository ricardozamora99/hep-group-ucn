"use client";

import styles from "./CollaborationNetwork.module.css";
import Container from "@/components/layout/Container";

const nodes = [
  {
    title: "University Partnerships",
    text: "Research exchange and academic collaboration with universities and research groups beyond UCN.",
  },
  {
    title: "International Projection",
    text: "Participation in broader scientific conversations through collaborative work, shared problems, and external visibility.",
  },
  {
    title: "Experimental Connections",
    text: "Links to major scientific efforts and discussions in contemporary particle physics, including connections relevant to projects such as DUNE.",
  },
  {
    title: "Scientific Community",
    text: "A network of colleagues, students, seminars, and collaborations that extends the group’s work across institutional boundaries.",
  },
];

export default function CollaborationNetwork() {
  return (
    <section className={styles.section}>
      <div className={styles.bgPattern} />

      <Container>
        <div className={styles.top}>
          <span className={styles.kicker}>Collaborations</span>
          <h2>
            Connected to a broader
            <span>scientific network</span>
          </h2>
          <p>
            The group’s identity is strengthened by dialogue with external
            institutions, international collaborators, and larger scientific
            initiatives. These connections expand the group’s reach, enrich its
            research culture, and situate its work within a wider landscape of
            contemporary physics.
          </p>
        </div>

        <div className={styles.network}>
          {nodes.map((node) => (
            <article key={node.title} className={styles.card}>
              <div className={styles.dot} />
              <h3>{node.title}</h3>
              <p>{node.text}</p>
            </article>
          ))}
        </div>

        <div className={styles.bottomPanel}>
          <span className={styles.bottomLabel}>Example of external reach</span>
          <p>
            Connections with major research initiatives and collaborations help
            position the group within an international ecosystem of questions,
            methods, and scientific exchange.
          </p>
        </div>
      </Container>
    </section>
  );
}