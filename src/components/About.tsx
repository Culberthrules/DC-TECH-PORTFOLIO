import Link from "next/link";

export default function About() {
  return (
    <section className="px-6 py-24 md:py-32 max-w-4xl mx-auto">
      <p className="text-sm text-soft mb-4">About</p>
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
        Full-stack developer
      </h1>
      <div className="space-y-5 text-soft text-base md:text-lg leading-relaxed max-w-3xl mb-12">
        <p>
          I build and maintain websites and web apps for clients. My recent
          work ranges from fixing a business site and its email flow to adding
          a client portal for an architecture firm.
        </p>
        <p>
          I work across React, TypeScript, Node.js, and databases. I care about
          choosing tools that fit the project and staying involved after launch.
        </p>
        <p>
          Based in Lagos, Nigeria. I&apos;m open to frontend, backend, and
          full-stack roles, including remote opportunities.
        </p>
      </div>

      <div className="flex flex-wrap gap-5 text-sm">
        <Link
          href="/work"
          className="text-teal hover:opacity-75 transition-opacity"
        >
          Explore the projects
        </Link>
        <Link
          href="/contact"
          className="text-soft hover:text-ink transition-colors"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
}
