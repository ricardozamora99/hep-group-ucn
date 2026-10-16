"use client";

import { useLocale, useTranslations } from "next-intl";
import englishMessages from "@/messages/en.json";

export default function LocalizedText({ id, text, children }) {
  const locale = useLocale();
  const translations = useTranslations("Auto");
  const sourceText = text ?? children;
  const resolvedId = id ?? Object.entries(englishMessages.Auto ?? {}).find(
    ([, value]) => value === sourceText,
  )?.[0];

  if (locale !== "es" || !resolvedId || !translations.has(resolvedId)) {
    return sourceText;
  }

  return translations(resolvedId);
}
