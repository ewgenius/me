import useDarkMode from "use-dark-mode";
import { Sun, Moon } from "react-feather";

export const ToggleTheme = () => {
  const darkMode = useDarkMode();
  return (
    <button
      aria-label="toggle theme"
      className="theme"
      onClick={darkMode.toggle}
    >
      {darkMode.value ? <Moon /> : <Sun />}
    </button>
  );
};
