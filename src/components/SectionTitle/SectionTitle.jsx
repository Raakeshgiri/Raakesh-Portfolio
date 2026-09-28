import styles from "./SectionTitle.module.css";
import { motion } from "framer-motion";

export default function SectionTitle({ eyebrow, title, highlight, subtitle }) {
  return (
    <motion.div
      className={styles["section-head"]}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2>
        {title} {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className={styles["section-subtitle"]}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
