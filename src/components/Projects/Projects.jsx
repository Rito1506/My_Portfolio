import { memo } from "react";
import { FaGithub, FaBuilding, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../../data/projects.js";
import { useScrollReveal } from "../../hooks/useScrollReveal.js";
import "./Projects.css";

const ProjectCard = memo(function ProjectCard({ project, index }) {
  const revealRef = useScrollReveal();

  return (
    <article
      ref={revealRef}
      className={`reveal projects__card reveal-delay-${Math.min((index % 4) + 1, 4)}`}
    >
      <h3 className="projects__title">{project.title}</h3>
      <p className="projects__description">{project.description}</p>

      <ul className="projects__tech">
        {project.tech.map((tech) => (
          <li key={tech} className="tag">
            {tech}
          </li>
        ))}
      </ul>

      <div className="projects__links">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="projects__link"
        >
          {project.isWork ? <FaBuilding /> : <FaGithub />}
          {project.isWork ? "Company Repo" : "View Code"}
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="projects__link"
          >
            <FaExternalLinkAlt /> Live Demo
          </a>
        )}
      </div>
    </article>
  );
});

export default function Projects() {
  const headRef = useScrollReveal();

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div ref={headRef} className="reveal section-head">
          <p className="eyebrow">// selected work</p>
          <h2 className="section-title">Featured projects</h2>
          <p className="section-subtitle">
            A mix of professional work and personal builds spanning full
            stack apps, DApps and UI experiments.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
