"use client"

import Link from "next/link"
import { footerSections } from "@/data/project-directory"
import ThemeToggle from "@/components/ThemeToggle"

export default function Footer() {
 const currentYear = new Date().getFullYear()

 return (
   <footer className="w-full border-t bg-background">
     <div className="container px-4 md:px-6 mx-auto py-12">
       <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
         {/* Company Info Section */}
         <div className="md:col-span-3">
           <div className="max-w-sm">
             <Link href="/" className="flex items-center space-x-2">
               <span className="text-xl font-bold tracking-tighter">Humanitarians AI</span>
             </Link>
             <p className="mt-4 text-sm text-muted-foreground">
               Humanitarians AI Incorporated
               <br />A 501(c)(3) nonprofit organization
               <br />State ID: 001846362 | EIN: 33-1984805
               <br />Humanitarians AI teaches what AI cannot do — and documents that learning honestly, week by week, as it happens.
             </p>
             <div className="mt-6 flex space-x-4 items-center">
               <Link href="https://www.youtube.com/@humanitariansai" className="text-sm hover:text-primary transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block">
                   <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                   <path d="m10 15 5-3-5-3z"/>
                 </svg>
               </Link>
               <Link href="https://open.spotify.com/artist/3cj3R4pDpYQHaWx0MM2vFV" className="text-sm hover:text-primary transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block">
                   <circle cx="12" cy="12" r="10"/>
                   <path d="M8 14.5c1.5 1 4 1 5.5 0"/>
                   <path d="M8 11c2 1 5 1 7 0"/>
                   <path d="M8.5 7.5c2.5 1 6.5 1 9 0"/>
                 </svg>
               </Link>
               <Link href="https://www.linkedin.com/company/105696953/" className="text-sm hover:text-primary transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block">
                   <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                   <rect width="4" height="12" x="2" y="9" />
                   <circle cx="4" cy="4" r="2" />
                 </svg>
               </Link>
               <Link href="mailto:hr@humanitarians.ai" className="text-sm hover:text-primary transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block">
                   <rect width="20" height="16" x="2" y="4" rx="2" />
                   <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                 </svg>
               </Link>
               {/* Removing Twitter Logo until it's up and running
               <Link href="https://twitter.com/humanitariansai" className="text-sm hover:text-primary transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block">
                   <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                 </svg>
               </Link>
               */}
               <ThemeToggle />
             </div>
           </div>
         </div>

         {/* Links Sections */}
         <div className="md:col-span-9 min-w-0 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-x-6 gap-y-8">
           {footerSections.map(section => (
             <div key={section.title} className="space-y-4 min-w-0 break-words">
               <h3 className="text-lg font-semibold">{section.title}</h3>
               <ul className="space-y-2">
                 {section.links.map(link => (
                   <li key={link.label}><Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">{link.label}</Link></li>
                 ))}
               </ul>
             </div>
           ))}

           {/* Legal & Privacy */}
           <div className="space-y-4">
             <h3 className="text-lg font-semibold">Legal & Privacy</h3>
             <ul className="space-y-2">
               <li><Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
               <li><Link href="/privacy#cookies" className="text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</Link></li>
               <li><Link href="/terms-of-service" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
               <li><Link href="/compliance" className="text-muted-foreground hover:text-foreground transition-colors">Ad Grants Compliance</Link></li>
             </ul>
           </div>
         </div>
       </div>

       {/* Privacy Policy Summary */}
       <div className="mt-12 pt-8 border-t">
         <div className="max-w-3xl mx-auto text-center">
           <p className="text-sm text-muted-foreground">
             At Humanitarians AI, we respect your privacy and are committed to protecting your personal information. We collect
             only the information necessary to provide our services. For complete details, please read our{' '}
             <Link href="/privacy" className="text-primary hover:underline">full privacy policy</Link>.
           </p>
         </div>
       </div>

       {/* Ad Grants Compliance */}
       <div className="mt-8 pt-6 border-t">
         <div className="max-w-3xl mx-auto text-center">
           <p className="text-sm text-muted-foreground">
             All images featured on this website are either taken by Humanitarians AI photographers or AI-generated 
             specifically for our organization. We maintain proper documentation for all visual and written content 
             as required by Google Ad Grants Policy. Humanitarians AI respects intellectual property rights and does 
             not use copyrighted materials without appropriate permission or licensing. For questions regarding our 
             content or to request permission to use our materials, please <Link href="mailto:hr@humanitarians.ai" className="text-primary hover:underline">contact us</Link>.
           </p>
         </div>
       </div>

       {/* Contact Information & Transparency */}
       <div className="mt-6 text-center">
         <p className="text-sm text-muted-foreground">
           <strong>Contact Us:</strong> Humanitarians AI | <a href="mailto:hr@humanitarians.ai" className="text-primary hover:underline">hr@humanitarians.ai</a>
         </p>
         <p className="mt-2 text-sm text-muted-foreground">
           <strong>When We&apos;re Open:</strong> Monday to Wednesday, business hours. Our board is 100% volunteer, so only expect replies to emails sent Monday to Wednesday.{' '}
           <Link href="/contact" className="text-primary hover:underline">Plan ahead</Link>.
         </p>
         <p className="mt-2 text-sm text-muted-foreground">
           Support our mission by <Link href="/donate" className="text-primary hover:underline">donating</Link> today. 
           100% of all donations support our direct operational costs, including program expenses, legal fees, and staff salaries to advance our mission.
         </p>
       </div>

       {/* Copyright */}
       <div className="mt-8 text-center text-sm text-muted-foreground">
         &copy; 2024 - {currentYear} Humanitarians AI. All rights reserved. | <Link href="/compliance" className="text-primary hover:underline">Ad Grants Compliance</Link>
       </div>
     </div>
   </footer>
 )
}
