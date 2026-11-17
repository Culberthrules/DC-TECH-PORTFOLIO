import Link from "next/link";
import { projects } from "@/lib/projects";

const tools = [...new Set(projects.flatMap((project) => project.stack))];

export default function Stack() {
  return (
    <section className="px-6 py-24 md:py-32 max-w-6xl mx-auto">
      <p className="text-sm text-soft mb-4">Tools I use</p>
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-5">
        My stack
      </h1>
      <p className="text-soft leading-relaxed max-w-2xl mb-12">
        Each tool below is listed with the projects where I used it. Open a
        project to see more about the work.
      </p>

      <ul className="grid gap-x-12 sm:grid-cols-2" role="list">
        {tools.map((tool) => {
          const usedIn = projects.filter((project) =>
            project.stack.includes(tool)
          );

          return (
            <li key={tool} className="border-t border-rim py-5">
              <h2 className="text-base font-medium mb-2">{tool}</h2>
              <p className="text-sm text-soft">
                {usedIn.map((project, index) => (
                  <span key={project.id}>
                    {index > 0 && ", "}
                    <Link
                      href={`/work/${project.id}`}
                      className="hover:text-teal transition-colors"
                    >
                      {project.title}
                    </Link>
                  </span>
                ))}
              </p>
            </li>
          );
        })}
      </ul>

      <p className="mt-12 border-t border-rim pt-6 text-sm text-muted">
        This portfolio is built with Next.js, TypeScript, and Tailwind CSS.
      </p>
    </section>
  );
}
