import type { Metadata } from "next"
import Link from "next/link"
import { getDirectoryProject } from "@/data/project-directory"
import ProjectOverview from "@/components/ProjectDirectory/ProjectOverview"

const project = getDirectoryProject("homes-of-hope")
export const metadata: Metadata = { title: "Homes of Hope +1 - Humanitarians AI", description: project.description }

export default function HomesOfHopePage() {
  return (
    <ProjectOverview project={project}>
      <section className="grid gap-6">
        <h2 className="text-3xl font-bold">How the bootcamp is delivered</h2>
        <p className="text-muted-foreground">The program is delivered through Android smartphones, Kindle, Anki flashcard decks, and Zoom sessions with Humanitarians AI volunteers.</p>
        <Link href="/ai-for-good" className="underline underline-offset-4">← All AI for Good</Link>
      </section>
    </ProjectOverview>
  )
}
