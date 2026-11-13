import type { Metadata } from "next"
import { getProjectGroup } from "@/data/project-directory"
import GroupPage from "@/components/ProjectDirectory/GroupPage"

const group = getProjectGroup("research")
export const metadata: Metadata = { title: `${group.name} - Humanitarians AI`, description: group.intro }
export default function Page() { return <GroupPage group={group} /> }
