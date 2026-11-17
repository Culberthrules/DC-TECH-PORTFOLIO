import Link from "next/link";
import { projects } from "@/lib/projects";

type WorkProps = {
  featuredOnly?: boolean;
};

export default function Work({ featuredOnly = false }: WorkProps) {
  const visibleProjects = featuredOnly
    ? projects.filter((project) => project.featured)
    : projects;
  const Heading = featuredOnly ? "h2" : "h1";

  return (
    <section className="px-6 py-20 md:py-28 max-w-6xl mx-auto">
      <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
        <div>
          <p className="text-sm text-soft mb-3">Work</p>
          <Heading className="text-3xl md:text-4xl font-semibold tracking-tight">
            {featuredOnly ? "Selected projects" : "Projects"}
          </Heading>
        </div>
        {featuredOnly && (
          <Link
            href="/work"
            className="text-sm text-teal hover:opacity-75 transition-opacity"
          >
            More projects
          </Link>
        )}
      </div>

      <div className="divide-y divide-rim border-y border-rim">
        {visibleProjects.map((project) => (
          <article
            key={project.id}
            className="grid gap-4 py-8 md:grid-cols-[minmax(0,1fr)_auto] md:gap-10"
          >
            <div>
              <p className="text-sm text-muted mb-2">{project.type}</p>
              <h3 className="text-xl md:text-2xl font-medium mb-3">
                {project.title}
              </h3>
              <p className="text-sm text-soft leading-relaxed max-w-2xl">
                {project.summary}
              </p>
              <p className="text-xs text-muted mt-4">
                {project.stack.join(" · ")}
              </p>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm md:self-center">
              <Link
                href={`/work/${project.id}`}
                className="text-teal hover:opacity-75 transition-opacity"
              >
                Case study
              </Link>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-soft hover:text-ink transition-colors"
              >
                Live site <span aria-hidden="true">↗</span>
              </a>
              {project.sourceCode.map((source) => (
                <a
                  key={source.url}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-soft hover:text-ink transition-colors"
                >
                  {source.label} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
