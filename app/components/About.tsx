function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function About() {
  return (
    <section className="section-pad" id="about">
      <div className="wrap">
        <div className="s-head reveal">
          <span className="s-eyebrow">About</span>
          <h2 className="s-title">A little about me</h2>
        </div>
        <div className="about-grid">
          <div className="reveal">
            <p className="about-lead">
              I&apos;m an engineer who likes the hard part of AI: turning large language models
              into products that are actually <span className="accent">useful and reliable</span>.
              Most of my work is building applications and solving real problems with LLMs.
            </p>
            <div className="about-body">
              <p>
                After a Master&apos;s in Software Engineering, I worked as a Research Assistant at
                Hohai University on self-supervised learning for time-series, then joined Musketeer
                Tech, where I build LLM-powered applications end to end — designing the workflow,
                wiring up retrieval and tools, and shipping grounded, dependable results.
                Retrieval-augmented generation (RAG) is one piece of that; the focus is solving the
                problem in front of me with whatever the right approach is.
              </p>
              <p>
                My background also spans computer vision and applied ML, and I care about clean
                architecture, honest evaluation, and shipping things that hold up under real
                usage.
              </p>
            </div>
          </div>
          <aside className="reveal" data-delay="1">
            <div className="about-card">
              <div className="about-card-head">At a glance</div>
              <div className="about-stats">
                <div className="about-stat"><div className="num">3+</div><div className="lbl">years building</div></div>
                <div className="about-stat"><div className="num">MS</div><div className="lbl">Software Eng.</div></div>
              </div>
              <ul className="ac-list">
                <li><Check /> Retrieval-augmented systems</li>
                <li><Check /> Self-supervised &amp; computer vision</li>
                <li><Check /> Production-grade Python services</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
