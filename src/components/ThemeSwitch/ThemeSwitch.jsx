import "./ThemeSwitch.scss";
import useThemeStore from "../../store/useThemeStore";
import sunSVG from "../../assets/icon-sun.svg";
import moonSVG from "../../assets/icon-moon.svg";

function ThemeSwitch() {
  const { theme, setTheme } = useThemeStore((state) => state);
  const svgSRC = theme === "light" ? moonSVG : sunSVG;
  const themeText = theme === "light" ? "dark" : "light";

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <button
      type="button"
      className={`${theme} themeSwitch`}
      onClick={toggleTheme}
    >
      <p>{themeText}</p>
      <img src={svgSRC} alt="sun" aria-hidden="true" />
    </button>
  );
}

export default ThemeSwitch;
