type Metric = { num: string; lbl: string };
type Link = { label: string; href: string; kind: "code" | "live" };
type Project = {
  idx: string;
  title: string;
  badge?: string;
  body: string;
  metrics?: Metric[];
  tags: string[];
  links: Link[];
};

const GH = "https://github.com/groot654";

const projects: Project[] = [
  {
    idx: "01",
    title: "LLM-Powered Document Q&A",
    badge: "flagship",
    body:
      "An end-to-end, production-ready LLM application built at Musketeer Tech. A FastAPI backend orchestrates LangChain to answer questions over private documents — using retrieval-augmented generation for grounded, citation-backed responses, plus Python utilities for ingestion and preprocessing.",
    tags: ["FastAPI", "LangChain", "Vector DB", "Python"],
    links: [{ label: "Code", href: GH, kind: "code" }],
  },
  {
    idx: "02",
    title: "Self-Supervised Time-Series Model",
    body:
      "A research project at Hohai University improving domain adaptation for time-series classification with a novel self-supervised pretraining approach, conducted as a Research Assistant.",
    metrics: [
      { num: "+10%", lbl: "accuracy" },
      { num: "15%", lbl: "faster training" },
    ],
    tags: ["PyTorch", "scikit-learn", "NumPy", "Pandas"],
    links: [{ label: "Code", href: GH, kind: "code" }],
  },
  {
    idx: "03",
    title: "Vehicle Analytics System",
    body:
      "A computer-vision system for real-time vehicle detection and analytics, built during my undergraduate studies at GCU Faisalabad — live video processing with an object-tracking and analytics pipeline.",
    metrics: [
      { num: "90%", lbl: "detection accuracy" },
      { num: "real-time", lbl: "video processing" },
    ],
    tags: ["OpenCV", "Python", "Computer Vision"],
    links: [{ label: "Code", href: GH, kind: "code" }],
  },
];

function LinkIcon({ kind }: { kind: Link["kind"] }) {
  if (kind === "code") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6M10 14 21 3" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section className="section-pad" id="projects">
      <div className="wrap">
        <div className="s-head reveal">
          <span className="s-eyebrow">Work</span>
          <h2 className="s-title">Selected projects</h2>
          <p className="s-sub">A few things I&apos;ve built — across LLM applications, applied ML, and computer vision.</p>
        </div>
        <div className="projects">
          {projects.map((p) => (
            <article className="project reveal" key={p.idx}>
              <div className="project-main">
                <div className="project-tt">
                  <span className="project-idx">{p.idx}</span>
                  <h3>{p.title}</h3>
                  {p.badge && <span className="badge">{p.badge}</span>}
                </div>
                <p>{p.body}</p>
                {p.metrics && (
                  <div className="project-meta">
                    {p.metrics.map((m) => (
                      <div className="metric" key={m.lbl}>
                        <div className="num">{m.num}</div>
                        <div className="lbl">{m.lbl}</div>
                      </div>
                    ))}
                  </div>
                )}
                <div className="tags">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-links">
                {p.links.map((l) => (
                  <a className="plink" href={l.href} target="_blank" rel="noopener noreferrer" key={l.label}>
                    <LinkIcon kind={l.kind} /> {l.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
