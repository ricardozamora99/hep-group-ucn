"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale } from "next-intl";
import { useState } from "react";
import LocaleToggel from "./LocaleToggel";
import styles from "./Navbar.module.css";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations("Nav");
  const [open, setOpen] = useState(false);
  const locale = useLocale();

  const home = `/${locale}`;

  const items = [
    { label:  t("home"), href: `${home}/#top` },
    { label: t("about"), href: `${home}/about-group` },
    { label: t("research"), href: `${home}/research` },
    { label: t("publications"), href: `${home}/publications` },
    { label: t("activities"), href: `${home}/activities` },
    { label: t("journalClub"), href: `${home}/journal-club` },
    { label: t("people"), href: `${home}/people` },
    { label: t("contact"), href: `${home}/contact` },
  ];

  return (
    <header className={styles.navbar}>
      {/* Top band */}
      <div className={styles.topBand}>
        <div className={styles.inner}>
          <Link
            href={`${home}/#top`}
            className={styles.brand}
            onClick={() => setOpen(false)}
          >
            {/* Left small logo */}
          <Image
            src="/brand/logoucn.png"
            alt="UCN HEP Journal Club logo"
            width={38}
            height={38}
            className={styles.logo}
            priority
          />

            <div className={styles.brandTextWrap}>
              <span className={styles.brandTitle}>UCN HEP GROUP</span>
              <span className={styles.brandSubtitle}>High Energy Physics</span>
            </div>

            {/* Right small logo */}
          <Image
            src="/brand/hepJC.png"
            alt="UCN HEP Journal Club logo"
            width={90}
            height={90}
            className={`${styles.logoRight}`}
            priority
          />
          </Link>

          <div className={styles.rightTop}>
            <LocaleToggel className={styles.localeToggle} />
            <button
              className={styles.hamburger}
              aria-label="Open menu"
              onClick={() => setOpen((o) => !o)}
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Gold separator */}
      <div className={styles.goldLine} />

      {/* Link row (desktop) */}
      <nav className={styles.linkRow}>
        <div className={styles.innerLinks}>
          {items.map((it) => (
            <Link key={it.label} href={it.href} className={styles.link}>
              {it.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile menu (dropdown) */}
      <nav className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ""}`}>
        {items.map((it) => (
          <Link
            key={it.label}
            href={it.href}
            className={styles.mobileLink}
            onClick={() => setOpen(false)}
          >
            {it.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
