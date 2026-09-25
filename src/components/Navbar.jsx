import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  HiOutlineSun,
  HiOutlineMoon,
  HiOutlineMenu,
  HiOutlineX,
} from "react-icons/hi";

import { portfolio } from "../data/portfolioData";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
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
      const header = document.querySelector(".navbar");
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
      className="navbar"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,

        padding: scrolled ? "12px 0" : "22px 0",

        transition: "padding 0.3s ease",
      }}
    >
      <div
        className="container navbar-dropdown-anchor"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          className="glass navbar-inner"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            width: "100%",

            padding: "10px 16px 10px 22px",

            background: "var(--nav-bg)",
          }}
        >
          {/* Logo / Name */}
          <a
            href="#home"
            className="navbar-brand"
            onClick={() => setOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,

              fontFamily: "Sora",
              fontWeight: 700,

              color: "var(--text-primary)",
            }}
          >
            <span
              style={{
                width: 34,
                height: 34,

                borderRadius: 10,

                background: "var(--accent-gradient)",

                display: "grid",
                placeItems: "center",

                color: "#ffffff",

                fontSize: 15,
                fontWeight: 700,

                flexShrink: 0,
              }}
            >
              {portfolio.name.charAt(0)}
            </span>

            <span>{portfolio.name}</span>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main navigation"
            className="nav-links"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            {portfolio.nav.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`nav-link${activeTab === item.toLowerCase() ? " is-active" : ""}`}
                aria-current={activeTab === item.toLowerCase() ? "location" : undefined}
                onClick={() => setActiveTab(item.toLowerCase())}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div
            className="navbar-actions"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="icon-btn theme-toggle"
              style={{
                width: 38,
                height: 38,

                padding: 0,

                borderRadius: "50%",

                display: "grid",
                placeItems: "center",

                background: "var(--surface)",

                border: "1px solid var(--surface-border)",

                color: "var(--text-primary)",

                cursor: "pointer",

                flexShrink: 0,
              }}
            >
              {theme === "light" ? (
                <HiOutlineMoon
                  size={18}
                  color="currentColor"
                />
              ) : (
                <HiOutlineSun
                  size={18}
                  color="currentColor"
                />
              )}
            </button>

            {/* Desktop Contact Button */}
            <a
              href="#contact"
              className="btn btn-primary nav-cta"
            >
              Let&apos;s Talk
            </a>

            {/* Mobile Menu Button */}
            <button
              className="icon-btn mobile-toggle"
              ref={menuButtonRef}
              type="button"
              onClick={() => setOpen((previous) => !previous)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              style={{
                width: 38,
                height: 38,

                padding: 0,

                borderRadius: "50%",

                placeItems: "center",

                background: "var(--surface)",

                border: "1px solid var(--surface-border)",

                color: "var(--text-primary)",

                cursor: "pointer",

                flexShrink: 0,
              }}
            >
              {open ? (
                <HiOutlineX size={20} color="currentColor" style={{ display: "block" }} />
              ) : (
                <HiOutlineMenu size={20} color="currentColor" style={{ display: "block" }} />
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
              className="mobile-dropdown-panel"
              initial={reduceMotion ? false : { opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: reduceMotion ? 0 : 0.2 }}
            >
              <ul className="mobile-dropdown-list">
                {portfolio.nav.map((item) => {
                  const id = item.toLowerCase();
                  const isActive = activeTab === id;
                  return (
                    <li key={item}>
                      <a
                        href={`#${id}`}
                        className={`mobile-dropdown-link${isActive ? " is-active" : ""}`}
                        aria-current={isActive ? "location" : undefined}
                        onClick={() => {
                          setActiveTab(id);
                          setOpen(false);
                          menuButtonRef.current?.focus({ preventScroll: true });
                        }}
                      >
                        <span>{item}</span>
                        <span className="mobile-dropdown-dot" aria-hidden="true" />
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