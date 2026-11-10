// Shared project directory for the footer and project/category pages.
export type DirectoryProject = {
  name: string
  slug: string
  href: string
  description: string
  tiers: string[]
  substackUrl?: string
}

export type ProjectGroup = {
  id: string
  name: string
  href: string
  intro: string
  projects: DirectoryProject[]
}

export const projectGroups: ProjectGroup[] = [
  {
    id: "agents", name: "Agents", href: "/agents",
    intro: "Each of these projects builds AI agents for a specific domain, from biological research and music to finance, marketing, and computational skepticism.",
    projects: [
      { name: "Dayhoff", slug: "dayhoff", href: "/dayhoff", description: "Open-source AI agents for biological research, bioinformatics, computational biology, and public health.", tiers: ["Tier 5 — Causal Reasoning", "Tier 6 — Collaborative Synthesis"], substackUrl: "https://dayhoffproject.substack.com/" },
      { name: "Madison", slug: "madison", href: "https://madison.humanitarians.ai", description: "Open-source agents for marketing and branding, providing a framework for data-driven advertising intelligence.", tiers: ["Tier 4 — Judgment", "Tier 5 — Causal Reasoning"] },
      { name: "Musinique", slug: "musinique", href: "/musinique", description: "AI agents for music, with a research platform exploring Spotify algorithm dynamics and record label history.", tiers: ["Tier 5 — Causal Reasoning"], substackUrl: "https://musinique.substack.com/" },
      { name: "Mycroft", slug: "mycroft", href: "/mycroft", description: "Educational experiment using specialized AI agents for finance to analyze the investment landscape.", tiers: ["Tier 4 — Judgment", "Tier 5 — Causal Reasoning"], substackUrl: "https://mycroftproject.substack.com/" },
      { name: "Popper", slug: "popper", href: "/popper", description: "AI agents for computational skepticism, DevOps, and AI ops, including assertion verification that scans claims and flags suspect ones for expert review.", tiers: ["Tier 4 — Judgment"], substackUrl: "https://popperskepticism.substack.com/" },
    ],
  },
  {
    id: "research", name: "Research", href: "/research",
    intro: "Explore Humanitarians AI research projects in public health surveillance and adaptive learning.",
    projects: [
      { name: "RAMAN Effect", slug: "raman-effect", href: "/raman-effect", description: "AI-driven spectroscopy and wastewater-based epidemiology for public health surveillance.", tiers: ["Tier 5 — Causal Reasoning"], substackUrl: "https://ramaneffectwpe.substack.com/" },
      { name: "Medhavy", slug: "medhavy", href: "https://www.medhavy.com", description: "Adaptive AI-powered learning platform with multi-armed bandit pedagogy engine.", tiers: ["Tier 4 — Judgment", "Tier 6 — Collaborative Synthesis"], substackUrl: "https://medhavy.substack.com/" },
    ],
  },
  {
    id: "ai-for-good", name: "AI for Good", href: "/ai-for-good",
    intro: "Humanitarians AI initiatives in literacy, job readiness, and conservation education.",
    projects: [
      { name: "Homes of Hope", slug: "homes-of-hope", href: "/homes-of-hope", description: "Homes of Hope +1 is an eight-week AI+1 literacy and job-readiness bootcamp for girls in Hyderabad, India, developed by Humanitarians AI.", tiers: [] },
      { name: "Lyrical Literacy", slug: "lyrical-literacy", href: "/lyrical-literacy", description: "AI-generated songs and videos that activate the embodied and social mechanisms of language acquisition.", tiers: ["Tier 2 — Embodied", "Tier 3 — Social & Ethical"] },
      { name: "LoonNet", slug: "loonnet", href: "https://loonnet.humanitarians.ai", description: "A Humanitarians AI for Good initiative built in partnership with a Loon Conservatory, whose first playable educational prototype is A Loon’s Lake, a four-chapter game.", tiers: [] },
    ],
  },
  {
    id: "jobs", name: "Jobs", href: "https://jobs.humanitarians.ai",
    intro: "Explore Humanitarians AI jobs projects.",
    projects: [
      { name: "80 Days to Stay", slug: "80-days-to-stay", href: "https://jobs.humanitarians.ai", description: "Job tools and agentic AI for OPT job search transparency and efficiency.", tiers: ["Tier 4 — Judgment"] },
      { name: "The Reallocation Engine", slug: "the-reallocation-engine", href: "https://jobs.humanitarians.ai", description: "A Humanitarians AI jobs project.", tiers: [] },
    ],
  },
  {
    id: "marketing", name: "Marketing", href: "/jung-ai",
    intro: "Humanitarians AI marketing projects.",
    projects: [
      { name: "Jung AI", slug: "jung-ai", href: "/jung-ai", description: "Jung AI is a Humanitarians AI marketing project named after Carl Jung.", tiers: [] },
    ],
  },
]

export function getProjectGroup(id: string): ProjectGroup {
  const group = projectGroups.find(group => group.id === id)
  if (!group) throw new Error(`Unknown project group: ${id}`)
  return group
}

export function getDirectoryProject(slug: string): DirectoryProject {
  const project = projectGroups.flatMap(group => group.projects).find(project => project.slug === slug)
  if (!project) throw new Error(`Unknown directory project: ${slug}`)
  return project
}

// Marketing has its own footer column; /projects shows the four requested groups.
export const allProjectGroups = projectGroups.filter(group => group.id !== "marketing")
export type FooterLink = { label: string; href: string }
export type FooterSection = { title: string; links: FooterLink[] }
function groupLinks(id: string, label: string): FooterSection {
  const group = getProjectGroup(id)
  return { title: group.name, links: [{ label, href: group.href }, ...group.projects.map(project => ({ label: project.name, href: project.href }))] }
}
export const footerSections: FooterSection[] = [
  { title: "Company", links: [
    { label: "About Us", href: "/about" }, { label: "All Projects", href: "/projects" },
    { label: "Clients & Testimonials", href: "/clients" }, { label: "Contact Us", href: "/contact" }, { label: "Donate", href: "/donate" },
  ] },
  { title: "Programs", links: [
    { label: "Fellows Program", href: "/fellows" }, { label: "Mentors", href: "/mentors" },
    { label: "Botspeak", href: "/botspeak" }, { label: "Irreducibly Human", href: "https://www.irreducibly.xyz" },
  ] },
  { title: "Platform", links: [
    { label: "Blog", href: "/blog" }, { label: "Books", href: "/books" }, { label: "Videos", href: "/videos" },
  ] },
  { title: "Resources", links: [
    { label: "Student AI Resources", href: "/resources" },
    { label: "Substack", href: "https://humanitariansai.substack.com/" },
    { label: "Spotify", href: "https://open.spotify.com/artist/3cj3R4pDpYQHaWx0MM2vFV" },
    { label: "Apple Music", href: "https://music.apple.com/us/artist/humanitarians-ai/1781414009" },
    { label: "Lyrical Literacy Podcast", href: "https://podcast.humanitarians.ai/" },
  ] },
  groupLinks("jobs", "Jobs"),
  groupLinks("agents", "All Agents"),
  groupLinks("research", "All Research"),
  { title: "Marketing", links: [
    { label: "YouTube", href: "https://www.youtube.com/@humanitariansai" },
    ...getProjectGroup("marketing").projects.map(project => ({ label: project.name, href: project.href })),
  ] },
  groupLinks("ai-for-good", "All AI for Good"),
]
