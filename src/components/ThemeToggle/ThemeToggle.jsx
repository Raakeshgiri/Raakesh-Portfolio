import { useTheme } from "../../context/ThemeContext";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const dark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label="Dark mode"
      title={`Switch to ${dark ? "light" : "dark"} mode`}
      className={styles.toggle}
      data-dark={dark}
      onClick={toggleTheme}
    >
      <span className={styles.scene} aria-hidden="true">
        <span className={styles.night} />
        <span className={styles.stars}>
          <i /><i /><i /><i /><i /><i />
        </span>
        <span className={styles.clouds}>
          <span className={styles.cloudBack} />
          <span className={styles.cloudFront} />
        </span>
        <span className={styles.thumb}>
          <span className={styles.moon}>
            <i /><i /><i />
          </span>
        </span>
      </span>
    </button>
  );
}
