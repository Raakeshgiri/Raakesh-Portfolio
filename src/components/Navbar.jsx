import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Detect page scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Disable page scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className="navbar"
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
        className="container"
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
                className="nav-link"
                style={{
                  padding: "8px 14px",

                  borderRadius: 100,

                  fontSize: 14.5,
                  fontWeight: 500,

                  color: "var(--text-secondary)",
                }}
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
              onClick={() => setOpen(true)}
              aria-label="Open menu"
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
              <HiOutlineMenu
                size={20}
                color="currentColor"
                style={{
                  display: "block",
                }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className="mobile-menu"
            style={{
              position: "fixed",
              inset: 0,

              background: "var(--bg)",

              zIndex: 200,

              display: "flex",
              flexDirection: "column",

              padding: 24,
            }}
          >
            {/* Mobile Menu Top */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {/* Mobile Logo */}
              <a
                href="#home"
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
                  }}
                >
                  {portfolio.name.charAt(0)}
                </span>

                {portfolio.name}
              </a>

              {/* Close Menu */}
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="icon-btn"
                style={{
                  width: 40,
                  height: 40,

                  padding: 0,

                  borderRadius: "50%",

                  display: "grid",
                  placeItems: "center",

                  background: "var(--surface)",

                  border: "1px solid var(--surface-border)",

                  color: "var(--text-primary)",

                  cursor: "pointer",
                }}
              >
                <HiOutlineX
                  size={21}
                  color="currentColor"
                  style={{
                    display: "block",
                  }}
                />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",

                gap: 6,

                marginTop: 40,
              }}
            >
              {portfolio.nav.map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  initial={{
                    opacity: 0,
                    x: 30,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: i * 0.06,
                  }}
                  style={{
                    fontFamily: "Sora",

                    fontSize: 18,
                    fontWeight: 600,

                    padding: "14px 4px",

                    color: "var(--text-primary)",

                    borderBottom:
                      "1px solid var(--surface-border)",
                  }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}