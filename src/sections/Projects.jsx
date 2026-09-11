import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi2";

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
      <section id="projects" className="section projects-section">
        <div className="container">

          {/* Section Heading */}
          <SectionTitle
            eyebrow="Projects"
            title="Some of My"
            highlight="Recent Work"
            subtitle="A few products I designed and built from the ground up."
          />

          {/* Projects Grid */}
          <div className="projects-grid">
            {portfolio.projects.map((project, index) => (
              <motion.article
                key={project.id}
                className="project-card"
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -8,
                }}
              >

                {/* Project Image */}
                <button
                  type="button"
                  className="project-card-image-wrapper"
                  onClick={() => openProject(project.id)}
                  aria-label={`View ${project.title}`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-card-image"
                  />
                </button>

                {/* Project Information */}
                <div className="project-card-body">

                  {/* Category */}
                  <span className="project-card-category">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="project-card-title">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="project-card-description">
                    {project.description}
                  </p>

                  {/* Bottom Section */}
                  <div className="project-card-footer">

                    {/* Technology Pills */}
                    <div className="project-card-tech">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="project-tech-pill"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    {/* Arrow Button */}
                    <button
                      type="button"
                      className="project-card-arrow"
                      onClick={() => openProject(project.id)}
                      aria-label={`Open ${project.title}`}
                    >
                      <HiOutlineArrowRight />
                    </button>

                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Existing Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={closeProject}
      />
    </>
  );
}