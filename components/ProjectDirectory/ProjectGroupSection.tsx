import Link from "next/link"
import type { ProjectGroup } from "@/data/project-directory"
import ProjectCard from "./ProjectCard"

export default function ProjectGroupSection({ group }: { group: ProjectGroup }) {
  return (
    <section className="w-full py-12 bg-muted dark:bg-neutral-900" aria-labelledby={`${group.id}-heading`}>
      <div className="container px-4 md:px-6 mx-auto">
        <h2 id={`${group.id}-heading`} className="text-3xl font-bold mb-8"><Link href={group.href} className="hover:underline">{group.name}</Link></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {group.projects.map(project => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </div>
    </section>
  )
}
