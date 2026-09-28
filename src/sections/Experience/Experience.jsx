import { bindStyles } from "../../utils/bindStyles";
import styles from "./Experience.module.css";
import { motion, useReducedMotion } from "framer-motion";
import {
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineMapPin,
  HiOutlineBuildingOffice2,
  HiOutlineCodeBracket,
  HiOutlineChartBar,
  HiOutlineCheckCircle,
  HiOutlineFolderOpen,
  HiOutlineDevicePhoneMobile,
  HiOutlineComputerDesktop,
} from "react-icons/hi2";
import { portfolio } from "../../data/portfolioData";

const classes = bindStyles(styles);

const projectIcons = {
  clinic: HiOutlineBuildingOffice2,
  mobile: HiOutlineDevicePhoneMobile,
  web: HiOutlineComputerDesktop,
};

export default function Experience() {
  const reduceMotion = useReducedMotion();
  const experience = portfolio.experience;
  const currentRole = experience.roles.find((role) => role.current);
  const reveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: reduceMotion ? 0 : 0.5 },
  };
  const summary = [
    { label: "Experience", value: "Intern", detail: "Professional level", Icon: HiOutlineBriefcase },
    { label: "Duration", value: currentRole?.period || "Past experience", detail: "Current role", Icon: HiOutlineCalendarDays },
    { label: "Location", value: portfolio.location, detail: "Work location", Icon: HiOutlineMapPin },
    { label: "Company", value: currentRole?.company || "—", Icon: HiOutlineBuildingOffice2 },
    { label: "Focus Area", value: "Mobile & Full Stack", detail: "Development", Icon: HiOutlineCodeBracket },
  ];

  return (
    <section id="experience" className="section experience-section" aria-labelledby="experience-title">
      <div className={`container ${styles["experience-container"]}`}>
        <motion.header className={styles["experience-heading"]} {...reveal}>
          <span className="eyebrow"><HiOutlineBriefcase aria-hidden="true" /> EXPERIENCE</span>
          <h2 id="experience-title">My <span className="text-gradient">Experience</span></h2>
          <p>{experience.subtitle}</p>
        </motion.header>

        <div className={styles["experience-layout"]}>
          <div className={styles["experience-main"]}>
            <ol className={styles["experience-timeline"]}>
              {experience.roles.map((role) => (
                <li className={styles["experience-entry"]} key={role.id}>
                  <div className={styles["experience-date"]}>
                    <strong>{role.period}</strong>
                    <span><HiOutlineMapPin aria-hidden="true" />{role.location}</span>
                  </div>
                  <span className={styles["experience-node"]} aria-hidden="true" />
                  <motion.article className={styles["experience-card"]} aria-labelledby={`experience-${role.id}`} {...reveal}>
                    <div className={styles["experience-role-header"]}>
                      <span className={styles["experience-monogram"]} aria-hidden="true">{role.initials}</span>
                      <div className={styles["experience-role-copy"]}>
                        <h3 id={`experience-${role.id}`}>{role.role}</h3>
                        <p className={styles["experience-company"]}>{role.company}</p>
                      </div>
                      <span className={classes(`experience-status${role.current ? " is-current" : ""}`)}>
                        <span aria-hidden="true" />{role.current ? "Current" : "Completed"}
                      </span>
                    </div>
                    {role.technologies?.length > 0 && (
                      <ul className={styles["experience-tags"]} aria-label="Technologies">
                        {role.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                      </ul>
                    )}
                    <p className={styles["experience-description"]}>{role.description}</p>
                  </motion.article>
                </li>
              ))}
            </ol>

            <motion.div className={`${styles["experience-card"]} ${styles["experience-project-work"]}`} {...reveal}>
              <h3><HiOutlineBriefcase aria-hidden="true" /> Development Highlights</h3>
              <p className={styles["experience-context"]}>Across my mobile and web projects</p>
              <ul className={styles["experience-highlights"]}>
                {experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
              <div className={styles["experience-projects"]}>
                <h3><HiOutlineFolderOpen aria-hidden="true" /> Projects Worked On</h3>
                <ul className={styles["experience-project-list"]}>
                  {experience.projectWork.map((project) => {
                    const Icon = projectIcons[project.icon] || HiOutlineCodeBracket;
                    return (
                      <li key={project.name}>
                        <span className={classes(`experience-project-icon ${project.icon}`)}><Icon aria-hidden="true" /></span>
                        <div><strong>{project.name}</strong><span>{project.detail}</span></div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>
          </div>

          <aside className={styles["experience-sidebar"]} aria-label="Experience summary">
            <motion.div className={styles["experience-card"]} {...reveal}>
              <h3><HiOutlineChartBar aria-hidden="true" /> Experience at a Glance</h3>
              <dl className={styles["experience-summary"]}>
                {summary.map(({ label, value, detail, Icon }) => (
                  <div className={styles["experience-summary-row"]} key={label}>
                    <span className={styles["experience-summary-icon"]}><Icon aria-hidden="true" /></span>
                    <div><dt>{label}</dt><dd>{value}{detail && <small>{detail}</small>}</dd></div>
                  </div>
                ))}
              </dl>
            </motion.div>
            <motion.div className={styles["experience-card"]} {...reveal}>
              <h3><HiOutlineCodeBracket aria-hidden="true" /> What I Do</h3>
              <ul className={styles["experience-capabilities"]}>
                {experience.capabilities.map((item) => (
                  <li key={item}><HiOutlineCheckCircle aria-hidden="true" /><span>{item}</span></li>
                ))}
              </ul>
            </motion.div>
          </aside>
        </div>

        <motion.div className={`${styles["experience-statement"]} ${styles["experience-card"]}`} {...reveal}>
          <span className={styles["experience-quote-mark"]} aria-hidden="true">“</span>
          <p>{experience.statement}</p>
          <HiOutlineComputerDesktop className={styles["experience-statement-art"]} aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
}
