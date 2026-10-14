import { useEffect, useState } from "react";

function getInitialTheme() {
  try {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }
  } catch {
    /* ignore */
  }
  return "light";
}

function applyTheme(theme) {
  try {
    document.documentElement.setAttribute("data-theme", theme);
  } catch {
    /* ignore */
  }
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => getInitialTheme());

  useEffect(() => {
    applyTheme(theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {
    /* ignore */
  }
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-pressed={theme === "dark"}
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
      title="Toggle color theme"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
