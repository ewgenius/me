import { useCallback, useEffect, useState } from "react";
import { Sun, Moon } from "react-feather";

export const ToggleTheme = () => {
  const [theme, setTheme] = useState<"dark" | "light">();

  const toggleTheme = useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";
    if (theme === "light") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }, [theme]);

  useEffect(
    () =>
      setTheme(
        localStorage.theme ||
          (window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light")
      ),
    []
  );

  return (
    <button onClick={toggleTheme} className="pl-4">
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
};
