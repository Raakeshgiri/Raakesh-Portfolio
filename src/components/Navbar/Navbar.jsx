import { bindStyles } from "../../utils/bindStyles";
import styles from "./Navbar.module.css";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  HiOutlineMenu,
  HiOutlineX,
} from "react-icons/hi";

import { portfolio } from "../../data/portfolioData";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const classes = bindStyles(styles);

export default function Navbar() {
  const headerRef = useRef(null);
  const menuButtonRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  // Links, including Experience and Journey, are supplied by portfolio.nav.
  // Keep the selected tab in sync with the section visible below the header.
  useEffect(() => {
    let frame = 0;
    const updateActive = () => {
      frame = 0;
      const sections = portfolio.nav
        .map((item) => document.getElementById(item.toLowerCase()))
        .filter(Boolean);
      if (!sections.length) return;
      const header = document.querySelector(`.${styles.navbar}`);
      const threshold = (header?.getBoundingClientRect().bottom || 100) + 48;
      let current = sections[0].id;
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= threshold) current = section.id;
      });
      if (window.scrollY > 0 && window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 4) {
        current = sections[sections.length - 1].id;
      }
      setActiveTab(current);
    };
    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActive);
    };
    updateActive();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
    };
  }, []);

  // Detect page scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Close the dropdown on outside clicks, Escape, or a desktop resize.
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) setOpen(false);
    };
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const onResize = () => {
      if (menuButtonRef.current &&
          window.getComputedStyle(menuButtonRef.current).display === "none") {
        setOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header
      ref={headerRef}
      className={`${styles["navbar"]} ${styles["navbar-layout"]}`}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      style={{ padding: scrolled ? "12px 0" : "22px 0" }}
    >
      <div
        className={`container ${styles["navbar-dropdown-anchor"]} ${styles["navbar-container"]}`}
      >
        <div
          className={`glass navbar-inner ${styles["navbar-inner-layout"]}`}
        >
          {/* Logo / Name */}
          <a
            href="#home"
            className={`navbar-brand ${styles["navbar-brand-layout"]}`}
            onClick={() => setOpen(false)}
          >
            <span
              className={styles["navbar-monogram"]}
            >
              {portfolio.name.charAt(0)}
            </span>

            <span>{portfolio.name}</span>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className={`${styles["nav-links"]} ${styles["navbar-links-layout"]}`}
          >
            {portfolio.nav.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={classes(`nav-link${activeTab === item.toLowerCase() ? " is-active" : ""}`)}
                aria-current={activeTab === item.toLowerCase() ? "location" : undefined}
                onClick={() => setActiveTab(item.toLowerCase())}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div
            className={`navbar-actions ${styles["navbar-actions-layout"]}`}
          >
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Desktop Contact Button */}
            <a
              href="#contact"
              className={`btn btn-primary ${styles["nav-cta"]}`}
            >
              Let&apos;s Talk
            </a>

            {/* Mobile Menu Button */}
            <button
              className={`icon-btn ${styles["mobile-toggle"]} ${styles["navbar-menu-button"]}`}
              ref={menuButtonRef}
              type="button"
              onClick={() => setOpen((previous) => !previous)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
            >
              {open ? (
                <HiOutlineX size={20} color="currentColor" className={styles["navbar-close-icon"]} />
              ) : (
                <HiOutlineMenu size={20} color="currentColor" className={styles["navbar-menu-icon"]} />
              )}
            </button>
          </div>
        </div>
        {/* Floating mobile menu beneath the existing navbar. */}
        <AnimatePresence>
          {open && (
            <motion.nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              className={styles["mobile-dropdown-panel"]}
              initial={reduceMotion ? false : { opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: reduceMotion ? 0 : 0.2 }}
            >
              <ul className={styles["mobile-dropdown-list"]}>
                {portfolio.nav.map((item) => {
                  const id = item.toLowerCase();
                  const isActive = activeTab === id;
                  return (
                    <li key={item}>
                      <a
                        href={`#${id}`}
                        className={classes(`mobile-dropdown-link${isActive ? " is-active" : ""}`)}
                        aria-current={isActive ? "location" : undefined}
                        onClick={() => {
                          setActiveTab(id);
                          setOpen(false);
                          menuButtonRef.current?.focus({ preventScroll: true });
                        }}
                      >
                        <span>{item}</span>
                        <span className={styles["mobile-dropdown-dot"]} aria-hidden="true" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
