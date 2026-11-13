import type { ProjectGroup } from "@/data/project-directory"
import ProjectGroupSection from "./ProjectGroupSection"

export default function GroupPage({ group }: { group: ProjectGroup }) {
  return (
    <div className="flex flex-col w-full">
      <section className="w-full py-12 md:py-20 bg-background dark:bg-neutral-800">
        <div className="container px-4 md:px-6 mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{group.name}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">{group.intro}</p>
        </div>
      </section>
      <ProjectGroupSection group={group} />
    </div>
  )
}
