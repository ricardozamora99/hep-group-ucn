"use client";

import styles from "./PublicationsToolbar.module.css";

export default function PublicationsToolbar({
  search,
  setSearch,
  topic,
  setTopic,
  topics,
}) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.searchBox}>
          <label className={styles.label} htmlFor="pub-search">
            Search
          </label>
          <input
            id="pub-search"
            className={styles.input}
            type="text"
            placeholder="Search by title, author, topic..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className={styles.filterBox}>
          <label className={styles.label} htmlFor="pub-topic">
            Topic
          </label>
          <select
            id="pub-topic"
            className={styles.select}
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          >
            <option value="All">All topics</option>
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