
import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
            <i className={`bi ${theme === "light" ? "bi-moon-stars-fill" : "bi-sun-fill"}`}></i>
        </button>
    );
}

export default ThemeToggle;
