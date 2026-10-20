import LocalizedText from "@/components/i18n/LocalizedText";
import { urlFor } from "@/sanity/lib/image";

import styles from "./BeyondAcademia.module.css";
import Container from "@/components/layout/Container";
import LargeMomentsCarousel from "./LargeMomentsCarousel";

export default function BeyondAcademia({ moments = [] }) {
  if (!moments.length) return null;

  const images = moments.map((moment) => ({
    id: moment._id,
    src: urlFor(moment.image).ignoreImageParams().width(1800).height(1000).fit("max").url(),
    alt: moment.image?.alt || moment.description,
    caption: moment.description,
    year: moment.year,
  }));

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.head}>
          <span className={styles.kicker}><LocalizedText id="p_bb501d7877eb">Community</LocalizedText></span>
          <h2 className={styles.title}><LocalizedText id="p_b903b1ff1ded">Shared moments</LocalizedText><span><LocalizedText id="p_dfa0fe0f38d0">beyond academia</LocalizedText></span>
          </h2>
          <p className={styles.lead}><LocalizedText id="p_e53dc86b752e">Group life also includes informal gatherings, visiting researchers, and shared experiences in Antofagasta beyond the seminar room.</LocalizedText></p>
        </div>

        <LargeMomentsCarousel images={images} />
      </Container>
    </section>
  );
}
