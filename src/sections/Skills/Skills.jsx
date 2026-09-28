import { bindStyles } from "../../utils/bindStyles";
import styles from "./Skills.module.css";
import { useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { portfolio } from "../../data/portfolioData";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SkillGlobe from "./SkillGlobe";
import { SiFlutter, SiJavascript, SiSpringboot, SiMysql, SiHtml5, SiGit, SiGithub, SiPostman, SiVercel } from "react-icons/si";
import { FaJava, FaReact, FaCss3Alt, FaGlobe, FaTh } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const classes = bindStyles(styles);

const skillCardEntrance = {
  hidden: ({ x = 0, y = 0, index = 0 } = {}) => ({
    opacity: 0,
    x,
    y,
    scale: 0.7,
    rotate: index % 2 === 0 ? -12 : 12,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      opacity: { duration: 0.2 },
      default: { type: "spring", stiffness: 110, damping: 20, mass: 0.8 },
    },
  },
};

const staticSkillCard = {
  hidden: { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 },
  visible: { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0, transition: { duration: 0 } },
};

const skillIcons = {
  Flutter: SiFlutter, Java: FaJava, JavaScript: SiJavascript,
  "React.js": FaReact, "Spring Boot": SiSpringboot, MySQL: SiMysql,
  HTML: SiHtml5, CSS: FaCss3Alt, Git: SiGit, GitHub: SiGithub,
  "VS Code": VscVscode, Postman: SiPostman, Vercel: SiVercel,
};
const skillClasses = {
  Flutter: "skill-flutter", Java: "skill-java", JavaScript: "skill-javascript",
  "React.js": "skill-react", "Spring Boot": "skill-spring", MySQL: "skill-mysql",
  HTML: "skill-html", CSS: "skill-css", Git: "skill-git", GitHub: "skill-github",
  "VS Code": "skill-vscode", Postman: "skill-postman", "Adobe XD": "skill-adobexd", Vercel: "skill-vercel",
};

export default function Skills() {
  const [view, setView] = useState("skills");
  const reduceMotion = useReducedMotion();
  const gridRef = useRef(null);
  const [origins, setOrigins] = useState(null);

  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid || reduceMotion) return;

    // Measure actual grid positions so the deal adapts to every breakpoint.
    const measure = () => {
      setOrigins(Array.from(grid.children, (card, index) => ({
        x: grid.clientWidth / 2 - card.offsetLeft - card.offsetWidth / 2,
        y: Math.min(grid.clientHeight / 2, 180) - card.offsetTop - card.offsetHeight / 2,
        index,
      })));
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(grid);
    return () => observer.disconnect();
  }, [view, reduceMotion]);
  return (
    <section id="skills" className={`section ${styles["skills-section"]}`}>
      <div className={`${styles["skills-blob"]} ${styles["skills-blob-left"]}`} aria-hidden="true" />
      <div className={`${styles["skills-blob"]} ${styles["skills-blob-right"]}`} aria-hidden="true" />
      <div className={`container ${styles["skills-container"]}`}>
        <SectionTitle eyebrow="My Skills" title="Technologies I" highlight="Master"
          subtitle="Tools and languages I use to design, build and ship products end to end." />
        <div className={styles["skills-view-controls"]}>
          <div className={styles["skills-view-toggle"]} role="group" aria-label="Skills display mode">
            <button type="button" aria-pressed={view === "skills"} aria-controls="skills-view-panel" onClick={() => setView("skills")}>
              <FaTh aria-hidden="true" /> Skills
            </button>
            <button type="button" aria-pressed={view === "globe"} aria-controls="skills-view-panel" onClick={() => setView("globe")}>
              <FaGlobe aria-hidden="true" /> Globe
            </button>
          </div>
          <p aria-live="polite">{view === "skills" ? "Showing skills in card view." : "Showing skills as a connected global network."}</p>
        </div>
        <div id="skills-view-panel">
          {view === "globe" ? <SkillGlobe /> : (
            <motion.div ref={gridRef} className={styles["skills-card-grid"]} initial={reduceMotion ? false : "hidden"}
              whileInView="visible" viewport={{ once: true, amount: 0.15 }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.065 } } }}>
              {portfolio.skills.map((skill, index) => {
                const Icon = skillIcons[skill.name];
                return (
                  <motion.div key={`${skill.name}-${origins ? "ready" : "measure"}`} className={styles["skill-card"]}
                    custom={origins?.[index]}
                    variants={reduceMotion ? staticSkillCard : skillCardEntrance}>
                    <div className={classes(`skill-icon-box ${skillClasses[skill.name] || ""}`)} aria-hidden="true">
                      {skill.name === "Adobe XD" ? <span className={styles["adobe-xd-icon"]}>Xd</span> : Icon && <Icon className={styles["skill-icon"]} />}
                    </div>
                    <span className={styles["skill-name"]}>{skill.name}</span>
                    <div className={styles["skill-card-shine"]} aria-hidden="true" />
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
