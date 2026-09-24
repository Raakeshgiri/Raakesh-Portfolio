import { motion, useReducedMotion } from "framer-motion";
import {
  HiOutlineAcademicCap,
  HiOutlineCodeBracket,
  HiOutlineBriefcase,
  HiOutlineDevicePhoneMobile,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

import { portfolio } from "../data/portfolioData";

const milestoneIcons = {
  education: HiOutlineAcademicCap,
  project: HiOutlineCodeBracket,
  work: HiOutlineBriefcase,
  mobile: HiOutlineDevicePhoneMobile,
  future: HiOutlineRocketLaunch,
};

const journeyStyles = `
  #journey .journey-container {
    width: 100%;
    max-width: 1600px;
    margin-inline: auto;
    padding-inline: clamp(20px, 3vw, 48px);
  }

  #journey .journey-timeline {
    width: 100%;
    padding: 0;
    list-style: none;
  }

  @media (min-width: 1200px) {
    #journey .journey-timeline {
      display: grid;
      grid-template-columns:
        repeat(var(--journey-columns), minmax(0, 1fr));
      align-items: stretch;
      gap: 22px;
      max-width: none;
      margin: 0 auto;
    }

    #journey .journey-step {
      position: relative;
      display: flex;
      flex-direction: column;
      min-width: 0;
    }

    #journey .journey-step:not(:last-child)::after {
      content: "";
      position: absolute;
      top: 80px;
      left: 50%;
      bottom: auto;
      width: calc(100% + 22px);
      height: 0;
      border-left: none;
      border-top: 2px dashed var(--accent-300, #c4b5fd);
      z-index: -1;
    }

    #journey .journey-marker {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-shrink: 0;
    }

    #journey .journey-year {
      line-height: 28px;
      margin-bottom: 12px;
    }

    #journey .journey-icon {
      width: 80px;
      height: 80px;
      box-sizing: border-box;
      flex-shrink: 0;
    }

    #journey .journey-stem {
      display: block;
      height: 26px;
    }

    #journey .journey-card {
      flex: 1;
      width: 100%;
      min-width: 0;
      padding: 26px 20px;
    }
  }

  #journey .journey-card h3,
  #journey .journey-organization,
  #journey .journey-highlights li {
    overflow-wrap: break-word;
  }

  @media (max-width: 1199px) {
    #journey .journey-timeline {
      display: grid;
      grid-template-columns: minmax(0, 1fr);
      max-width: 760px;
      margin-inline: auto;
      gap: 28px;
    }

    #journey .journey-step {
      display: grid;
      grid-template-columns: 100px minmax(0, 1fr);
      align-items: start;
      gap: 22px;
      min-width: 0;
    }

    #journey .journey-card {
      min-width: 0;
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    #journey .journey-step {
      grid-template-columns: 66px minmax(0, 1fr);
      gap: 14px;
    }

    #journey .journey-card {
      padding: 20px 16px;
    }
  }
`;

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
      className="section journey-section"
      aria-labelledby="journey-title"
    >
      <style>{journeyStyles}</style>

      <div className="container journey-container">
        <motion.div
          className="journey-heading"
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
          className="journey-timeline"
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
                className="journey-step"
                key={milestone.id}
              >
                <div className="journey-marker">
                  <span className="journey-year">
                    {milestone.year}
                  </span>

                  <span
                    className="journey-icon"
                    aria-hidden="true"
                  >
                    <Icon size={30} />
                  </span>

                  <span
                    className="journey-stem"
                    aria-hidden="true"
                  />
                </div>

                <motion.article
                  className="journey-card"
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
                    <p className="journey-organization">
                      {milestone.organization}
                    </p>
                  )}

                  {milestone.period && (
                    <p className="journey-period">
                      {milestone.period}
                    </p>
                  )}

                  <ul className="journey-highlights">
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