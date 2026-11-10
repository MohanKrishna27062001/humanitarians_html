import type { Metadata } from "next"
import ToolPage from "@/app/ai1/tools/[slug]/page"

export const metadata: Metadata = { title: "Addams — OPT Documentation System" }
// Preserve access to the existing artifact without advertising it as a project.
export default function AddamsPage() {
  return <ToolPage params={Promise.resolve({ slug: "addams" })} />
}
