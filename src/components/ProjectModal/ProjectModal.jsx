import styles from "./ProjectModal.module.css";
import { useEffect } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  HiOutlineArrowUpRight,
  HiOutlineLink,
  HiOutlineXMark,
} from "react-icons/hi2";

export default function ProjectModal({
  project,
  onClose,
}) {
  useEffect(() => {
    if (!project) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (project) {
      window.addEventListener(
        "keydown",
        handleKeyDown
      );
    }

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [project, onClose]);

  const isMobileProject =
    project?.type === "mobile";

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className={styles["project-modal-overlay"]}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.25,
          }}
          onMouseDown={(event) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              onClose();
            }
          }}
        >
          <motion.div
            className={styles["project-modal"]}
            initial={{
              opacity: 0,
              y: 60,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 40,
              scale: 0.97,
            }}
            transition={{
              type: "spring",
              stiffness: 170,
              damping: 22,
            }}
          >
            {/* Close Button */}

            <button
              type="button"
              className={styles["project-modal-close"]}
              onClick={onClose}
              aria-label="Close project details"
            >
              <HiOutlineXMark />
            </button>

            {/* Header */}

            <motion.div
              className={styles["project-modal-header"]}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.1,
              }}
            >
              <span className={styles["project-modal-label"]}>
                {project.label}
              </span>

              <h2>
                {project.title}
              </h2>
            </motion.div>

            {/* Project Info */}

            <motion.div
              className={styles["project-info-card"]}
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.18,
              }}
            >
              <span className={styles["project-year"]}>
                {project.year}
              </span>

              <p className={styles["project-long-description"]}>
                {project.description}
              </p>

              <div className={styles["project-technologies"]}>
                <span className={styles["project-tech-title"]}>
                  TECHNOLOGIES
                </span>

                <div className={styles["project-tech-list"]}>
                  {project.technologies.map(
                    (technology) => (
                      <span
                        key={technology}
                        className={styles["project-tech-chip"]}
                      >
                        {technology}
                      </span>
                    )
                  )}
                </div>
              </div>
            </motion.div>

            {/* Links */}

            {project.links?.length > 0 && (
              <motion.div
                className={styles["project-links-section"]}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.26,
                }}
              >
                <div className={styles["project-links-heading"]}>
                  <span>
                    Links
                  </span>

                  <HiOutlineLink />
                </div>

                <div className={styles["project-links-list"]}>
                  {project.links.map(
                    (link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        className={styles["project-link-item"]}
                        target={
                          link.url !== "#"
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          link.url !== "#"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        onClick={(event) => {
                          if (
                            link.url === "#"
                          ) {
                            event.preventDefault();
                          }
                        }}
                      >
                        <span>
                          {link.label}
                        </span>

                        <HiOutlineArrowUpRight />
                      </a>
                    )
                  )}
                </div>
              </motion.div>
            )}

            {/* Screenshots */}

            {project.screenshots?.length >
              0 && (
              <motion.div
                className={styles["project-screenshots-section"]}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.3,
                }}
              >
                <div className={styles["project-screenshots-heading"]}>
                  <span>
                    Project Screens
                  </span>

                  <span className={styles["project-screenshots-count"]}>
                    {
                      project
                        .screenshots
                        .length
                    }
                  </span>
                </div>

                <div
                  className={
                    isMobileProject
                      ? styles["mobile-screenshots"]
                      : styles["web-screenshots"]
                  }
                >
                  {project.screenshots.map(
                    (
                      screenshot,
                      index
                    ) => (
                      <motion.div
                        key={`${screenshot}-${index}`}
                        className={
                          isMobileProject
                            ? styles["mobile-screenshot-item"]
                            : styles["web-screenshot-item"]
                        }
                        initial={{
                          opacity: 0,
                          y: 30,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{
                          once: true,
                          amount: 0.1,
                        }}
                        transition={{
                          duration: 0.45,
                        }}
                      >
                        {isMobileProject ? (
                          <div className={styles["mobile-device-frame"]}>
                            <img
                              src={
                                screenshot
                              }
                              alt={`${project.title} mobile screenshot ${
                                index +
                                1
                              }`}
                              className={styles["mobile-project-screenshot"]}
                              loading="lazy"
                            />
                          </div>
                        ) : (
                          <div className={styles["web-image-frame"]}>
                            <img
                              src={
                                screenshot
                              }
                              alt={`${project.title} website screenshot ${
                                index +
                                1
                              }`}
                              className={styles["web-project-screenshot"]}
                              loading="lazy"
                            />
                          </div>
                        )}
                      </motion.div>
                    )
                  )}
                </div>
              </motion.div>
            )}

            {/* Bottom Close */}

            <div className={styles["project-modal-bottom"]}>
              <button
                type="button"
                className={styles["project-bottom-close"]}
                onClick={onClose}
              >
                Close Project
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
