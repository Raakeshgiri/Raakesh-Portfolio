import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolio } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer style={{ padding: "40px 0", borderTop: "1px solid var(--surface-border)" }}>
      <div
        className="container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p style={{ color: "var(--text-muted)", fontSize: 14 }}>
          © {new Date().getFullYear()} {portfolio.name}. All rights reserved.
        </p>

        <div style={{ display: "flex", gap: 12 }}>
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
      className="icon-btn"
      style={{
        width: 36,
        height: 36,
        borderRadius: "50%",
        display: "grid",
        placeItems: "center",
        background: "var(--surface)",
        border: "1px solid var(--surface-border)",
        color: "var(--text-secondary)",
      }}
    >
      {social.icon}
    </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
