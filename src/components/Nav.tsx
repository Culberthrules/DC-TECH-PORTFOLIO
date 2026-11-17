"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Work", href: "/work" },
  { label: "Stack", href: "/stack" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-canvas/95 backdrop-blur-md border-b border-rim"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <Link
          href="/"
          aria-label="DC Tech home"
          className="font-mono text-xs tracking-[0.2em] uppercase text-teal hover:opacity-80 transition-opacity"
        >
          DC&nbsp;Tech
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-7" role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm text-soft hover:text-ink transition-colors duration-200"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 text-sm border border-teal text-teal px-4 py-1.5 rounded-full hover:bg-teal hover:text-canvas transition-all duration-200 font-medium"
        >
          Get in touch
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden font-mono text-xs text-soft hover:text-ink transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-surface border-b border-rim px-6 pb-8">
          <ul className="flex flex-col gap-5 pt-6" role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-base text-soft hover:text-ink transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center border border-teal text-teal text-sm px-5 py-2 rounded-full hover:bg-teal hover:text-canvas transition-all duration-200"
                onClick={() => setMenuOpen(false)}
              >
                Get in touch
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
