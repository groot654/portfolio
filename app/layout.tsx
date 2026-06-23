import type { Metadata } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Display face for headings, body face for prose, mono for code/labels.
// Each is self-hosted by next/font and exposed as a CSS variable the
// design tokens (--f-disp / --f-sans / --f-mono) reference in globals.css.
const display = Bricolage_Grotesque({
  variable: "--font-disp",
  subsets: ["latin"],
  display: "swap",
});

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Rauf Sarwer — ML & AI Engineer · Python · LLMs",
  description:
    "Portfolio of Muhammad Rauf Sarwer — a Python developer and ML engineer who builds applications and solves problems with large language models (LLMs).",
};

// Runs before paint to apply the saved theme and avoid a flash of the wrong
// mode. Dark is the default; light only applies when explicitly chosen.
const themeInit = `
(function () {
  try {
    var t = localStorage.getItem("portfolio-theme");
    if (t) document.documentElement.setAttribute("data-theme", t);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
