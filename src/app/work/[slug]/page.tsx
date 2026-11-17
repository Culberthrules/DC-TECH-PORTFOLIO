import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.id === slug);

  return project
    ? { title: project.title, description: project.summary }
    : { title: "Project" };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.id === slug);

  if (!project) notFound();

  return (
    <main>
      <article className="px-6 pt-28 pb-24 md:pt-36 md:pb-32 max-w-4xl mx-auto">
        <Link
          href="/work"
          className="text-sm text-soft hover:text-ink transition-colors"
        >
          All projects
        </Link>

        <header className="mt-12 mb-14">
          <p className="text-sm text-soft mb-3">{project.type}</p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-5">
            {project.title}
          </h1>
          <p className="text-lg text-soft leading-relaxed max-w-2xl">
            {project.summary}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-3 mt-7 text-sm">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal hover:opacity-75 transition-opacity"
            >
              Visit live site <span aria-hidden="true">↗</span>
            </a>
            {project.sourceCode.map((source) => (
              <a
                key={source.url}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal hover:opacity-75 transition-opacity"
              >
                {source.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </header>

        <dl className="divide-y divide-rim border-y border-rim">
          <div className="grid gap-2 py-6 sm:grid-cols-[10rem_1fr]">
            <dt className="text-sm text-muted">My role</dt>
            <dd className="text-sm text-ink">{project.role}</dd>
          </div>
          {project.timeline && (
            <div className="grid gap-2 py-6 sm:grid-cols-[10rem_1fr]">
              <dt className="text-sm text-muted">Timeline</dt>
              <dd className="text-sm text-ink">{project.timeline}</dd>
            </div>
          )}
          <div className="grid gap-2 py-6 sm:grid-cols-[10rem_1fr]">
            <dt className="text-sm text-muted">The challenge</dt>
            <dd className="text-sm text-soft leading-relaxed">
              {project.challenge}
            </dd>
          </div>
          <div className="grid gap-2 py-6 sm:grid-cols-[10rem_1fr]">
            <dt className="text-sm text-muted">What I did</dt>
            <dd className="text-sm text-soft leading-relaxed">
              {project.approach}
            </dd>
          </div>
          <div className="grid gap-2 py-6 sm:grid-cols-[10rem_1fr]">
            <dt className="text-sm text-muted">Outcome</dt>
            <dd className="text-sm text-soft leading-relaxed">
              {project.outcome}
            </dd>
          </div>
          <div className="grid gap-2 py-6 sm:grid-cols-[10rem_1fr]">
            <dt className="text-sm text-muted">Tools</dt>
            <dd className="text-sm text-soft leading-relaxed">
              {project.stack.join(" · ")}
            </dd>
          </div>
        </dl>
      </article>
    </main>
  );
}
