import { motion } from "framer-motion";
import { portfolio } from "../data/portfolioData";
import SectionTitle from "../components/SectionTitle";

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ background: "var(--bg-alt)" }}>
      <div className="container">
        <SectionTitle
          eyebrow="My Skills"
          title="Technologies I"
          highlight="Master"
          subtitle="Tools and languages I use to design, build and ship products end to end."
        />

        <div
          className="skills-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "28px 48px" }}
        >
          {portfolio.skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: 14.5 }}>
                <span style={{ fontWeight: 600 }}>{skill.name}</span>
                <span style={{ color: "var(--text-secondary)" }}>{skill.level}%</span>
              </div>
              <div
                style={{
                  height: 8,
                  borderRadius: 100,
                  background: "var(--surface-border)",
                  overflow: "hidden",
                }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                  style={{ height: "100%", borderRadius: 100, background: "var(--accent-gradient)" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
