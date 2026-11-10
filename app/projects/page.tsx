import type { Metadata } from "next"
import { allProjectGroups } from "@/data/project-directory"
import ProjectGroupSection from "@/components/ProjectDirectory/ProjectGroupSection"
import PrimaryButton from "@/components/ui/primary-button"
import SecondaryButton from "@/components/ui/secondary-button"

export const metadata: Metadata = {
  title: "Humanitarians.AI - Projects",
  description: "Our fellows develop higher-tier capacities through real projects. Each project is named for the human capacities it develops — the tiers that AI cannot supply.",
}


export default function ProjectsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-20 bg-background dark:bg-neutral-800">
        <div className="container px-4 md:px-6 mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-4">
            Our fellows develop higher-tier capacities through real projects. The projects serve the mission. The mission is not the projects. Each project below is named for the human capacities it develops — the tiers that AI cannot supply — not just for what it builds.
          </p>
          <p className="text-sm text-muted-foreground italic">
            Tiers refer to the Irreducibly Human framework. Learn more at{" "}
            <a
              href="https://www.irreducibly.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-foreground"
            >
              irreducibly.xyz
            </a>
          </p>
        </div>
      </section>

      {allProjectGroups.map(group => <ProjectGroupSection key={group.id} group={group} />)}

      {/* CTA Section */}
      <section className="w-full py-12 bg-muted dark:bg-neutral-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">Become a Fellow</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              Fellows work on these projects while developing the judgment, causal reasoning, and collaborative synthesis that AI cannot replicate. The portfolio is evidence. The capacities are the product.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <PrimaryButton href="/fellows">Join the Fellows Program</PrimaryButton>
              <SecondaryButton href="/contact">Get in Touch</SecondaryButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
