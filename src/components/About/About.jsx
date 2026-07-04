import { FaEnvelope, FaDownload } from "react-icons/fa";
import profileImg from "../../assets/profile.jpg";
import { social } from "../../data/social.js";
import { topSkills } from "../../data/skills.js";
import { useScrollReveal } from "../../hooks/useScrollReveal.js";
import "./About.css";

export default function About() {
  const revealRef = useScrollReveal();

  return (
    <section id="about" className="section about">
      <div className="about__glow glow-blob" aria-hidden="true" />
      <div className="container">
        <div ref={revealRef} className="reveal about__panel">
          <div className="about__text">
            <p className="eyebrow">// about</p>
            <h2 className="section-title">A little about me</h2>

            <p className="about__paragraph">
              Hey! I'm <strong>Rohit Kumar</strong>, a passionate{" "}
              <span className="about__highlight">Full Stack Developer</span>{" "}
              with 1+ year of experience building scalable ERP systems and production
              web applications. I specialize in using React.js, Vite, ASP.NET Core, C#,
              Node.js, and Microsoft SQL Server.
            </p>
            <p className="about__paragraph about__paragraph--muted">
              I am experienced in end-to-end product development, REST API development, frontend architecture,
              backend development, database design, deployment and hosting, production support,
              and performance optimization.
            </p>

            <blockquote className="about__quote mono">
              {"/* Code is like humor. When you have to explain it, it's bad. */"}
            </blockquote>

            <div className="about__skills">
              <h3 className="about__skills-title mono">Top skills</h3>
              <ul className="about__skills-list">
                {topSkills.map(({ name, Icon }) => (
                  <li key={name} className="about__skill-chip" title={name}>
                    <Icon aria-hidden="true" />
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="about__actions">
              <a href={`mailto:${social.email}`} className="btn btn-primary">
                <FaEnvelope /> Contact Me
              </a>
              <a href={social.resumeUrl} download className="btn btn-ghost">
                <FaDownload /> Download Resume
              </a>
            </div>
          </div>

          <div className="about__portrait">
            <img
              src={profileImg}
              alt="Rohit Kumar at his desk"
              loading="lazy"
              className="about__portrait-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
