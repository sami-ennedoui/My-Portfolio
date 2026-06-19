/* Lightweight bilingual support (EN / FR).
 *
 * The app is otherwise stateless (theme is static), so rather than thread a
 * language context through every component we persist the choice in
 * localStorage and reload on switch. portfolio.js reads getLanguage() once at
 * module load and serves the matching content bundle. */

const LANG_KEY = "siteLang";
export const SUPPORTED = ["en", "fr"];

export function getLanguage() {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(LANG_KEY);
  if (SUPPORTED.includes(stored)) return stored;
  // First visit: default to French for French-locale browsers, else English.
  const nav = (window.navigator.language || "").toLowerCase();
  return nav.startsWith("fr") ? "fr" : "en";
}

export function setLanguage(lang) {
  if (typeof window === "undefined" || !SUPPORTED.includes(lang)) return;
  window.localStorage.setItem(LANG_KEY, lang);
  window.location.reload();
}
