import { memo } from "react";
import { skillGroups } from "../../data/skills.js";
import { useScrollReveal } from "../../hooks/useScrollReveal.js";
import "./Skills.css";

const SkillCategory = memo(function SkillCategory({ category, items, index }) {
  const revealRef = useScrollReveal();

  return (
    <div
      ref={revealRef}
      className={`reveal skills__card reveal-delay-${Math.min(index + 1, 4)}`}
    >
      <h3 className="skills__card-title mono">{category}</h3>
      <ul className="skills__grid">
        {items.map(({ name, Icon }) => (
          <li key={name} className="skills__item">
            <span className="skills__icon" aria-hidden="true">
              <Icon />
            </span>
            <span className="skills__name">{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default function Skills() {
  const headRef = useScrollReveal();

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div ref={headRef} className="reveal section-head">
          <p className="eyebrow">// tech stack</p>
          <h2 className="section-title">Skills &amp; tools</h2>
          <p className="section-subtitle">
            The languages, frameworks and tools I reach for most, organized
            by where they sit in the stack.
          </p>
        </div>

        <div className="skills__categories">
          {skillGroups.map((group, index) => (
            <SkillCategory
              key={group.category}
              category={group.category}
              items={group.items}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
