import type { ReactNode } from "react";

type Achievement = { icon: ReactNode; title: string; body: string; meta: string; delay?: 1 | 2 };

const I = (children: ReactNode): ReactNode => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

const achievements: Achievement[] = [
  {
    icon: I(
      <>
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </>
    ),
    title: "Self-supervised research result",
    body: "Improved time-series classification accuracy by 10% while cutting training time by 15% with a novel pretraining approach.",
    meta: "Hohai University · 2025",
  },
  {
    icon: I(
      <>
        <path d="M12 2 2 7l10 5 10-5-10-5z" />
        <path d="m2 17 10 5 10-5M2 12l10 5 10-5" />
      </>
    ),
    title: "Real-time vehicle analytics",
    body: "Built a computer-vision system reaching 90% accuracy in real-time vehicle detection as my undergraduate capstone.",
    meta: "GCU Faisalabad · 2022",
    delay: 1,
  },
  {
    icon: I(
      <>
        <path d="M14 9V5a3 3 0 0 0-6 0v4" />
        <rect x="2" y="9" width="20" height="12" rx="2" />
      </>
    ),
    title: "Production LLM application",
    body: "Shipped an end-to-end, production-ready LLM-powered document Q&A application during my internship.",
    meta: "Musketeer Tech · 2026",
    delay: 2,
  },
  {
    icon: I(
      <>
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </>
    ),
    title: "Mandarin proficiency",
    body: "Reached HSK Level 3 in Mandarin Chinese while completing my graduate studies in Nanjing.",
    meta: "HSK · 2025",
  },
];

export default function Achievements() {
  return (
    <section className="section-pad" id="achievements">
      <div className="wrap">
        <div className="s-head reveal">
          <span className="s-eyebrow">Recognition</span>
          <h2 className="s-title">Achievements</h2>
        </div>
        <div className="ach-grid">
          {achievements.map((a) => (
            <div
              key={a.title}
              className="ach reveal"
              {...(a.delay ? { "data-delay": String(a.delay) } : {})}
            >
              <div className="ach-icon">{a.icon}</div>
              <h4>{a.title}</h4>
              <p>{a.body}</p>
              <div className="ach-meta">{a.meta}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
