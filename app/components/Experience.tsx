type Entry = {
  date: string;
  role: string;
  org: string;
  current?: boolean;
  bullets?: string[];
  detail?: string;
};

const work: Entry[] = [
  {
    date: "Jan 2026 — May 2026",
    role: "Artificial Intelligence Intern",
    org: "Musketeer Tech",
    current: true,
    bullets: [
      "Built end-to-end LLM applications with FastAPI and LangChain — including a production document Q&A system using retrieval-augmented generation.",
      "Built Python utilities for data preprocessing, prompting, and API integration.",
      "Tuned LLM output quality — retrieval, chunking, and grounded, dependable responses.",
    ],
  },
  {
    date: "2024 — 2025",
    role: "Research Assistant",
    org: "Hohai University",
    detail:
      "Built a self-supervised learning model for time-series classification, improving accuracy by 10% and cutting training time by 15% through better domain adaptation.",
  },
];

const education: Entry[] = [
  {
    date: "2022 — 2025",
    role: "M.S. — Software Engineering",
    org: "Hohai University · Nanjing, China",
    detail:
      "Specialized in machine learning and computer vision, with a research focus on self-supervised learning for time-series data.",
  },
  {
    date: "2018 — 2022",
    role: "B.S. — Computer Science",
    org: "GCU Faisalabad, Pakistan",
    detail:
      "Built a computer-vision vehicle analytics system achieving 90% accuracy in real-time detection.",
  },
];

function Timeline({ items }: { items: Entry[] }) {
  return (
    <div className="timeline">
      {items.map((it) => (
        <div className={`tl-item${it.current ? " current" : ""}`} key={it.role + it.org}>
          <div className="tl-date">{it.date}</div>
          <div className="tl-role">{it.role}</div>
          <div className="tl-org">{it.org}</div>
          {it.bullets ? (
            <ul className="tl-desc">
              {it.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          ) : (
            <div className="tl-desc">{it.detail}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Experience() {
  return (
    <section className="section-pad" id="experience">
      <div className="wrap">
        <div className="s-head reveal">
          <span className="s-eyebrow">Journey</span>
          <h2 className="s-title">Experience &amp; education</h2>
        </div>
        <div className="split">
          <div className="reveal">
            <div className="sub-head">
              <span className="si">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </span>{" "}
              Work
            </div>
            <Timeline items={work} />
          </div>
          <div className="reveal" data-delay="1">
            <div className="sub-head">
              <span className="si">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10 12 5 2 10l10 5 10-5z" />
                  <path d="M6 12v5c0 1 2.5 3 6 3s6-2 6-3v-5" />
                </svg>
              </span>{" "}
              Education
            </div>
            <Timeline items={education} />
          </div>
        </div>
      </div>
    </section>
  );
}
