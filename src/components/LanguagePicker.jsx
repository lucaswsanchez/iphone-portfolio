import { useTranslation } from "react-i18next";
import { useState } from "react";
import "../styles/LanguagePicker.css";

const LanguagePicker = () => {
  const { i18n, t } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const handleToggle = () => {
    if (language === "en") {
      changeLanguage("es");
    } else {
      changeLanguage("en");
    }
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  return (
    <div className="toggle-container">
      <p>{t("language")}</p>
      <input
        type="checkbox"
        id="toggle"
        checked={language === "en"}
        onChange={handleToggle}
      />
      <label htmlFor="toggle">
        <span
          className={`flag-icon flag-icon-${language === "en" ? "us" : "es"}`}
        ></span>
      </label>
    </div>
  );
};

export default LanguagePicker;
