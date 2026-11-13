import Link from "next/link"
import type { DirectoryProject } from "@/data/project-directory"

export default function ProjectCard({ project }: { project: DirectoryProject }) {
  return (
    <article className="border rounded-lg p-6 bg-background dark:bg-neutral-800 hover:shadow-lg transition-shadow flex flex-col min-w-0">
      <h3 className="text-xl font-bold mb-1"><Link href={project.href} className="hover:underline">{project.name}</Link></h3>
      <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
      {project.tiers.length > 0 && (
        <div className="mb-3">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Develops:</span>
          <div className="flex flex-wrap gap-1 mt-1">
            {project.tiers.map(tier => <span key={tier} className="text-xs px-2 py-1 rounded-full bg-muted dark:bg-neutral-700 text-foreground dark:text-neutral-300">{tier}</span>)}
          </div>
        </div>
      )}
      <div className="mt-auto pt-4 flex flex-wrap gap-4 text-sm">
        <Link href={project.href} className="underline underline-offset-4 hover:text-foreground">Project site →</Link>
        {project.substackUrl && <a href={project.substackUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-foreground">Substack →</a>}
      </div>
    </article>
  )
}
