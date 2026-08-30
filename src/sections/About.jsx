import { motion } from "framer-motion";
import {
  HiOutlineCalendar,
  HiOutlineCodeBracket,
  HiOutlineCpuChip,
  HiOutlineTrophy,
} from "react-icons/hi2";
import { portfolio } from "../data/portfolioData";

const icons = [
  <HiOutlineCalendar size={20} />,
  <HiOutlineCodeBracket size={20} />,
  <HiOutlineCpuChip size={20} />,
  <HiOutlineTrophy size={20} />,
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">About Me</span>
            <h2 style={{ fontSize: "clamp(26px, 3.4vw, 34px)", marginBottom: 18 }}>
              Designing with focus,
              <br />
              <span className="text-gradient">building with purpose.</span>
            </h2>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: 15.5 }}>
              {portfolio.about}
            </p>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
            {portfolio.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="glass"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                style={{ padding: "26px 20px" }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    background: "var(--accent-gradient-soft)",
                    color: "var(--accent-500)",
                    display: "grid",
                    placeItems: "center",
                    marginBottom: 14,
                  }}
                >
                  {icons[i]}
                </div>
                <div style={{ fontFamily: "Sora", fontSize: 26, fontWeight: 700 }}>{stat.value}</div>
                <div style={{ color: "var(--text-secondary)", fontSize: 13.5, marginTop: 4 }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
