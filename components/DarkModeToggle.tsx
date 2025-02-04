"use client";

import { useEffect, useState } from "react";

export default function DarkModeToggle() {
    //state variables
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  // effect to manage theme and local storage on mount
  useEffect(() => {
    setMounted(true); 
    const storedTheme = localStorage.getItem("theme") as "light" | "dark";
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }
  }, []);

  // effect to update theme on local storage change when user clicks the button
  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  //fixed and prevent hydration bugs error
  if (!mounted) return null;

  // button to toggle theme
  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-md bg-gray-200 dark:bg-gray-700"
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}
