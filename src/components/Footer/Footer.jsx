import styles from "./Footer.module.css";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolio } from "../../data/portfolioData";

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div
        className={`container ${styles["footer-content"]}`}
      >
        <p className={styles["footer-copyright"]}>
          © {new Date().getFullYear()} {portfolio.name}. All rights reserved.
        </p>

        <div className={styles["footer-socials"]}>
          {[
            { icon: <FaGithub size={15} />, href: "https://github.com/Raakeshgiri" },
            { icon: <FaLinkedin size={15} />, href: "https://www.linkedin.com/in/raakesh-ga/" },
            { icon: <HiOutlineMail size={16} />, href: `mailto:${portfolio.email}` },
          ].map((social, i) => (
            <a
      key={i}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`icon-btn ${styles["footer-social-link"]}`}
    >
      {social.icon}
    </a>
          ))}
        </div>
      </div>
    </footer>
  );
}