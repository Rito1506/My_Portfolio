import { memo } from "react";
import { timeline } from "../../data/timeline.js";
import { useScrollReveal } from "../../hooks/useScrollReveal.js";
import "./Timeline.css";

const TimelineEntry = memo(function TimelineEntry({ entry, index, isLast }) {
  const revealRef = useScrollReveal();
  const { Icon } = entry;

  return (
    <li
      ref={revealRef}
      className={`reveal timeline__entry reveal-delay-${Math.min(index + 1, 4)}`}
    >
      <div className="timeline__rail">
        <span className="timeline__node">
          <Icon aria-hidden="true" />
        </span>
        {!isLast && <span className="timeline__line" aria-hidden="true" />}
      </div>

      <div className="timeline__card">
        <p className="timeline__commit mono">
          <span className="timeline__hash">{entry.hash}</span>
          <span className="timeline__branch">
            {entry.type === "work" ? "origin/career" : "origin/education"}
          </span>
        </p>
        <h3 className="timeline__title">{entry.title}</h3>
        <p className="timeline__org">{entry.org}</p>
        <p className="timeline__date mono">{entry.date}</p>
        <p className="timeline__desc">{entry.description}</p>
      </div>
    </li>
  );
});

export default function Timeline() {
  const headRef = useScrollReveal();

  return (
    <section id="experience" className="section timeline">
      <div className="container">
        <div ref={headRef} className="reveal section-head">
          <p className="eyebrow">// git log --oneline</p>
          <h2 className="section-title">Experience &amp; education</h2>
          <p className="section-subtitle">
            The commit history of my career so far, from classroom
            fundamentals to production code.
          </p>
        </div>

        <ol className="timeline__list">
          {timeline.map((entry, index) => (
            <TimelineEntry
              key={entry.id}
              entry={entry}
              index={index}
              isLast={index === timeline.length - 1}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
