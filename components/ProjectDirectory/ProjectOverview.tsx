import type { ReactNode } from "react"
import type { DirectoryProject } from "@/data/project-directory"

// Uses the container, hero, and content pattern of the existing project pages.
// The root layout supplies the shared header and footer.
export default function ProjectOverview({ project, children }: { project: DirectoryProject; children?: ReactNode }) {
  return (
    <div className="container px-4 md:px-6 mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.name}</h1>
          <p className="text-xl text-muted-foreground mb-8">{project.description}</p>
        </div>
        {children}
      </div>
    </div>
  )
}
