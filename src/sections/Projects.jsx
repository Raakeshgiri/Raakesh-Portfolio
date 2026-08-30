import { motion } from "framer-motion";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { portfolio } from "../data/portfolioData";
import SectionTitle from "../components/SectionTitle";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Featured Projects"
          title="Some of My"
          highlight="Recent Work"
          subtitle="A few products I designed and built from the ground up."
        />

        <div
          className="projects-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 26 }}
        >
          {portfolio.projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              className="glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              style={{ overflow: "hidden", display: "block" }}
            >
              <div
                style={{
                  aspectRatio: "16/11",
                  background: "var(--accent-gradient)",
                  position: "relative",
                  display: "grid",
                  placeItems: "center",
                  color: "rgba(255,255,255,0.85)",
                  fontFamily: "Sora",
                  fontSize: 40,
                  fontWeight: 700,
                }}
              >
                {project.number}
              </div>
              <div style={{ padding: "22px 22px 26px" }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: "var(--accent-500)", letterSpacing: "0.04em" }}>
                  {project.category.toUpperCase()}
                </span>
                <h3 style={{ fontSize: 19, margin: "8px 0 8px", display: "flex", alignItems: "center", gap: 6 }}>
                  {project.title}
                  <HiOutlineArrowUpRight size={16} style={{ color: "var(--text-secondary)" }} />
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.6 }}>
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
