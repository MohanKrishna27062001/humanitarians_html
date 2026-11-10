import type { Metadata } from "next"
import PrimaryButton from "@/components/ui/primary-button"
import SecondaryButton from "@/components/ui/secondary-button"
import Link from "next/link"
import { Mail, FlaskConical, MailX, NotebookPen, CalendarDays, FolderGit2, ShieldCheck, Lightbulb, GitCommitHorizontal, Bot, Clock, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Fellows Program - Humanitarians AI",
  description: "Join our global community of talented volunteers dedicated to using AI for humanitarian causes",
}

export const dynamic = 'force-dynamic'

const BRUTALIST_PLAYLIST = "https://www.youtube.com/playlist?list=PLG9A_zHUv8A4"
const FELLOWS_REPO = "https://github.com/nikbearbrown/humanitarians-youtube/tree/main/fellows"

export default function FellowsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-20 bg-background dark:bg-neutral-800">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold mb-6">Fellows Program</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Join our global community of talented volunteers dedicated to using AI for humanitarian causes. The Fellows Program offers hands-on experience with cutting-edge AI projects, professional development, and networking opportunities with like-minded innovators committed to positive impact.
          </p>

          <section aria-labelledby="start-here" className="p-6 md:p-8 border border-l-4 border-l-primary rounded-lg bg-muted dark:bg-neutral-900 mb-8">
            <h2 id="start-here" className="scroll-mt-24 text-2xl font-bold mb-4">Start here</h2>
            <ol className="list-decimal space-y-4 pl-6 text-muted-foreground marker:text-primary break-words">
              <li><strong className="text-foreground">Know your Project Manager.</strong> This is the person you report to every week. You&apos;re told who it is when you join your group. CC them on every renewal request. If you&apos;re not sure who it is, email <a href="mailto:hr@humanitarians.ai" className="underline underline-offset-4 text-foreground hover:text-primary">hr@humanitarians.ai</a> before you start work.</li>
              <li><strong className="text-foreground">Set up your fellows folder.</strong> In the <a href={FELLOWS_REPO} className="underline underline-offset-4 text-foreground hover:text-primary">fellows repository</a>, create <code className="text-sm break-all">fellows/first-name-last-initial/</code>. Each piece of work gets its own dated folder inside it: <code className="text-sm break-all">YYYY-MM-DD-slug/</code>.</li>
              <li><strong className="text-foreground">Document your work every week. It&apos;s your evidence for OPT.</strong> That means 20 hours of documented work, two Brutalist videos, a Frictional log entry in each folder you worked in, and your code committed to your project&apos;s repository. The full list, and why it has to be weekly, is under <a href="#reporting-requirements" className="underline underline-offset-4 text-foreground hover:text-primary">Reporting requirements</a>.</li>
              <li><strong className="text-foreground">Make every video open from a direct link.</strong> Post each video somewhere it opens from a direct link, and check that anyone with the link can view it.</li>
              <li><strong className="text-foreground">Track your own end date.</strong> Request your renewal at least seven days before your agreement ends. No one will remind you. See <a href="#requesting-a-renewal" className="underline underline-offset-4 text-foreground hover:text-primary">Requesting a renewal</a>.</li>
            </ol>
          </section>

          {/* Renewal rules */}
          <div role="note" aria-labelledby="renewal-rules-heading" className="p-6 md:p-8 border-2 border-primary rounded-lg bg-muted dark:bg-neutral-900 mb-8">
            <h2 id="renewal-rules-heading" className="flex items-center gap-3 text-2xl font-bold mb-4">
              <CalendarDays className="w-7 h-7 shrink-0 text-primary" aria-hidden="true" />
              Renewals are your responsibility
            </h2>
            <ul className="space-y-3 mb-4 text-lg">
              <li className="flex gap-3">
                <Clock className="w-5 h-5 mt-1 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  <strong>Request your renewal at least one week (7 days) before your current agreement ends.</strong>{" "}
                  Later requests may not be approved in time, and agreements are never backdated.
                </span>
              </li>
              <li className="flex gap-3">
                <Users className="w-5 h-5 mt-1 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  <strong>CC your Project Manager</strong> (the person you report to) on every renewal email,
                  along with hr@humanitarians.ai and bear@humanitarians.ai.
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 mt-1 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  Send it Monday to Wednesday, business hours. Track your own end date: no one will remind you.
                </span>
              </li>
            </ul>
            <a href="#requesting-a-renewal" className="font-bold underline underline-offset-4 text-primary hover:text-primary/80">
              How to request a renewal
            </a>
          </div>

          <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/m18KFHOoMDs?si=wfx6Ff2KuieFegdZ&enablejsapi=1"
              title="Humanitarians AI: Harnessing Technology for Social Good"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          {/* Joining card */}
          <div className="p-6 md:p-8 border border-l-4 border-l-primary rounded-lg bg-muted dark:bg-neutral-900 mb-8">
            <h2 className="text-2xl font-bold mb-4">Joining Humanitarians AI</h2>
            <p className="text-muted-foreground mb-6">
              Unless you are invited onto a specific project, every new Fellow starts with a{" "}
              <strong className="text-foreground">one-month trial letter</strong> working on the Brutalist project.
              Watching the{" "}
              <a
                href={BRUTALIST_PLAYLIST}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 text-foreground hover:text-primary"
              >
                Brutalist (Film as Code) tutorials
              </a>{" "}
              is encouraged.
            </p>

            <div className="flex items-center gap-3 p-4 mb-6 rounded-lg border bg-background dark:bg-neutral-800">
              <Mail className="w-6 h-6 shrink-0 text-primary" />
              <p>
                To join, email HR at{" "}
                <a
                  href="mailto:hr@humanitarians.ai"
                  className="font-bold text-lg text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  hr@humanitarians.ai
                </a>
              </p>
            </div>

            <section aria-labelledby="reporting-requirements" className="mb-6">
              <h3 id="reporting-requirements" className="scroll-mt-24 text-lg font-bold mb-3">Reporting requirements</h3>
              <p className="text-muted-foreground mb-4">These are due every week, from your first week to your last.</p>
              <p className="text-muted-foreground mb-4">
                <strong className="text-foreground">This is your evidence for OPT.</strong> Every week, you document the work you did that week: your hours, your videos, your Frictional log and your code. Together they&apos;re the dated record, made at the time, that your work is real and related to your degree. A record written each week is worth far more than one reconstructed months later, when the specifics are gone. That&apos;s why these are weekly requirements, not something you put together at renewal time.
              </p>
              <p className="text-muted-foreground mb-6">This record supplements whatever your school&apos;s international student office requires; it doesn&apos;t replace it.</p>

              <p className="font-bold mb-3">Due every week</p>
              <ul className="list-disc space-y-3 pl-6 mb-6 text-muted-foreground marker:text-primary">
                <li><strong className="text-foreground">Hours.</strong> At least 20 hours of work, with a dated record for each week.</li>
                <li><strong className="text-foreground">Two videos made with Brutalist.</strong> One on any STEM or AI topic you choose, and one progress update on that week&apos;s work. Every week, for your whole fellowship.</li>
                <li><strong className="text-foreground">Your Frictional log.</strong> A running diary of what you did that week, including what didn&apos;t work. It isn&apos;t graded, but it is required every week. Add a dated entry to the FRICTIONAL.md in every work folder you worked in that week.</li>
                <li><strong className="text-foreground">Code in the project repository.</strong> If your project has its own GitHub repository, commit your code there as you work, not in one batch at the end. Your fellows folder holds your Frictional log; link from it to the specific commits or pull requests. Code that exists only in the fellows repository, or only on your own machine, doesn&apos;t count as evidence.</li>
              </ul>

              <p className="font-bold mb-3">During your trial month</p>
              <p className="text-muted-foreground mb-4">Your 20 hours break down this way:</p>
              <ul className="list-disc space-y-3 pl-6 mb-6 text-muted-foreground marker:text-primary">
                <li>About 10 hours a week reviewing Brutalist videos.</li>
                <li>10 or more hours a week on your research or project work. These hours can include joining meetings on existing projects.</li>
              </ul>

              <p className="font-bold mb-3">Renewals</p>
              <p className="text-muted-foreground">Your renewal report links to your weekly records; it doesn&apos;t replace them. To be renewed, you also need a clear plan for your research. Request the renewal at least one week before your agreement ends, with your Project Manager on CC. See <a href="#requesting-a-renewal" className="underline underline-offset-4 text-foreground hover:text-primary">Requesting a Renewal</a> below.</p>
            </section>

            <div className="flex flex-wrap gap-4">
              <PrimaryButton href="mailto:hr@humanitarians.ai">Email hr@humanitarians.ai</PrimaryButton>
              <SecondaryButton href={BRUTALIST_PLAYLIST}>Watch the Brutalist Tutorials</SecondaryButton>
              <SecondaryButton href="/projects">View Projects</SecondaryButton>
              <SecondaryButton href="#requesting-a-renewal">Requesting a Renewal</SecondaryButton>
            </div>
          </div>

          <section id="requesting-renewals" aria-labelledby="requesting-a-renewal" className="scroll-mt-24 p-6 md:p-8 border border-l-4 border-l-primary rounded-lg bg-muted dark:bg-neutral-900 mb-8">
            <h2 id="requesting-a-renewal" className="scroll-mt-24 text-2xl font-bold mb-4">Requesting a Fellowship Renewal</h2>
            <p className="mb-4">
              <strong>Request your renewal at least one week (7 days) before your current agreement ends.</strong> Renewals
              require approval, and agreements are not backdated.
            </p>
            <p className="text-muted-foreground mb-4">
              Send your renewal request to <a href="mailto:hr@humanitarians.ai" className="underline underline-offset-4 text-foreground hover:text-primary">hr@humanitarians.ai</a> and{" "}
              <a href="mailto:bear@humanitarians.ai" className="underline underline-offset-4 text-foreground hover:text-primary">bear@humanitarians.ai</a>, and{" "}
              <strong className="text-foreground">CC your current Project Manager (the person you report to)</strong>. Send it
              Monday to Wednesday during business hours.
            </p>
            <p className="text-muted-foreground mb-4">
              Before you send your request, watch the renewal videos in the{" "}
              <a href="https://www.youtube.com/playlist?list=PLLvEy8b-oJSI" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 text-foreground hover:text-primary">Fellows playlist on YouTube</a>:
              how to submit a renewal request, and how to organize your fellows folder.
            </p>
            <p className="mb-6">
              Professor Bear needs a short executive summary: <strong>What did you accomplish? Are your weekly
              hours documented? Where is the evidence?</strong> Save your renewal report as a Markdown file in your own{" "}
              <a href="https://github.com/nikbearbrown/humanitarians-youtube/tree/main/fellows" className="underline underline-offset-4 hover:text-primary">fellows folder</a>.
              Email both recipients a short summary and a direct link to that report. Professor Bear is very busy and
              will not hunt through folders, playlists, or previous messages for evidence. Writing the clear report
              and making every supporting video, log, and artifact easy to open is the Fellow’s responsibility.
            </p>

            <h3 className="text-lg font-bold mb-3">What to include</h3>
            <ol className="list-decimal space-y-3 pl-6 mb-6 text-muted-foreground marker:text-primary">
              <li><strong className="text-foreground">Your request:</strong> name, project, current agreement end date,
                reporting period, and requested renewal dates.</li>
              <li><strong className="text-foreground">Two or three completed results:</strong> describe what you delivered,
                your personal contribution, and link each result to an artifact.</li>
              <li><strong className="text-foreground">Actual hours for each week:</strong> link dated work records and
                identify any week below 20 hours or with missing records. A monthly average can hide gaps.</li>
              <li><strong className="text-foreground">Videos and Frictional logs:</strong> provide direct links to each
                required video, the relevant <a href="#frictional-logs" className="underline underline-offset-4 hover:text-primary">dated log entry</a>,
                and supporting work such as commits or pull requests in your project&apos;s repository, documents, review notes, or demonstrations.</li>
              <li><strong className="text-foreground">Your next steps:</strong> a clear research or project plan with
                specific deliverables and target dates, plus any unresolved issues.</li>
            </ol>

            <div className="rounded-lg border bg-background dark:bg-neutral-800 p-4 md:p-6 mb-6">
              <h3 className="text-lg font-bold mb-3">Copy this email format</h3>
              <div className="space-y-3 text-sm break-words">
                <p><strong>To:</strong> hr@humanitarians.ai; bear@humanitarians.ai</p>
                <p><strong>CC (required):</strong> Your current Project Manager who you report to</p>
                <p><strong>Subject:</strong> Fellowship renewal — [Name] — [Project] — [Requested dates]</p>
                <p><strong>Markdown renewal report:</strong> [Direct GitHub link to the report in your fellows folder.]</p>
                <p><strong>Request:</strong> Please renew my fellowship from [date] through [date]. My current agreement
                  ends [date]. This summary covers [reporting dates].</p>
                <p><strong>Completed:</strong> [Two or three results, your contribution, and a direct evidence link for each.]</p>
                <p><strong>Hours status:</strong> [20+ hours documented for every reported week / exceptions / incomplete records.]</p>
                <p><strong>Degree relevance and supervision:</strong> [How the work relates to your degree; supervisor
                  name and available review or feedback evidence.]</p>
                <p><strong>Authorization:</strong> [Authorization type and dates; current agreement dates. Send sensitive
                  documents privately to HR, never in public logs.]</p>
                <p><strong>Next period:</strong> [Deliverable and target date.]</p>
                <p><strong>Outstanding issues:</strong> [Missing evidence, unfinished work, or other exceptions; otherwise None.]</p>
              </div>
            </div>

            <div className="overflow-x-auto rounded-lg border mb-4">
              <table className="w-full min-w-[600px] text-sm text-left">
                <caption className="text-left font-semibold p-4">Weekly evidence index — include one row for every week in the reporting period</caption>
                <thead className="bg-background dark:bg-neutral-800">
                  <tr>
                    <th scope="col" className="p-3">Week / dates</th>
                    <th scope="col" className="p-3">Actual hours</th>
                    <th scope="col" className="p-3">Video links</th>
                    <th scope="col" className="p-3">Log and work evidence</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-t">
                    <td className="p-3">[Date range]</td>
                    <td className="p-3">[Hours worked]</td>
                    <td className="p-3">[STEM/AI video] · [Progress video]</td>
                    <td className="p-3">[Dated log] · [Project-repository commit or pull request, document, or artifact]</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground mb-4">
              Make evidence one click away. Use descriptive link titles with dates, check viewing permissions, and
              link to the specific item rather than a repository homepage or folder. Include both required videos for every week. A finished video or commit demonstrates an output; pair it with
              dated records of tasks and time worked to document hours. Report gaps honestly.
            </p>
            <p className="text-sm text-muted-foreground">
              For post-completion OPT, document at least 20 hours of qualifying work per week. Hours alone do not
              establish full OPT compliance: the work must relate to your degree and meet applicable authorization,
              reporting, and employment requirements. Humanitarians AI provides agreements for OPT, not STEM OPT.
              Confirm individual requirements with your school&apos;s international student office. See{" "}
              <a href="https://www.ice.gov/doclib/sevis/pdf/opt_policy_guidance_042010.pdf" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-primary">SEVP guidance, section 7.2.1</a>.
            </p>
          </section>

          {/* Authorship on papers */}
          <section id="authorship" aria-labelledby="authorship-heading" className="scroll-mt-24 p-6 md:p-8 border border-l-4 border-l-primary rounded-lg bg-muted dark:bg-neutral-900 mb-8">
            <h2 id="authorship-heading" className="text-2xl font-bold mb-4">Authorship on Papers</h2>
            <p className="mb-4">
              <strong>Our expectation: the Humanitarians AI mentors are the last authors on every paper.</strong>
            </p>
            <p className="text-muted-foreground mb-4">
              For the general rules we follow Yale&apos;s{" "}
              <a
                href="https://provost.yale.edu/policies/academic-integrity/guidance-authorship-scholarly-or-scientific-publications"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 text-foreground hover:text-primary"
              >
                Guidance on Authorship in Scholarly or Scientific Publications
              </a>
              . In short:
            </p>
            <ul className="list-disc space-y-2 pl-6 mb-4 text-muted-foreground marker:text-primary">
              <li><strong className="text-foreground">Authors must contribute.</strong> Meaningful, substantive intellectual input: planning, analysis or interpretation, and writing or revising the manuscript.</li>
              <li><strong className="text-foreground">Every author approves the final version</strong> and can take public responsibility for the work, including answering questions about its accuracy and integrity.</li>
              <li><strong className="text-foreground">The lead author</strong> usually did the central work and drafted the paper. They confirm that every listed author qualifies and are usually the corresponding author.</li>
              <li><strong className="text-foreground">No gift or courtesy authorship.</strong> Seniority, running the lab, or routine technical help does not earn a byline. Those people are acknowledged instead.</li>
              <li><strong className="text-foreground">No ghostwriting.</strong> Anyone who wrote significant text is named as an author or acknowledged. Authorship is never bought or sold.</li>
              <li><strong className="text-foreground">Acknowledge</strong> valuable non-author contributions and every funding source, and disclose related financial interests.</li>
              <li><strong className="text-foreground">Talk about authorship early.</strong> Settle who is an author, and in what order, at the start of the project, not at submission.</li>
            </ul>
            <p className="text-sm text-muted-foreground">
              Yale&apos;s guidance sets who qualifies as an author. Author order, including mentors in the last position,
              is Humanitarians AI&apos;s own expectation. Confirm the order with your Project Manager before you draft.
            </p>
          </section>

          {/* Application and OPT agreement information */}
          <div className="p-6 md:p-8 border border-l-4 border-l-primary rounded-lg bg-muted dark:bg-neutral-900 mb-8">
            <h2 className="text-2xl font-bold mb-4">Application and OPT Agreement Information</h2>

            <h3 className="text-lg font-bold mb-3">What to include with your application</h3>
            <p className="text-muted-foreground mb-6">
              Please provide a resume, LinkedIn profile, GitHub ID, and/or portfolio link when you apply.
            </p>

            <h3 className="text-lg font-bold mb-3">Important information for OPT volunteers</h3>
            <ul className="list-disc space-y-3 pl-6 mb-6 text-muted-foreground marker:text-primary">
              <li>
                Agreement dates begin after you have been approved for a project and we receive a copy of your valid,
                physical Employment Authorization Document (EAD) card and a valid form of identification.
              </li>
              <li>
                Initial agreements are for one month. If a renewal is approved, subsequent agreements run for two to
                three months. Volunteers are solely responsible for tracking their agreement dates and requesting
                renewals on time, at least one week before the current agreement ends, with their Project Manager on CC.
              </li>
              <li>
                For SEVP reporting guidance, contact Northeastern University&apos;s Office of Global Services (OGS) or
                your school&apos;s international student office.
              </li>
              <li>
                Our business address will appear on your agreement. We do not have a phone number to provide.
              </li>
              <li>
                This is a part-time, volunteer role. We currently provide agreements for OPT only, not STEM OPT.
              </li>
              <li>
                We recommend that you do not perform volunteer work until your agreement is active and your physical
                EAD card is in hand and valid.
              </li>
              <li>We do not backdate agreements for any reason.</li>
            </ul>

            <p className="text-sm text-muted-foreground">
              Humanitarians AI cannot provide immigration advice. Confirm your individual reporting and eligibility
              requirements with your school&apos;s international student office.
            </p>
          </div>

          {/* When We're Open card */}
          <div className="p-6 md:p-8 border border-l-4 border-l-primary rounded-lg bg-muted dark:bg-neutral-900 mb-8">
            <h2 className="flex items-center gap-3 text-2xl font-bold mb-4">
              <Clock className="w-7 h-7 shrink-0 text-primary" aria-hidden="true" />
              When We&apos;re Open
            </h2>
            <p className="text-xl font-bold mb-4">Monday to Wednesday, business hours</p>
            <p className="mb-4">
              The Board of Humanitarians AI is 100% volunteer and has other obligations. Only expect responses to email
              requests sent Monday to Wednesday during business hours.
            </p>
            <p>
              <strong>If you need something, plan ahead.</strong>
            </p>
          </div>

          {/* Email policy card */}
          <div className="p-6 md:p-8 border border-l-4 border-l-primary rounded-lg bg-muted dark:bg-neutral-900 mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Email Policy</h2>
            <p className="text-muted-foreground mb-4">
              It is very common to send email at any hour, every day of the year. Here, that is not OK. Email is
              about respect for other people&apos;s time. Three simple rules:
            </p>
            <ul className="space-y-3 mb-4">
              <li className="flex gap-3">
                <MailX className="w-5 h-5 mt-0.5 shrink-0 text-primary" />
                <span><strong>No email on weekends.</strong></span>
              </li>
              <li className="flex gap-3">
                <MailX className="w-5 h-5 mt-0.5 shrink-0 text-primary" />
                <span><strong>No email late at night.</strong></span>
              </li>
              <li className="flex gap-3">
                <MailX className="w-5 h-5 mt-0.5 shrink-0 text-primary" />
                <span><strong>No email on holidays.</strong></span>
              </li>
            </ul>
            <p className="text-muted-foreground mb-6">
              If a thought comes to you after hours, draft it, save it, and send it during working hours. Nearly
              every message can wait. Please watch the short film below. It explains why this matters.
            </p>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/eSdrYUhtyfM?si=MAk9_I4cDy-nAiAI&enablejsapi=1"
                title="My Email Policy (Professor Bear)"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Header */}
      <section className="w-full py-12 md:py-20 bg-muted dark:bg-neutral-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
              Fellows Program
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join our global community of talented volunteers dedicated to using AI for humanitarian causes.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <PrimaryButton href="/contact">Apply Now</PrimaryButton>
              <SecondaryButton href="/projects">View Projects</SecondaryButton>
              <SecondaryButton href="/donate">Support Fellows</SecondaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* About the Program */}
      <section className="w-full py-12 md:py-20 bg-background dark:bg-neutral-800">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="grid gap-12">
            <section>
              <h2 className="text-3xl font-bold mb-6">About the Project</h2>
              <div className="prose prose-lg dark:prose-invert">
                <p>
                  The Humanitarians AI Fellows Program connects skilled volunteers with meaningful AI projects addressing real-world challenges. Fellows contribute their expertise while gaining valuable experience, mentorship, and professional recognition.
                </p>
                <p>
                  Our structured program ensures accountability through regular documentation, providing verifiable evidence of your contributions for recommendation letters and professional verification. Join our community of innovators using technology to create positive social impact through collaborative, open-source development.
                </p>
              </div>
            </section>

            <section aria-labelledby="frictional-logs">
              <h2 id="frictional-logs" className="scroll-mt-24 text-3xl font-bold mb-6">Frictional Logs</h2>
              <div className="prose prose-lg dark:prose-invert mb-8">
                <p>
                  Every piece of work carries a <strong>Frictional log</strong> — a short, dated,
                  honest record of what was tried, where the work resisted, what was done about it,
                  and what was learned. It lives in that work&apos;s own folder in the{" "}
                  <a
                    href={FELLOWS_REPO}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:text-primary"
                  >
                    fellows repository
                  </a>{" "}
                  beside the evidence it describes. Think of it as a diary: what you did this week, including the things that didn&apos;t work.
                </p>
                <p>
                  <strong>It isn&apos;t graded and it isn&apos;t a performance review, but it is required: a new entry every week.</strong> It exists because a finished artifact no longer shows
                  the learning behind it — a working script, a rendered film, a clean repository can now
                  be produced without the process they used to be evidence of. The log is how the training
                  stays visible: it is documentation of practical learning, kept for the Fellow&apos;s own
                  record and for the program&apos;s.
                </p>
                <p>
                  For Fellows on OPT or other practical-training status, this record is the program&apos;s
                  contemporaneous documentation that the work is real, is related to the field of study,
                  and is supervised. A weekly entry written at the time is worth far more than a summary
                  reconstructed months later, when the specifics — which is what makes a record credible —
                  are gone. Fellows remain responsible for whatever their own school&apos;s international
                  office requires; this supplements those obligations rather than replacing them.
                </p>
              </div>

              <div className="p-6 md:p-8 border border-l-4 border-l-primary rounded-lg bg-muted dark:bg-neutral-900 mb-8">
                <h3 className="text-lg font-bold mb-3">What a weekly entry contains</h3>
                <p className="text-muted-foreground mb-4">
                  Five short answers. Bullet fragments are fine — this is a log, not an essay. Ten
                  minutes a week, written while you work rather than at the end of it.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex gap-3">
                    <CalendarDays className="w-5 h-5 mt-0.5 shrink-0 text-primary" />
                    <span>
                      <strong>The date, and what you were working on.</strong> Label any entry written
                      later than the week it describes.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <FlaskConical className="w-5 h-5 mt-0.5 shrink-0 text-primary" />
                    <span>
                      <strong>What you tried, and what you expected.</strong> The expectation is the part
                      people skip. Without it, nothing can turn out to be surprising.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <NotebookPen className="w-5 h-5 mt-0.5 shrink-0 text-primary" />
                    <span>
                      <strong>Where it resisted, and what you did next.</strong> Name the actual thing —
                      the beat that would not render, the number that did not match. Dead ends are worth
                      more here than the fix.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Bot className="w-5 h-5 mt-0.5 shrink-0 text-primary" />
                    <span>
                      <strong>What Claude or another person contributed</strong> — and what you accepted,
                      changed, or rejected. AI use is expected here; undocumented AI use is the thing to
                      avoid.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Lightbulb className="w-5 h-5 mt-0.5 shrink-0 text-primary" />
                    <span>
                      <strong>What you understand now, and what you still do not.</strong> Naming something
                      unresolved is a feature of a good entry, not a gap in it.
                    </span>
                  </li>
                </ul>

                <h3 className="text-lg font-bold mb-3">Where it goes</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <FolderGit2 className="w-5 h-5 mt-0.5 shrink-0 text-primary" />
                    <span>
                      One <code className="text-sm">FRICTIONAL.md</code> per work folder —
                      <code className="text-sm">fellows/first-name-last-initial/YYYY-MM-DD-slug/</code>.
                      Each one logs the process behind <em>that</em> piece of work and sits beside the
                      evidence it describes. Append dated entries as you go; never rewrite an earlier one. Each week, add a dated entry to the FRICTIONAL.md in every work folder you worked in that week.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <GitCommitHorizontal className="w-5 h-5 mt-0.5 shrink-0 text-primary" />
                    <span>
                      Point each entry at something a reader can open — a commit, a beat sheet, a review
                      note, a capture in that same folder. The commit history is itself part of the record,
                      so commit as you work rather than in one batch at the end.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <ShieldCheck className="w-5 h-5 mt-0.5 shrink-0 text-primary" />
                    <span>
                      No credentials, no private conversations, no personal data about anyone else. If a
                      week was quiet, write that it was quiet and say what you checked. An honest thin
                      week is a good entry; an invented busy one is not.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-4">
                <PrimaryButton href={FELLOWS_REPO}>Open the Fellows Repository</PrimaryButton>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 border rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Real-World Impact</h3>
                  <p className="text-muted-foreground">
                    Work on cutting-edge AI projects with direct humanitarian applications, from enhancing literacy through music to developing accessible AI interfaces for underserved communities.
                  </p>
                </div>
                <div className="p-6 border rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Professional Development</h3>
                  <p className="text-muted-foreground">
                    Build your portfolio with documented contributions, receive mentorship from industry experts, and gain valuable skills in project management, documentation, and collaborative development.
                  </p>
                </div>
                <div className="p-6 border rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Entrepreneurship Pathway</h3>
                  <p className="text-muted-foreground">
                    Explore opportunities to transform volunteer projects into commercial ventures through our dedicated Entrepreneurship Program, with support for business model development and access to potential investors.
                  </p>
                </div>
                <div className="p-6 border rounded-lg">
                  <h3 className="text-xl font-bold mb-3">Global Community</h3>
                  <p className="text-muted-foreground">
                    Connect with a diverse network of talented professionals committed to using AI for good, participating in team collaborations and community events that expand your professional horizons.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Projects pointer */}
      <section className="w-full py-12 md:py-20 bg-muted dark:bg-neutral-900">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="p-6 md:p-8 border border-l-4 border-l-primary rounded-lg bg-background dark:bg-neutral-800">
            <h2 className="text-2xl font-bold mb-4">Our Projects</h2>
            <p className="text-muted-foreground mb-6">
              Every project Fellows can join is listed on the{" "}
              <Link href="/projects" className="underline underline-offset-4 text-foreground hover:text-primary">
                Projects page
              </Link>
              .
            </p>
            <PrimaryButton href="/projects">View Projects</PrimaryButton>
          </div>
        </div>
      </section>
    </div>
  )
}
