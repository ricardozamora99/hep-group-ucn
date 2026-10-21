export default function CountryFlag({ countryCode, label, className = "" }) {
  const code = countryCode?.trim().toLowerCase();

  if (!code || !/^[a-z]{2}$/.test(code)) return null;

  return (
    <span
      className={`fi fi-${code} ${className}`.trim()}
      role={label ? "img" : undefined}
      aria-label={label || undefined}
      aria-hidden={label ? undefined : "true"}
    />
  );
}
