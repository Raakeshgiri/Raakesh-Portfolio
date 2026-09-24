import { motion, useReducedMotion } from "framer-motion";
import {
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineCodeBracket,
  HiOutlineMapPin,
  HiOutlineCommandLine,
  HiOutlineArrowRight,
} from "react-icons/hi2";

import { portfolio } from "../data/portfolioData";

const snapshotIcons = {
  training: HiOutlineAcademicCap,
  experience: HiOutlineBriefcase,
  focus: HiOutlineCodeBracket,
  location: HiOutlineMapPin,
  technologies: HiOutlineCommandLine,
};

export default function About() {
  const reduceMotion = useReducedMotion();
  const details = portfolio.aboutDetails;

  const reveal = (delay = 0) => ({
    initial: reduceMotion
      ? false
      : {
          opacity: 0,
          y: 24,
        },

    whileInView: {
      opacity: 1,
      y: 0,
    },

    viewport: {
      once: true,
      amount: 0.15,
    },

    transition: {
      duration: 0.55,
      delay,
    },
  });

  return (
    <section
      id="about"
      className="section about-section"
      aria-labelledby="about-title"
    >
      <div className="container">
        {/* Section header */}
        <motion.div
          className="about-heading"
          style={{
            maxWidth: 1000,
            textAlign: "center",
          }}
          {...reveal()}
        >
          <span
            className="eyebrow"
            style={{
              justifyContent: "center",
              marginBottom: 16,
            }}
          >
            ABOUT ME
          </span>

          <h2
            id="about-title"
            style={{
              fontSize: "clamp(30px, 4vw, 46px)",
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              marginBottom: 14,
              textWrap: "balance",
            }}
          >
            Here is What{" "}
            <span className="text-gradient">
              You Should Know
            </span>
          </h2>

          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "clamp(15px, 1.6vw, 18px)",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            {details.subtitle}
          </p>
        </motion.div>

        {/* About content */}
        <div className="about-content-grid">
          <motion.div
            className="about-biography"
            {...reveal(0.08)}
          >
            {details.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <a
              className="about-action"
              href={details.cta.href}
            >
              {details.cta.label}

              <HiOutlineArrowRight
                size={20}
                aria-hidden="true"
              />
            </a>
          </motion.div>

          {/* Developer snapshot */}
          <motion.aside
            className="about-snapshot"
            aria-labelledby="snapshot-title"
            {...reveal(0.16)}
          >
            <h3 id="snapshot-title">
              Developer Snapshot
            </h3>

            <dl className="about-snapshot-list">
              {details.snapshot.map((item) => {
                const Icon =
                  snapshotIcons[item.id] ||
                  HiOutlineCodeBracket;

                return (
                  <div
                    className="about-snapshot-row"
                    key={item.id}
                  >
                    <span
                      className="about-snapshot-icon"
                      aria-hidden="true"
                    >
                      <Icon size={25} />
                    </span>

                    <div className="about-snapshot-copy">
                      <dt>{item.label}</dt>

                      <dd>
                        {item.id === "location"
                          ? portfolio.location
                          : item.value}
                      </dd>

                      {item.detail && (
                        <dd className="about-snapshot-detail">
                          {item.detail}
                        </dd>
                      )}
                    </div>
                  </div>
                );
              })}
            </dl>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}