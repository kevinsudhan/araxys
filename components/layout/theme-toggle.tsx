"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "araxys-theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  // Read the theme the inline boot script already applied, so the button
  // label matches the document from the first paint the user can interact with.
  useEffect(() => {
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Private browsing modes can throw on write. The toggle still works
      // for this session; it just will not be remembered.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className="inline-flex size-9 items-center justify-center rounded-md border border-line-strong bg-surface text-ink-muted transition-colors duration-200 hover:border-ink/25 hover:text-ink"
    >
      {/* Both glyphs render; opacity swaps on the html.dark class so there is
          no icon flash before hydration. */}
      <svg
        aria-hidden
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        className="size-[17px] dark:hidden"
      >
        <circle cx="10" cy="10" r="3.6" />
        <path d="M10 2.4v2M10 15.6v2M2.4 10h2M15.6 10h2M4.7 4.7l1.4 1.4M13.9 13.9l1.4 1.4M15.3 4.7l-1.4 1.4M6.1 13.9l-1.4 1.4" />
      </svg>
      <svg
        aria-hidden
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="hidden size-[17px] dark:block"
      >
        <path d="M16.2 12.4A6.8 6.8 0 0 1 7.6 3.8a6.8 6.8 0 1 0 8.6 8.6Z" />
      </svg>
    </button>
  );
}
