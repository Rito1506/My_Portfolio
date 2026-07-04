import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { social } from "../../data/social.js";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">© {year} Rohit Kumar. All rights reserved.</p>

        <div className="footer__socials">
          <a
            href={`mailto:${social.email}`}
            className="icon-btn"
            aria-label="Email Rohit Kumar"
          >
            <FaEnvelope />
          </a>
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="GitHub profile"
          >
            <FaGithub />
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin />
          </a>
        </div>

        <p className="footer__built mono">Built with React + Vite</p>
      </div>
    </footer>
  );
}
