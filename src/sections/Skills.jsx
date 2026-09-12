import { motion } from "framer-motion";
import { portfolio } from "../data/portfolioData";
import SectionTitle from "../components/SectionTitle";

import {
  SiFlutter,
  SiJavascript,
  SiSpringboot,
  SiMysql,
  SiHtml5,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
} from "react-icons/si";

import {
  FaJava,
  FaReact,
  FaCss3Alt,
} from "react-icons/fa";

import {
  VscVscode,
} from "react-icons/vsc";

const skillIcons = {
  Flutter: SiFlutter,
  Java: FaJava,
  JavaScript: SiJavascript,
  "React.js": FaReact,
  "Spring Boot": SiSpringboot,
  MySQL: SiMysql,
  HTML: SiHtml5,
  CSS: FaCss3Alt,
  Git: SiGit,
  GitHub: SiGithub,
  "VS Code": VscVscode,
  Postman: SiPostman,
  Vercel: SiVercel,
};

const skillClasses = {
  Flutter: "skill-flutter",
  Java: "skill-java",
  JavaScript: "skill-javascript",
  "React.js": "skill-react",
  "Spring Boot": "skill-spring",
  MySQL: "skill-mysql",
  HTML: "skill-html",
  CSS: "skill-css",
  Git: "skill-git",
  GitHub: "skill-github",
  "VS Code": "skill-vscode",
  Postman: "skill-postman",
  "Adobe XD": "skill-adobexd",
  Vercel: "skill-vercel",
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="section skills-section"
    >
      <div className="skills-blob skills-blob-left" />
      <div className="skills-blob skills-blob-right" />

      <div className="container skills-container">
        <SectionTitle
          eyebrow="My Skills"
          title="Technologies I"
          highlight="Master"
          subtitle="Tools and languages I use to design, build and ship products end to end."
        />

        <motion.div
          className="skills-card-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={{
            hidden: {},

            visible: {
              transition: {
                staggerChildren: 0.055,
              },
            },
          }}
        >
          {portfolio.skills.map((skill) => {
            const Icon = skillIcons[skill.name];

            return (
              <motion.div
                key={skill.name}
                className="skill-card"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 24,
                    scale: 0.96,
                  },

                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,

                    transition: {
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
                whileHover={{
                  y: -7,

                  transition: {
                    duration: 0.25,
                  },
                }}
              >
                <div
                  className={`skill-icon-box ${
                    skillClasses[skill.name] || ""
                  }`}
                >
                  {skill.name === "Adobe XD" ? (
                    <span className="adobe-xd-icon">
                      Xd
                    </span>
                  ) : (
                    Icon && (
                      <Icon className="skill-icon" />
                    )
                  )}
                </div>

                <span className="skill-name">
                  {skill.name}
                </span>

                <div className="skill-card-shine" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}