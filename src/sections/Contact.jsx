import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
  HiOutlineMail,
  HiOutlineLocationMarker,
} from "react-icons/hi";

import { CircleArrowRight } from "lucide-react";

import { portfolio } from "../data/portfolioData";
import SectionTitle from "../components/SectionTitle";

const inputStyle = {
  width: "100%",
  padding: "13px 16px",
  borderRadius: 14,
  border: "1px solid var(--surface-border)",
  background: "var(--input-bg)",
  color: "var(--text-primary)",
  fontSize: 14.5,
  outline: "none",
  fontFamily: "inherit",
};

export default function Contact() {
  const form = useRef();

  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);
    setError("");
    setSent(false);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setSent(true);

      // Clear form after successful submission
      form.current.reset();

      setTimeout(() => {
        setSent(false);
      }, 3500);
    } catch (error) {
      console.error("EmailJS Error:", error);

      setError("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const details = [
    {
      icon: <HiOutlineMail size={18} />,
      label: portfolio.email,
    },
    {
      icon: <HiOutlineLocationMarker size={18} />,
      label: portfolio.location,
    },
  ];

  return (
    <section
      id="contact"
      className="section"
      style={{ background: "var(--bg-alt)" }}
    >
      <div className="container">
        <SectionTitle
          eyebrow="Get In Touch"
          title="Let's Work"
          highlight="Together"
          subtitle="I'm always open to discussing new opportunities."
        />

        <div
          className="contact-grid glass"
          style={{
            display: "grid",
            gridTemplateColumns: "0.8fr 1.2fr",
            gap: 0,
            overflow: "hidden",
          }}
        >
          {/* CONTACT INFORMATION */}

          <div
            style={{
              padding: 44,
              background: "var(--accent-gradient)",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: 22,
                  color: "#fff",
                  marginBottom: 10,
                }}
              >
                Contact Information
              </h3>

              <p
                style={{
                  fontSize: 14,
                  opacity: 0.85,
                  lineHeight: 1.7,
                }}
              >
                Fill out the form and I&apos;ll get back to you.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 18,
                marginTop: 30,
              }}
            >
              {details.map((d) => (
                <div
                  key={d.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <span
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.18)",
                      display: "grid",
                      placeItems: "center",
                      flexShrink: 0,
                    }}
                  >
                    {d.icon}
                  </span>

                  <span style={{ fontSize: 14 }}>
                    {d.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CONTACT FORM */}

          <motion.form
            ref={form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.6,
            }}
            style={{
              padding: 44,
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 16,
                flexWrap: "wrap",
              }}
              className="form-row"
            >
              <input
                name="from_name"
                style={{
                  ...inputStyle,
                  flex: 1,
                  minWidth: 160,
                }}
                placeholder="Your Name"
                required
              />

              <input
                name="from_email"
                style={{
                  ...inputStyle,
                  flex: 1,
                  minWidth: 160,
                }}
                type="email"
                placeholder="Your Email"
                required
              />
            </div>

            <input
              name="subject"
              style={inputStyle}
              placeholder="Subject"
              required
            />

            <textarea
              name="message"
              style={{
                ...inputStyle,
                resize: "vertical",
              }}
              rows={5}
              placeholder="Your Message"
              required
            />

            <motion.button
              type="submit"
              disabled={sending}
              className="btn btn-primary"
              whileHover={{
                scale: sending ? 1 : 1.05,
              }}
              whileTap={{
                scale: sending ? 1 : 0.97,
              }}
              style={{
                alignSelf: "center",
                width: "fit-content",
                padding: "12px 28px",
                justifyContent: "center",
                marginTop: 6,
                opacity: sending ? 0.7 : 1,
                cursor: sending ? "not-allowed" : "pointer",
              }}
            >
              {sending
                ? "Sending..."
                : sent
                ? "Message Sent!"
                : "Send Message"}

              <CircleArrowRight size={17} />
            </motion.button>

            {sent && (
              <p
                style={{
                  color: "#22c55e",
                  textAlign: "center",
                  fontSize: 14,
                  margin: 0,
                }}
              >
                Your message has been sent successfully!
              </p>
            )}

            {error && (
              <p
                style={{
                  color: "#ef4444",
                  textAlign: "center",
                  fontSize: 14,
                  margin: 0,
                }}
              >
                {error}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}