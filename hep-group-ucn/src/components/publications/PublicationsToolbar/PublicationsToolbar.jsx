"use client";
import LocalizedText from "@/components/i18n/LocalizedText";
import { useLocale } from "next-intl";

import styles from "./PublicationsToolbar.module.css";

export default function PublicationsToolbar({
  search,
  setSearch,
  topic,
  setTopic,
  topics,
}) {
  const locale = useLocale();

  return (
    <section className={styles.section}>
      <div className={styles.pageIntro}>
        <div>
          <span className={styles.kicker}>
            <LocalizedText id="p_82b2eb07aaea">Publications</LocalizedText>
          </span>
          <h1 className={styles.title}>
            <LocalizedText id="p_publications_explore">Explore the group’s</LocalizedText>
            <span>
              <LocalizedText id="p_publications_output">scientific output</LocalizedText>
            </span>
          </h1>
        </div>

        <div className={styles.introCopy}>
          <p>
            <LocalizedText id="p_ada3be0340dd">
              This catalogue brings together the group’s publication record and the scientific themes represented in it.
            </LocalizedText>
          </p>
          <span className={styles.guide}>
            <LocalizedText id="p_publications_guide">
              Search by title or author, or browse the collection by topic.
            </LocalizedText>
          </span>
        </div>
      </div>

      <div className={styles.inner}>
        <div className={styles.searchBox}>
          <label className={styles.label} htmlFor="pub-search"><LocalizedText id="p_49c266baaaa7">Search</LocalizedText></label>
          <input
            id="pub-search"
            className={styles.input}
            type="text"
            placeholder={
              locale === "es"
                ? "Buscar por título, autor, tema..."
                : "Search by title, author, topic..."
            }
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className={styles.filterBox}>
          <label className={styles.label} htmlFor="pub-topic"><LocalizedText id="p_7e61847d61d6">Topic</LocalizedText></label>
          <select
            id="pub-topic"
            className={styles.select}
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          >
            <option value="All"><LocalizedText id="p_29366ff59789">All topics</LocalizedText></option>
            {topics.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
}
