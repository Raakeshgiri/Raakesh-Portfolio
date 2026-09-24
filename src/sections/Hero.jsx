import { motion } from "framer-motion";
import {
  HiOutlineArrowUpRight,
  HiOutlineArrowDown,
} from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { portfolio } from "../data/portfolioData";

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

export default function Hero() {
  return (
    <section
      id="home"
      className="section"
      style={{
        paddingTop: 170,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <style>{`
        #home .hero-social-links {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          column-gap: 28px;
          row-gap: 8px;
          margin-top: 24px;
        }

        #home .hero-social-link {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          min-height: 44px;
          color: var(--text-secondary);
          font-size: 15px;
          font-weight: 500;
          line-height: 1.4;
          text-decoration: none;
          border-radius: 6px;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        #home .hero-social-icon {
          display: block;
          flex-shrink: 0;
        }

        #home .hero-icon-github {
          color: #181717;
        }

        [data-theme="dark"] #home .hero-icon-github {
          color: #ffffff;
        }

        #home .hero-icon-linkedin {
          color: #0a66c2;
        }

        #home .hero-social-link:focus-visible {
          outline: 2px solid var(--accent-500);
          outline-offset: 5px;
        }

        @media (hover: hover) and (pointer: fine) {
          #home .hero-social-link:hover {
            color: var(--accent-500);
            transform: translateY(-3px);
          }
        }

        @media (max-width: 480px) {
          #home .hero-social-links {
            column-gap: 20px;
            margin-top: 20px;
          }

          #home .hero-social-link {
            font-size: 14px;
            gap: 7px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          #home .hero-social-link {
            transition: none;
          }

          #home .hero-social-link:hover {
            transform: none;
          }
        }
      `}</style>

      <div
        className="blob"
        aria-hidden="true"
        style={{
          width: 420,
          height: 420,
          background: "var(--blob-1)",
          top: -80,
          left: -120,
        }}
      />

      <div
        className="blob"
        aria-hidden="true"
        style={{
          width: 340,
          height: 340,
          background: "var(--blob-2)",
          top: 120,
          right: -100,
          animationDelay: "2s",
        }}
      />

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 40,
            alignItems: "center",
          }}
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
              style={{
                fontSize: "clamp(38px, 5.4vw, 62px)",
                fontWeight: 700,
              }}
            >
              {portfolio.name}
            </h1>

            <h2
              className="text-gradient"
              style={{
                fontSize: "clamp(20px, 2.6vw, 28px)",
                fontWeight: 600,
                marginTop: 6,
              }}
            >
              {portfolio.role}
            </h2>

            <p
              style={{
                color: "var(--text-secondary)",
                marginTop: 20,
                maxWidth: 460,
                lineHeight: 1.7,
                fontSize: 15.5,
              }}
            >
              {portfolio.intro}
            </p>

            {/* Main action buttons */}
            <div
              style={{
                display: "flex",
                gap: 14,
                marginTop: 34,
                flexWrap: "wrap",
              }}
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
              className="hero-social-links"
              aria-label="Social and email links"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="hero-social-link"
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
                      className={`hero-social-icon ${social.className}`}
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
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              className="glass"
              style={{
                width: "100%",
                maxWidth: 340,
                aspectRatio: "3/3.4",
                overflow: "hidden",
                position: "relative",
                padding: 8,
              }}
            >
              {portfolio.profileImage ? (
                <img
                  src={portfolio.profileImage}
                  alt={portfolio.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 18,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 18,
                    background: "var(--accent-gradient)",
                    display: "grid",
                    placeItems: "center",
                    color: "#fff",
                    fontFamily: "Sora",
                    fontSize: 54,
                    fontWeight: 700,
                  }}
                >
                  {portfolio.name.charAt(0)}
                </div>
              )}
            </div>

            {/* Experience badge */}
            <motion.div
              className="glass"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.6,
              }}
              style={{
                position: "absolute",
                top: 10,
                right: -10,
                padding: "12px 16px",
                textAlign: "center",
              }}
            >
              <div
                className="text-gradient"
                style={{
                  fontFamily: "Sora",
                  fontWeight: 700,
                  fontSize: 20,
                }}
              >
                {portfolio.stats[0].value}
              </div>

              <div
                style={{
                  fontSize: 11,
                  color: "var(--text-secondary)",
                }}
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
        style={{
          position: "absolute",
          bottom: 30,
          left: "50%",
          transform: "translateX(-50%)",
          color: "var(--text-muted)",
        }}
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