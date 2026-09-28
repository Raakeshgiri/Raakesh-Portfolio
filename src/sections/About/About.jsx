import styles from "./About.module.css";
import { motion, useReducedMotion } from "framer-motion";
import {
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineCodeBracket,
  HiOutlineMapPin,
  HiOutlineCommandLine,
  HiOutlineArrowRight,
} from "react-icons/hi2";

import { portfolio } from "../../data/portfolioData";

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
      className={`section ${styles["about-section"]}`}
      aria-labelledby="about-title"
    >
      <div className="container">
        {/* Section header */}
        <motion.div
          className={`${styles["about-heading"]} ${styles["about-heading-layout"]}`}
          {...reveal()}
        >
          <span
            className={`eyebrow ${styles["about-eyebrow"]}`}
          >
            ABOUT ME
          </span>

          <h2
            id="about-title"
            className={styles["about-title"]}
          >
            Here is What{" "}
            <span className="text-gradient">
              You Should Know
            </span>
          </h2>

          <p
            className={styles["about-subtitle"]}
          >
            {details.subtitle}
          </p>
        </motion.div>

        {/* About content */}
        <div className={styles["about-content-grid"]}>
          <motion.div
            className={styles["about-biography"]}
            {...reveal(0.08)}
          >
            {details.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <a
              className={styles["about-action"]}
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
            className={styles["about-snapshot"]}
            aria-labelledby="snapshot-title"
            {...reveal(0.16)}
          >
            <h3 id="snapshot-title">
              Developer Snapshot
            </h3>

            <dl className={styles["about-snapshot-list"]}>
              {details.snapshot.map((item) => {
                const Icon =
                  snapshotIcons[item.id] ||
                  HiOutlineCodeBracket;

                return (
                  <div
                    className={styles["about-snapshot-row"]}
                    key={item.id}
                  >
                    <span
                      className={styles["about-snapshot-icon"]}
                      aria-hidden="true"
                    >
                      <Icon size={25} />
                    </span>

                    <div className={styles["about-snapshot-copy"]}>
                      <dt>{item.label}</dt>

                      <dd>
                        {item.id === "location"
                          ? portfolio.location
                          : item.value}
                      </dd>

                      {item.detail && (
                        <dd className={styles["about-snapshot-detail"]}>
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