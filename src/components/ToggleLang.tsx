import { ToggleLeft, ToggleRight } from "react-feather";
import classnames from "classnames";
import { useLocale } from "utils/useLocale";

export const ToggleLang = () => {
  const { lang, toggleLang } = useLocale();
  return (
    <button
      aria-label="toggle theme"
      className="flex justify-center items-center"
      onClick={toggleLang}
    >
      <span
        className={classnames("text-sm mr-1", { "font-bold": lang === "ru" })}
      >
        RU
      </span>
      {lang === "ru" ? <ToggleLeft /> : <ToggleRight />}
      <span
        className={classnames("text-sm ml-1", { "font-bold": lang === "en" })}
      >
        EN
      </span>
    </button>
  );
};
