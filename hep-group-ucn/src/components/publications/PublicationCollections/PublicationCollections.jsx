"use client";
import LocalizedText from "@/components/i18n/LocalizedText";
import { useLocale } from "next-intl";

import Image from "next/image";
import styles from "./PublicationCollections.module.css";
import LatexText from "@/components/math/LatexText";

export default function PublicationCollections({
  papers,
  currentPage,
  setCurrentPage,
  itemsPerPage = 9,
}) {
  const locale = useLocale();
  const totalPages = Math.ceil(papers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visiblePapers = papers.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <h3 className={styles.title}><LocalizedText id="p_c0248c052590">Publication Grid</LocalizedText></h3>
          <p className={styles.subtitle}>
            {locale === "es" ? "Mostrando" : "Showing"} {visiblePapers.length}{" "}
            {locale === "es" ? "de" : "of"} {papers.length}{" "}
            {locale === "es" ? "publicaciones filtradas." : "filtered publications."}
          </p>
        </header>

        {visiblePapers.length > 0 ? (
          <>
            <div className={styles.grid}>
              {visiblePapers.map((paper, idx) => (
                <article className={styles.card} key={paper.id || `${paper.code}-${idx}`}>
                  <div className={styles.cardTop}>
                    <div className={styles.logoWrap}>
                      <Image
                        src={paper.image}
                        alt="arXiv logo"
                        width={42}
                        height={42}
                        className={styles.logo}
                      />
                    </div>

                    <div className={styles.topMeta}>
                      <div className={styles.journal}>{paper.source}</div>
                      <div className={styles.year}>{paper.year}</div>
                    </div>
                  </div>

                  <div className={styles.topic}>{paper.topic}</div>

                  {paper.journal && (
                    <p className={styles.journalLine}>
                      <strong>{locale === "es" ? "Revista:" : "Journal:"}</strong>{" "}
                      {paper.journal}
                    </p>
                  )}

                  <h4 className={styles.cardTitle}><LatexText>{paper.title}</LatexText></h4>
                  <p className={styles.authors}>{paper.authors}</p>
                  {paper.info && <p className={styles.info}><LatexText>{paper.info}</LatexText></p>}

                  <a
                    className={styles.code}
                    href={paper.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {paper.code}
                  </a>
                </article>
              ))}
            </div>

            {totalPages > 1 && (
              <div className={styles.pagination}>
                <button
                  type="button"
                  className={styles.pageBtn}
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                ><LocalizedText id="p_73912999faf4">Prev</LocalizedText></button>

                <div className={styles.pageNumbers}>
                  {Array.from({ length: totalPages }).map((_, i) => {
                    const page = i + 1;
                    return (
                      <button
                        type="button"
                        key={page}
                        className={`${styles.pageNumber} ${
                          currentPage === page ? styles.active : ""
                        }`}
                        onClick={() => goToPage(page)}
                      >
                        {page}
                      </button>
                    );
                  })}
                </div>

                <button
                  type="button"
                  className={styles.pageBtn}
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                ><LocalizedText id="p_1ff57a29d7c9">Next</LocalizedText></button>
              </div>
            )}
          </>
        ) : (
          <div className={styles.empty}><LocalizedText id="p_df04efc9c704">No publications match the current search or filter.</LocalizedText></div>
        )}
      </div>
    </section>
  );
}
