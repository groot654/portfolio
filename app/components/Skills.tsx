import type { ReactNode } from "react";

type Category = { title: string; icon: ReactNode; tags: string[]; delay?: 1 | 2 };

const I = (children: ReactNode): ReactNode => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

const categories: Category[] = [
  {
    title: "Languages",
    icon: I(<path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />),
    tags: ["Python", "C#", "SQL", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "AI / ML & Vision",
    icon: I(
      <>
        <path d="M12 2a4 4 0 0 0-4 4 4 4 0 0 0 0 8 4 4 0 0 0 8 0 4 4 0 0 0 0-8 4 4 0 0 0-4-4z" />
        <path d="M12 6v12" />
      </>
    ),
    delay: 1,
    tags: ["PyTorch", "TensorFlow", "scikit-learn", "OpenCV", "NumPy", "Pandas"],
  },
  {
    title: "LLMs & GenAI",
    icon: I(
      <>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14a9 3 0 0 0 18 0V5M3 12a9 3 0 0 0 18 0" />
      </>
    ),
    delay: 2,
    tags: ["LangChain", "Prompt Engineering", "Agents", "RAG", "Vector Databases", "Embeddings", "OpenAI API"],
  },
  {
    title: "Backend",
    icon: I(
      <>
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <path d="M6 6h.01M6 18h.01" />
      </>
    ),
    tags: ["FastAPI", "REST APIs", "OOP", "Database Design"],
  },
  {
    title: "Tooling & DevOps",
    icon: I(
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    ),
    delay: 1,
    tags: ["Git", "GitHub", "Docker", "VS Code", "Linux"],
  },
  {
    title: "Spoken",
    icon: I(
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </>
    ),
    delay: 2,
    tags: ["Urdu — Native", "English — Fluent", "Chinese — HSK 3"],
  },
];

export default function Skills() {
  return (
    <section className="section-pad" id="skills">
      <div className="wrap">
        <div className="s-head reveal">
          <span className="s-eyebrow">Skills</span>
          <h2 className="s-title">My toolkit</h2>
          <p className="s-sub">
            The languages, frameworks, and infrastructure I reach for when building reliable AI
            systems.
          </p>
        </div>
        <div className="skills-grid">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="skill-cat reveal"
              {...(cat.delay ? { "data-delay": String(cat.delay) } : {})}
            >
              <h3>
                <span className="skill-ico">{cat.icon}</span> {cat.title}
              </h3>
              <div className="tags">
                {cat.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
