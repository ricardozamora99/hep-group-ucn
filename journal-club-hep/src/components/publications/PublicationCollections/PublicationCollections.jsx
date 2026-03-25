"use client";

import Image from "next/image";
import styles from "./PublicationCollections.module.css";

export default function PublicationCollections({
  papers,
  currentPage,
  setCurrentPage,
  itemsPerPage = 9,
}) {
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
          <h3 className={styles.title}>Publication Grid</h3>
          <p className={styles.subtitle}>
            Showing {visiblePapers.length} of {papers.length} filtered publications.
          </p>
        </header>

        {visiblePapers.length > 0 ? (
          <>
            <div className={styles.grid}>
              {visiblePapers.map((paper, idx) => (
                <article className={styles.card} key={`${paper.code}-${idx}`}>
                  <div className={styles.cardTop}>
                    <div className={styles.logoWrap}>
                      <Image
                        src={paper.image}
                        alt={`${paper.journal} logo`}
                        width={42}
                        height={42}
                        className={styles.logo}
                      />
                    </div>

                    <div className={styles.topMeta}>
                      <div className={styles.journal}>{paper.journal}</div>
                      <div className={styles.year}>{paper.year}</div>
                    </div>
                  </div>

                  <div className={styles.topic}>{paper.topic}</div>

                  <h4 className={styles.cardTitle}>{paper.title}</h4>
                  <p className={styles.authors}>{paper.authors}</p>
                  <p className={styles.info}>{paper.info}</p>

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
                >
                  Prev
                </button>

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
                >
                  Next
                </button>
              </div>
            )}
          </>
        ) : (
          <div className={styles.empty}>
            No publications match the current search or filter.
          </div>
        )}
      </div>
    </section>
  );
}