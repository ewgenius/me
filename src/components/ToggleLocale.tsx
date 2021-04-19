import { ToggleLeft, ToggleRight } from "react-feather";
import classnames from "classnames";
import { useLocale } from "@utils/useLocale";

export const ToggleLocale = () => {
  const { locale, toggleLocale } = useLocale();
  return (
    <button
      aria-label="toggle theme"
      className="flex justify-center items-center"
      onClick={toggleLocale}
    >
      <span
        className={classnames("text-sm mr-1", { "font-bold": locale === "ru" })}
      >
        RU
      </span>
      {locale === "ru" ? <ToggleLeft /> : <ToggleRight />}
      <span
        className={classnames("text-sm ml-1", { "font-bold": locale === "en" })}
      >
        EN
      </span>
    </button>
  );
};
