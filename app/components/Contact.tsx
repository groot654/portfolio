"use client";

import { useState } from "react";

const DEFAULT_NOTE = "This is a demo form — wire it to your email service or Formspree.";

export default function Contact() {
  const [note, setNote] = useState(DEFAULT_NOTE);
  const [ok, setOk] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !emailOk || !message) {
      setNote("Please fill in all fields with a valid email.");
      setOk(false);
      return;
    }
    setNote(`✓ Thanks, ${name.split(" ")[0]} — message captured (demo). Wire this up to send for real.`);
    setOk(true);
    form.reset();
  };

  return (
    <section className="section-pad" id="contact">
      <div className="wrap">
        <div className="contact-card reveal">
          <div className="contact-grid">
            <div>
              <p className="contact-lead">
                Let&apos;s build something <span className="accent">intelligent</span>.
              </p>
              <p className="contact-text">
                Open to roles and collaborations building LLM applications — plus ML and computer
                vision. The fastest way to reach me is email — or grab my resume.
              </p>
              <div className="socials">
                <a className="social" href="mailto:raufsarwer00@gmail.com">
                  <span className="si">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-10 7L2 7" />
                    </svg>
                  </span>
                  <span>
                    <span className="s-k">email</span>
                    <br />
                    <span className="s-v">raufsarwer00@gmail.com</span>
                  </span>
                </a>
                <a className="social" href="https://github.com/groot654" target="_blank" rel="noopener noreferrer">
                  <span className="si">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                  </span>
                  <span>
                    <span className="s-k">github</span>
                    <br />
                    <span className="s-v">github.com/groot654</span>
                  </span>
                </a>
                <a className="social" href="https://www.linkedin.com/in/muhammad-rauf-sarwer-0a5977332/" target="_blank" rel="noopener noreferrer">
                  <span className="si">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </span>
                  <span>
                    <span className="s-k">linkedin</span>
                    <br />
                    <span className="s-v">muhammad-rauf-sarwer</span>
                  </span>
                </a>
              </div>
            </div>
            <form onSubmit={onSubmit} noValidate>
              <div className="field">
                <label htmlFor="cname">
                  Name <span className="req">*</span>
                </label>
                <input id="cname" name="name" type="text" placeholder="Jane Doe" required />
              </div>
              <div className="field">
                <label htmlFor="cemail">
                  Email <span className="req">*</span>
                </label>
                <input id="cemail" name="email" type="email" placeholder="jane@company.com" required />
              </div>
              <div className="field">
                <label htmlFor="cmsg">
                  Message <span className="req">*</span>
                </label>
                <textarea id="cmsg" name="message" rows={4} placeholder="Tell me about the role or project…" required />
              </div>
              <button className="btn btn-primary" type="submit">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m22 2-7 20-4-9-9-4 20-7z" />
                </svg>
                Send message
              </button>
              <p className={`form-note${ok ? " ok" : ""}`}>{note}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
