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

      <div
        aria-hidden="true"
        className="group absolute right-6 top-1/2 hidden w-[min(34vw,23rem)] -translate-y-1/2 rounded-xl border border-rim bg-surface/80 p-5 font-mono text-xs shadow-2xl shadow-teal/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-[52%] hover:border-teal/40 lg:block"
      >
        <div className="mb-5 flex items-center justify-between border-b border-rim pb-4 text-muted">
          <div className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-[#ff5f57]" />
            <span className="size-2 rounded-full bg-[#febc2e]" />
            <span className="size-2 rounded-full bg-[#28c840]" />
          </div>
          <span>src/portfolio.ts</span>
        </div>
        <div className="space-y-2 leading-relaxed">
          <p>
            <span className="mr-4 text-muted">01</span>
            <span className="text-[#c792ea]">const</span>{" "}
            <span className="text-[#82aaff]">developer</span> = {"{"}
          </p>
          <p>
            <span className="mr-4 text-muted">02</span>
            <span className="text-soft">name:</span>{" "}
            <span className="text-[#c3e88d]">&quot;Damasus&quot;</span>,
          </p>
          <p>
            <span className="mr-4 text-muted">03</span>
            <span className="text-soft">craft:</span>{" "}
            <span className="text-[#c3e88d]">&quot;web experiences&quot;</span>,
          </p>
          <p>
            <span className="mr-4 text-muted">04</span>
            <span className="text-soft">status:</span>{" "}
            <span className="text-[#c3e88d]">&quot;open to work&quot;</span>
          </p>
          <p>
            <span className="mr-4 text-muted">05</span>
            {"}"}
            <span className="ml-1 inline-block h-3.5 w-1 animate-pulse bg-teal align-middle" />
          </p>
        </div>
        <div className="mt-5 border-t border-rim pt-4 text-[10px] tracking-[0.16em] text-teal/70">
          ● AVAILABLE FOR OPPORTUNITIES
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-rim" />
    </section>
  );
}
