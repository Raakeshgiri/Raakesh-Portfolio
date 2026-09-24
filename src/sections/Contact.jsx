import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  HiOutlineMail, HiOutlineLocationMarker, HiOutlineUser,
  HiOutlineDocumentText, HiOutlineChatAlt2,
} from "react-icons/hi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { ArrowUpRight, Send, LoaderCircle, Check } from "lucide-react";
import { portfolio } from "../data/portfolioData";

// Add your actual LinkedIn URL here, or set portfolio.linkedin in portfolioData.js.
const LINKEDIN_URL = "https://www.linkedin.com/in/raakesh-ga/";

export default function Contact() {
  const form = useRef(null);
  const busy = useRef(false);
  const mounted = useRef(true);
  const successTimer = useRef(null);
  const reduceMotion = useReducedMotion();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
      clearTimeout(successTimer.current);
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (busy.current) return;
    const currentForm = form.current;
    if (!currentForm || !currentForm.reportValidity()) return;
    busy.current = true;
    clearTimeout(successTimer.current);
    setSending(true);
    setError("");
    setSent(false);

    try {
      // Keep the same template, environment variables and field names as before.
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        currentForm,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      if (!mounted.current) return;
      currentForm.reset();
      setSent(true);
      successTimer.current = setTimeout(() => {
        if (mounted.current) setSent(false);
      }, 3500);
    } catch (sendError) {
      console.error("EmailJS Error:", sendError);
      if (mounted.current) setError("Failed to send message. Please try again.");
    } finally {
      busy.current = false;
      if (mounted.current) setSending(false);
    }
  };

  const linkedin = portfolio.linkedin || LINKEDIN_URL;
  const details = [
    { title: "Email", value: portfolio.email, icon: HiOutlineMail,
      href: `mailto:${portfolio.email}` },
    { title: "LinkedIn", value: "Let’s connect", icon: FaLinkedinIn,
      href: linkedin, external: true },
    { title: "GitHub", value: "Raakeshgiri", icon: FaGithub,
      href: portfolio.github || "https://github.com/Raakeshgiri", external: true },
    { title: "Location", value: portfolio.location, icon: HiOutlineLocationMarker,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(portfolio.location)}`,
      external: true },
  ];
  const reveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: reduceMotion ? 0 : 0.55 },
  };

  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-title">
      <div className="container contact-container">
        <div className="contact-layout">
          <motion.div className="contact-copy" {...reveal}>
            <span className="eyebrow">Get In Touch</span>
            <h2 id="contact-title" className="contact-title">
              Let’s Build<br />Something <span className="text-gradient">Together</span>
            </h2>
            <p className="contact-description">
              I’m always open to discussing new opportunities, interesting projects,
              or just a chat about technology. Feel free to reach out!
            </p>
            <div className="contact-cards">
              {details.map(({ title, value, icon: Icon, href, external }) => {
                const Tag = href ? "a" : "div";
                return (
                  <Tag key={title} className="contact-card"
                    {...(href ? { href, ...(external ? { target: "_blank", rel: "noopener noreferrer" } : {}) } : {})}>
                    <span className="contact-card-icon"><Icon aria-hidden="true" /></span>
                    <span className="contact-card-copy">
                      <span className="contact-card-title">{title}</span>
                      <span className="contact-card-value">{value}</span>
                    </span>
                    {href && <ArrowUpRight className="contact-card-arrow" size={19} aria-hidden="true" />}
                  </Tag>
                );
              })}
            </div>
            <p className="contact-quote">“Let’s turn ideas<br />into real-world solutions”</p>
          </motion.div>

          <motion.form ref={form} onSubmit={handleSubmit} className="contact-form-panel"
            aria-labelledby="contact-form-title" aria-busy={sending} {...reveal}>
            <div className="contact-form-heading">
              <span className="contact-form-icon"><HiOutlineMail aria-hidden="true" /></span>
              <div>
                <h3 id="contact-form-title">Send Me a Message</h3>
                <p>I’ll get back to you as soon as possible.</p>
              </div>
            </div>
            <div className="contact-fields-row">
              <label className="contact-field">
                <span className="contact-sr-only">Your Name</span>
                <HiOutlineUser aria-hidden="true" />
                <input name="from_name" autoComplete="name" placeholder="Your Name" required readOnly={sending} />
              </label>
              <label className="contact-field">
                <span className="contact-sr-only">Your Email</span>
                <HiOutlineMail aria-hidden="true" />
                <input name="from_email" type="email" autoComplete="email" placeholder="Your Email" required readOnly={sending} />
              </label>
            </div>
            <label className="contact-field">
              <span className="contact-sr-only">Subject</span>
              <HiOutlineDocumentText aria-hidden="true" />
              <input name="subject" placeholder="Subject" required readOnly={sending} />
            </label>
            <label className="contact-field contact-message-field">
              <span className="contact-sr-only">Your Message</span>
              <HiOutlineChatAlt2 aria-hidden="true" />
              <textarea name="message" rows={6} placeholder="Your Message" required readOnly={sending} />
            </label>
            <button type="submit" disabled={sending} className="contact-submit">
              {sending ? "Sending..." : sent ? "Message Sent!" : "Send Message"}
              {sending ? <LoaderCircle size={20} className="contact-spinner" aria-hidden="true" />
                : sent ? <Check size={20} aria-hidden="true" /> : <Send size={20} aria-hidden="true" />}
            </button>
            <div className="contact-status" role="status" aria-live="polite" aria-atomic="true">
              {sent && <p className="contact-success">Your message has been sent successfully!</p>}
              {error && <p className="contact-error">{error}</p>}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}