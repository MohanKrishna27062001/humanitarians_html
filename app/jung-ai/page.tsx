import type { Metadata } from "next"
import { getDirectoryProject } from "@/data/project-directory"
import ProjectOverview from "@/components/ProjectDirectory/ProjectOverview"

const project = getDirectoryProject("jung-ai")
export const metadata: Metadata = { title: "Jung AI - Humanitarians AI", description: project.description }

export default function JungAIPage() {
  // TODO: Add the full Jung AI project description when approved source content is available.
  // Existing Jungian marketing articles do not identify themselves as the Jung AI project.
  return <ProjectOverview project={project} />
}
