import type { CSSProperties } from "react";
import HeroGlobe from "./HeroGlobe";

// Per-word stagger delay consumed by the .reveal-word CSS transition.
const d = (delay: string): CSSProperties => ({ ["--d"]: delay } as CSSProperties);

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-blobs">
        <span className="blob b1" />
        <span className="blob b2" />
        <span className="blob b3" />
      </div>

      <div className="hero-left">
        <span className="hero-eyebrow">
          <span className="status-dot" /> Available for opportunities
        </span>
        <h1>
          <span className="reveal-word" style={d(".05s")}>Hi,</span>{" "}
          <span className="reveal-word" style={d(".13s")}>I&apos;m</span>{" "}
          <span className="reveal-word" style={d(".21s")}>Rauf.</span>
          <br />
          <span className="reveal-word" style={d(".32s")}>I</span>{" "}
          <span className="reveal-word" style={d(".4s")}>build</span>{" "}
          <span className="reveal-word accent" style={d(".48s")}>AI-powered</span>{" "}
          <span className="reveal-word" style={d(".56s")}>systems.</span>
        </h1>
        <p className="hero-sub">
          <strong>ML engineer</strong> and Python developer with a Master&apos;s in Software
          Engineering — I build applications and solve real problems with large language models,
          from retrieval-augmented systems to full LLM-powered products.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
            View my work
          </a>
          <a className="btn btn-ghost" href="#contact">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m22 7-10 7L2 7" />
            </svg>
            Say hello
          </a>
        </div>
      </div>

      <div className="hero-right">
        <HeroGlobe />
      </div>

      <div className="scroll-hint">
        <span className="mouse" /> SCROLL
      </div>
    </header>
  );
}
