export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <span>© {year} Muhammad Rauf Sarwer — built with care.</span>
      <a className="top-link" href="#top">
        Back to top
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </a>
    </footer>
  );
}
