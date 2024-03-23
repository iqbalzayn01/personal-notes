import PropTypes from "prop-types";
import { useTheme } from "../ThemeContext";

export default function ThemeToggle({ className }) {
  const { darkMode, toggleDarkMode } = useTheme();

  if (darkMode) {
    document.body.classList.remove("bg-csecondary");
    document.body.classList.add("bg-white");
  } else {
    document.body.classList.add("bg-csecondary");
    document.body.classList.remove("bg-white");
  }

  return (
    <button onClick={toggleDarkMode} className={className}>
      {darkMode ? "🌑Dark Mode" : "☀️Light Mode"}
    </button>
  );
}

ThemeToggle.propTypes = {
  className: PropTypes.string,
};
