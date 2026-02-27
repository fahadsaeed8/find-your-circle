/**
 * Convert Western digits (0-9) to Arabic-Indic numerals (٠-٩) for Arabic locale.
 */
const ARABIC_DIGITS = "٠١٢٣٤٥٦٧٨٩";

export function toArabicDigits(value: string | number): string {
  const s = String(value);
  return s.replace(/[0-9]/g, (d) => ARABIC_DIGITS[parseInt(d, 10)] ?? d);
}
