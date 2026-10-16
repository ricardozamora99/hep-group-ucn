import LocalizedText from "@/components/i18n/LocalizedText";
import Container from "@/components/layout/Container";
import styles from "./ContactIntro.module.css";

export default function ContactIntro({
  head,
  sanityError = false,
}) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrap}>
          <div className={styles.top}>
            <div className={styles.heading}>
              <span className={styles.kicker}><LocalizedText id="p_2b5c3d26721a">Contact</LocalizedText></span>

              <h1 className={styles.title}><LocalizedText id="p_daec6c20587c">Get in</LocalizedText><span><LocalizedText id="p_69f689509987">Touch</LocalizedText></span>
              </h1>
            </div>

            <p className={styles.intro}><LocalizedText id="p_a7cbbf6d3502">For academic inquiries, research collaboration, or student contact, please use the information below.</LocalizedText></p>
          </div>

          {sanityError ? (
            <p className={styles.errorState}><LocalizedText id="p_368aecd29d0b">The main contact information could not be loaded at this moment.</LocalizedText></p>
          ) : head ? (
            <article className={styles.mainCard}>
              <div className={styles.mainLeft}>
                <span className={styles.mainLabel}><LocalizedText id="p_d5d5bbd9cff3">Main Contact Information</LocalizedText></span>

                <h2 className={styles.mainTitle}><LocalizedText id="p_1a9fe893c428">Group Contact Details</LocalizedText></h2>

                <p className={styles.mainText}><LocalizedText id="p_6047e44151a5">For general academic inquiries and collaboration requests, please contact the group head.</LocalizedText></p>
              </div>

              <div className={styles.mainRight}>
                {head.office && (
                  <div className={styles.infoItem}>
                    <span className={styles.infoKey}><LocalizedText id="p_9e380d9991e6">Office</LocalizedText></span>

                    <p className={styles.infoValue}>
                      {head.office}
                    </p>
                  </div>
                )}

                {head.phone && (
                  <div className={styles.infoItem}>
                    <span className={styles.infoKey}><LocalizedText id="p_63dceb8800b2">Phone</LocalizedText></span>

                    <p className={styles.infoValue}>
                      {head.phone}
                    </p>
                  </div>
                )}

                <div className={styles.infoItem}>
                  <span className={styles.infoKey}><LocalizedText id="p_9bb0aacc6d51">Head</LocalizedText></span>

                  <p className={styles.infoValue}>
                    {head.name?.trim()}
                  </p>

                  {head.email && (
                    <a
                      href={`mailto:${head.email}`}
                      className={styles.email}
                    >
                      {head.email}
                    </a>
                  )}
                </div>
              </div>
            </article>
          ) : (
            <p className={styles.emptyState}><LocalizedText id="p_855aaa128c30">Group head contact information is not currently available.</LocalizedText></p>
          )}
        </div>
      </Container>
    </section>
  );
}
