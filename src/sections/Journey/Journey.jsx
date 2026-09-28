import styles from "./Journey.module.css";
import { motion, useReducedMotion } from "framer-motion";
import {
  HiOutlineAcademicCap,
  HiOutlineCodeBracket,
  HiOutlineBriefcase,
  HiOutlineDevicePhoneMobile,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

import { portfolio } from "../../data/portfolioData";

const milestoneIcons = {
  education: HiOutlineAcademicCap,
  project: HiOutlineCodeBracket,
  work: HiOutlineBriefcase,
  mobile: HiOutlineDevicePhoneMobile,
  future: HiOutlineRocketLaunch,
};

export default function Journey() {
  const reduceMotion = useReducedMotion();
  const { journey } = portfolio;

  // Keep Travelmate out of the Journey timeline.
  const milestones = journey.milestones.filter(
    (milestone) => milestone.id !== "travelmate"
  );

  return (
    <section
      id="journey"
      className={`section ${styles["journey-section"]}`}
      aria-labelledby="journey-title"
    >

      <div className={`container ${styles["journey-container"]}`}>
        <motion.div
          className={styles["journey-heading"]}
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 20,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <span className="eyebrow">MY JOURNEY</span>

          <h2 id="journey-title">
            A Journey of{" "}
            <span className="text-gradient">Growth</span>
          </h2>

          <p>{journey.subtitle}</p>
        </motion.div>

        <ol
          className={styles["journey-timeline"]}
          style={{
            "--journey-columns": Math.max(milestones.length, 1),
          }}
        >
          {milestones.map((milestone, index) => {
            const Icon =
              milestoneIcons[milestone.icon] ||
              HiOutlineCodeBracket;

            return (
              <li
                className={styles["journey-step"]}
                key={milestone.id}
              >
                <div className={styles["journey-marker"]}>
                  <span className={styles["journey-year"]}>
                    {milestone.year}
                  </span>

                  <span
                    className={styles["journey-icon"]}
                    aria-hidden="true"
                  >
                    <Icon size={30} />
                  </span>

                  <span
                    className={styles["journey-stem"]}
                    aria-hidden="true"
                  />
                </div>

                <motion.article
                  className={styles["journey-card"]}
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 24,
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: reduceMotion ? 0 : index * 0.05,
                  }}
                >
                  <h3>{milestone.title}</h3>

                  {milestone.organization && (
                    <p className={styles["journey-organization"]}>
                      {milestone.organization}
                    </p>
                  )}

                  {milestone.period && (
                    <p className={styles["journey-period"]}>
                      {milestone.period}
                    </p>
                  )}

                  <ul className={styles["journey-highlights"]}>
                    {milestone.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </motion.article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}