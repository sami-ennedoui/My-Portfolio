import React from "react";
import "./LanguageToggle.css";
import { getLanguage, setLanguage } from "../../i18n";

export default function LanguageToggle({ theme }) {
  const current = getLanguage();
  const pick = (lang) => {
    if (lang !== current) setLanguage(lang);
  };
  const btnStyle = (lang) => ({
    color: current === lang ? theme.body : theme.text,
    backgroundColor: current === lang ? theme.text : "transparent",
  });
  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      <button
        className="lang-btn"
        style={btnStyle("en")}
        onClick={() => pick("en")}
        aria-pressed={current === "en"}
      >
        EN
      </button>
      <button
        className="lang-btn"
        style={btnStyle("fr")}
        onClick={() => pick("fr")}
        aria-pressed={current === "fr"}
      >
        FR
      </button>
    </div>
  );
}
