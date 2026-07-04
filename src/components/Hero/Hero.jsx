import { FaGithub, FaLinkedin } from "react-icons/fa";
import profileImg from "../../assets/profile.jpg";
import { social } from "../../data/social.js";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__glow glow-blob" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__window">
          <div className="hero__window-bar">
            <span className="hero__dot hero__dot--red" />
            <span className="hero__dot hero__dot--yellow" />
            <span className="hero__dot hero__dot--green" />
            <span className="hero__window-title mono">intro.jsx</span>
          </div>

          <div className="hero__content">
            <div className="hero__text">
              <p className="eyebrow">~/portfolio $ whoami</p>
              <h1 className="hero__name">Rohit Kumar</h1>
              <h2 className="hero__role mono">Full Stack Developer</h2>
              <p className="hero__tagline">
                Full Stack Developer | React.js | ASP.NET Core | C# | Node.js | SQL Server
              </p>

              <div className="hero__actions">
                <a href="#projects" className="btn btn-primary">
                  View Projects
                </a>
                <a href={social.resumeUrl} download className="btn btn-ghost">
                  Download Resume
                </a>
              </div>

              <div className="hero__socials">
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
            </div>

            <div className="hero__portrait">
              <div className="hero__portrait-ring" aria-hidden="true" />
              <img
                src={profileImg}
                alt="Portrait of Rohit Kumar"
                className="hero__portrait-img"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
