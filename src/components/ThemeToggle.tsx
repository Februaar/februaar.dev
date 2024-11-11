import { useState, useEffect } from "react";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";
import { Theme } from "@/lib/types";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(Theme.light);

  const handleClickButton = () => {
    const toggle = document.documentElement.classList.toggle(Theme.dark);
    const theme = toggle ? Theme.dark : Theme.light;
    setTheme(theme);
    window.localStorage.setItem("theme", theme);
  };

  useEffect(() => {
    if (document.documentElement.classList.contains(Theme.dark)) {
      setTheme(Theme.dark);
    } else {
      setTheme(Theme.light);
    }
  });

  return (
    <button onClick={handleClickButton}>
      {theme === Theme.light ? <MdOutlineLightMode /> : <MdOutlineNightlight />}
    </button>
  );
}
