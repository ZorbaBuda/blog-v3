import { useEffect, useState } from "react";
import styles from "../../styles";
import { useTheme } from 'next-themes'

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const [darkMode, setDarkMode] = useState(false);
  const userTheme = localStorage.getItem("theme");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // useEffect(() => {
  //   if ((userTheme && userTheme === "dark") || (!userTheme && systemTheme))
  //     setDarkMode(true);
  //   else setDarkMode(false);
  // }, []);
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  // useEffect(() => {
  //   if (darkMode) {
  //     document.documentElement.classList.add("dark");
  //     localStorage.setItem("theme", "dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //     localStorage.setItem("theme", "light");
  //   }
  // }, [darkMode]);

  return (
    <label
      className={`${styles.transition} text-text-medium-gray relative flex w-full items-center justify-between gap-[15px] hover:text-almost-black dark:hover:text-gray-400 md:justify-end`}
    >
      <input
        type="checkbox"
        className="m-t  top-0 left-0 z-10 h-full w-full cursor-pointer appearance-none"
        checked={darkMode}
        role="switch"
        aria-checked={darkMode}
        onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      />
      Dark mode
      <span className="dot" aria-hidden="true"></span>
    </label>
  );
};

export default ThemeSwitcher;
