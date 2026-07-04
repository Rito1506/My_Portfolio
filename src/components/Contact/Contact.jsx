import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from "react-icons/fa";
import { social } from "../../data/social.js";
import { useScrollReveal } from "../../hooks/useScrollReveal.js";
import "./Contact.css";

export default function Contact() {
  const revealRef = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ""}`
    );
    window.location.href = `mailto:${social.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section contact">
      <div className="contact__glow glow-blob" aria-hidden="true" />
      <div className="container">
        <div ref={revealRef} className="reveal contact__grid">
          <div className="contact__intro">
            <p className="eyebrow">// get in touch</p>
            <h2 className="section-title">Let's connect</h2>
            <p className="section-subtitle">
              Want to collaborate or just say hi? I'm always open to new
              opportunities and creative ideas.
            </p>

            <ul className="contact__list">
              <li>
                <a href={`mailto:${social.email}`} className="contact__link">
                  <span className="icon-btn" aria-hidden="true">
                    <FaEnvelope />
                  </span>
                  {social.email}
                </a>
              </li>
              <li>
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__link"
                >
                  <span className="icon-btn" aria-hidden="true">
                    <FaGithub />
                  </span>
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__link"
                >
                  <span className="icon-btn" aria-hidden="true">
                    <FaLinkedin />
                  </span>
                  LinkedIn
                </a>
              </li>
            </ul>

            <a href={social.resumeUrl} download className="btn btn-ghost contact__resume">
              <FaFileDownload /> Download Resume
            </a>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="contact__field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary contact__submit">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
