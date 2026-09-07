import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

import { portfolio } from "../data/portfolioData";
import SectionTitle from "../components/SectionTitle";
import ProjectModal from "../components/ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProject = (projectId) => {
    const details = portfolio.projectDetails[projectId];

    if (!details) return;

    setSelectedProject(details);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section id="projects" className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Featured Projects"
            title="Some of My"
            highlight="Recent Work"
            subtitle="A few products I designed and built from the ground up."
          />

          <div className="projects-grid">
            {portfolio.projects.map((project, i) => (
              <motion.button
                key={project.id}
                type="button"
                className="glass project-card"
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
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.12,
                }}
                whileHover={{
                  y: -8,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                onClick={() => openProject(project.id)}
              >
                {/* Top gradient area */}
                <div className="project-card-cover">
                  <span className="project-number">
                    {project.number}
                  </span>
                </div>

                {/* Bottom content */}
                <div className="project-card-content">
                  <span className="project-card-category">
                    {project.category.toUpperCase()}
                  </span>

                  <h3>
                    {project.title}

                    <HiOutlineArrowUpRight
                      size={17}
                      className="project-card-arrow"
                    />
                  </h3>

                  <p>{project.description}</p>

                  <div className="project-view-hint">
                    <span>View project</span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={closeProject}
      />
    </>
  );
}