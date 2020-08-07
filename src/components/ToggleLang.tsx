import { ToggleLeft, ToggleRight } from "react-feather";
import { useLocale } from "utils/useLocale";

export const ToggleLang = () => {
  const { lang, toggleLang } = useLocale();
  return (
    <button aria-label="toggle theme" className="lang" onClick={toggleLang}>
      <span className={lang === "ru" ? "current" : ""}>RU</span>
      {lang === "ru" ? <ToggleLeft /> : <ToggleRight />}
      <span className={lang === "en" ? "current" : ""}>EN</span>
    </button>
  );
};
