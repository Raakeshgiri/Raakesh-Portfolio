import { motion } from "framer-motion";
import { HiOutlineArrowUpRight, HiOutlineArrowDown } from "react-icons/hi2";
import { portfolio } from "../data/portfolioData";

export default function Hero() {
  return (
    <section
      id="home"
      className="section"
      style={{ paddingTop: 170, minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}
    >
      <div className="blob" style={{ width: 420, height: 420, background: "var(--blob-1)", top: -80, left: -120 }} />
      <div
        className="blob"
        style={{ width: 340, height: 340, background: "var(--blob-2)", top: 120, right: -100, animationDelay: "2s" }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 40,
            alignItems: "center",
          }}
          className="hero-grid"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="eyebrow">{portfolio.eyebrow}</span>
            <h1 style={{ fontSize: "clamp(38px, 5.4vw, 62px)", fontWeight: 700 }}>
              {portfolio.name}
            </h1>
            <h2
              className="text-gradient"
              style={{ fontSize: "clamp(20px, 2.6vw, 28px)", fontWeight: 600, marginTop: 6 }}
            >
              {portfolio.role}
            </h2>
            <p style={{ color: "var(--text-secondary)", marginTop: 20, maxWidth: 460, lineHeight: 1.7, fontSize: 15.5 }}>
              {portfolio.intro}
            </p>

            <div style={{ display: "flex", gap: 14, marginTop: 34, flexWrap: "wrap" }}>
              <a href="#projects" className="btn btn-primary">
                View My Work <HiOutlineArrowUpRight />
              </a>
              <a href="/resume.pdf" download= "Raakesh_Resume" className="btn btn-ghost">
                Download CV
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            style={{ position: "relative", display: "flex", justifyContent: "center" }}
          >
            <div
              className="glass"
              style={{
                width: "100%",
                maxWidth: 340,
                aspectRatio: "3/3.4",
                overflow: "hidden",
                position: "relative",
                padding: 8,
              }}
            >
              {portfolio.profileImage ? (
                <img
                src={portfolio.profileImage}
                alt={portfolio.name}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 18,
                  objectFit: "cover",
                  display: "block",
                }}
                />
              ) : (
              <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 18,
                background: "var(--accent-gradient)",
                display: "grid",
                placeItems: "center",
                color: "#fff",
                fontFamily: "Sora",
                fontSize: 54,
                fontWeight: 700,
              }}
              >
                {portfolio.name.charAt(0)}
                </div>
              )}
            </div>

            <motion.div
              className="glass"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              style={{
                position: "absolute",
                top: 10,
                right: -10,
                padding: "12px 16px",
                textAlign: "center",
              }}
            >
              <div className="text-gradient" style={{ fontFamily: "Sora", fontWeight: 700, fontSize: 20 }}>
                {portfolio.stats[0].value}
              </div>
              <div style={{ fontSize: 11, color: "var(--text-secondary)" }}>
                {portfolio.stats[0].label}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        style={{
          position: "absolute",
          bottom: 30,
          left: "50%",
          transform: "translateX(-50%)",
          color: "var(--text-muted)",
        }}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
      >
        <HiOutlineArrowDown size={20} />
      </motion.a>
    </section>
  );
}
