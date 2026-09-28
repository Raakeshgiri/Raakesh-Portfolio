import { bindStyles } from "../../utils/bindStyles";
import styles from "./Hero.module.css";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  HiOutlineArrowUpRight,
  HiOutlineArrowDown,
} from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { portfolio } from "../../data/portfolioData";

const classes = bindStyles(styles);

function GmailIcon({ size = 21, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M2 6L6 9V21H3C2.45 21 2 20.55 2 20V6Z"
        fill="#4285F4"
      />
      <path
        d="M18 9L22 6V20C22 20.55 21.55 21 21 21H18V9Z"
        fill="#34A853"
      />
      <path
        d="M6 5L12 9.5L18 5V10L12 14.5L6 10V5Z"
        fill="#EA4335"
      />
      <path
        d="M2 6V5C2 3.35 3.88 2.41 5.2 3.4L6 4V10L2 7V6Z"
        fill="#C5221F"
      />
      <path
        d="M18 4L18.8 3.4C20.12 2.41 22 3.35 22 5V7L18 10V4Z"
        fill="#FBBC04"
      />
    </svg>
  );
}

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Raakeshgiri",
    icon: FaGithub,
    className: "hero-icon-github",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/raakesh-ga/",
    icon: FaLinkedin,
    className: "hero-icon-linkedin",
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${portfolio.email}`,
    icon: GmailIcon,
    className: "hero-icon-email",
    external: false,
  },
];

// Keep the list outside the component so rerenders do not restart the timer.
const defaultHeroRoles = [
  "Flutter Developer",
  "Software Developer",
  "Mobile App Developer",
  "Full Stack Developer",
];

const configuredHeroRoles = Array.isArray(portfolio.heroRoles)
  ? portfolio.heroRoles
      .filter((title) => typeof title === "string" && title.trim())
      .map((title) => title.trim())
  : [];

// The general portfolio.role is never used by this animation.
const heroRoles = configuredHeroRoles.length
  ? [...new Set(configuredHeroRoles)]
  : defaultHeroRoles;

function AnimatedRole() {
  const reduceMotion = useReducedMotion();
  const [text, setText] = useState("");

  useEffect(() => {
    if (reduceMotion) return undefined;

    let roleIndex = 0;
    let characterIndex = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const role = heroRoles[roleIndex];
      characterIndex += deleting ? -1 : 1;
      setText(role.slice(0, characterIndex));

      let delay = deleting ? 45 : 85;
      if (!deleting && characterIndex === role.length) {
        deleting = true;
        delay = 1800;
      } else if (deleting && characterIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % heroRoles.length;
        delay = 300;
      }
      timer = window.setTimeout(tick, delay);
    };

    setText("");
    timer = window.setTimeout(tick, 300);
    return () => window.clearTimeout(timer);
  }, [reduceMotion]);

  return (
    <h2 className={styles["hero-role"]}>
      <span className={styles["hero-role-accessible"]}>{heroRoles.join(", ")}</span>
      <span className={styles["hero-role-visual"]} aria-hidden="true">
        <span className={`${styles["hero-role-text"]} text-gradient`}>
          {reduceMotion ? heroRoles[0] : text}
        </span>
        {!reduceMotion && <span className={styles["hero-role-cursor"]} />}
      </span>
    </h2>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className={`section ${styles["hero-section"]}`}
    >

      <div
        className={`blob ${styles["hero-blob-left"]}`}
        aria-hidden="true"
      />

      <div
        className={`blob ${styles["hero-blob-right"]}`}
        aria-hidden="true"
      />

      <div
        className={`container ${styles["hero-container"]}`}
      >
        <div
          className={`${styles["hero-grid"]} ${styles["hero-grid-layout"]}`}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            <span className="eyebrow">
              {portfolio.eyebrow}
            </span>

            <h1
              className={styles["hero-name"]}
            >
              {portfolio.name}
            </h1>

            <AnimatedRole />

            <p
              className={styles["hero-intro"]}
            >
              {portfolio.intro}
            </p>

            {/* Main action buttons */}
            <div
              className={styles["hero-actions"]}
            >
              <a
                href="#projects"
                className="btn btn-primary"
              >
                View My Work
                <HiOutlineArrowUpRight aria-hidden="true" />
              </a>

              <a
                href="/resume.pdf"
                download="Raakesh_Resume"
                className="btn btn-ghost"
              >
                Download CV
              </a>
            </div>

            {/* Social links */}
            <nav
              className={styles["hero-social-links"]}
              aria-label="Social and email links"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className={styles["hero-social-link"]}
                    target={social.external ? "_blank" : undefined}
                    rel={
                      social.external
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={
                      social.external
                        ? `${social.label} profile (opens in a new tab)`
                        : "Send me an email"
                    }
                  >
                    <Icon
                      className={classes(`hero-social-icon ${social.className}`)}
                      size={21}
                      aria-hidden="true"
                    />

                    <span>{social.label}</span>
                  </a>
                );
              })}
            </nav>
          </motion.div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.15,
            }}
            className={styles["hero-portrait"]}
          >
            <div
              className={`glass ${styles["hero-photo-frame"]}`}
            >
              {portfolio.profileImage ? (
                <img
                  src={portfolio.profileImage}
                  alt={portfolio.name}
                  className={styles["hero-photo"]}
                />
              ) : (
                <div
                  className={styles["hero-photo-placeholder"]}
                >
                  {portfolio.name.charAt(0)}
                </div>
              )}
            </div>

            {/* Experience badge */}
            <motion.div
              className={`glass ${styles["hero-badge"]}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.6,
              }}
            >
              <div
                className={`text-gradient ${styles["hero-stat-value"]}`}
              >
                {portfolio.stats[0].value}
              </div>

              <div
                className={styles["hero-stat-label"]}
              >
                {portfolio.stats[0].label}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        className={styles["hero-scroll-link"]}
        animate={{ y: [0, 8, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
          ease: "easeInOut",
        }}
      >
        <HiOutlineArrowDown size={20} />
      </motion.a>
    </section>
  );
}