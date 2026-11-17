import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[78svh] flex flex-col justify-center px-6 pt-24 max-w-6xl mx-auto"
    >
      <div className="max-w-3xl py-20 md:py-28">
        <p className="text-sm text-soft mb-8">
          Full-stack developer, open to freelance and full-time work
        </p>
        <h1 className="font-display text-[clamp(3.2rem,8vw,6rem)] leading-[0.98] tracking-tight text-ink mb-6">
            Damasus
            <br />
          Culberth
        </h1>
        <p className="text-soft text-lg md:text-xl leading-relaxed max-w-xl mb-9">
          I build websites and web apps for people and small businesses, then help keep them running.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/work"
            className="inline-flex items-center justify-center h-11 px-6 bg-teal text-canvas text-sm font-medium rounded-full hover:opacity-90 transition-opacity"
          >
            View my work
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-11 px-6 border border-rim text-soft text-sm rounded-full hover:border-teal hover:text-teal transition-all duration-200"
          >
            Get in touch
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-rim" />
    </section>
  );
}
