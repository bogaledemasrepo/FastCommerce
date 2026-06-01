import { useEffect, useState } from "react";

export default function ThemeController() {
  // 1. Initialize state based on localStorage preference
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("app-theme") === "dark";
  });

  // 2. Synchronize DOM attribute and localStorage whenever state changes
  useEffect(() => {
    const activeTheme = isDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", activeTheme);
    localStorage.setItem("app-theme", activeTheme);
  }, [isDark]);

  return (
    <label className="toggle text-base-content mx-4">
      {/* 3. Managed input element tracking the state */}
      <input 
        type="checkbox" 
        className="theme-controller"
        checked={isDark}
        onChange={(e) => setIsDark(e.target.checked)}
      />

      {/* Sun Icon */}
      <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2"></path>
          <path d="M12 20v2"></path>
          <path d="m4.93 4.93 1.41 1.41"></path>
          <path d="m17.66 17.66 1.41 1.41"></path>
          <path d="M2 12h2"></path>
          <path d="M20 12h2"></path>
          <path d="m6.34 17.66-1.41 1.41"></path>
          <path d="m19.07 4.93-1.41 1.41"></path>
        </g>
      </svg>

      {/* Moon Icon */}
      <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
        </g>
      </svg>
    </label>
  );
}
