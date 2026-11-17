const FOOTER_LINKS = [
  { label: "GitHub", href: "https://github.com/Culberthrules" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/damasus-culberth" },
  { label: "culberthdamasus@gmail.com", href: "mailto:culberthdamasus@gmail.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rim px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
        {/* Wordmark */}
        <span className="font-mono text-xs text-muted tracking-[0.18em] uppercase">
          Damasus Culberth, DC Tech
        </span>

        {/* Links */}
        <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-6" role="list">
          {FOOTER_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="font-mono text-xs text-muted hover:text-teal transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <span className="font-mono text-xs text-muted">
          © {year}
        </span>
      </div>
    </footer>
  );
}
