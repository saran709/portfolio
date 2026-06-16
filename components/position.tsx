"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const positions = [
  {
    title: "Full Stack Web Developer",
    company: "Websites corporations",
    period: "May 2026 — Present",
    description: "Part-time full stack development role focused on building and maintaining web applications.",
    tags: ["Full Stack", "Part-time", "Web Development"],
    link: "",
  },
  {
    title: "Youth Mentor",
    company: "GeeksforGeeks",
    period: "Mar 2026 — Present",
    description: "Mentoring students, sharing technical knowledge, and supporting learning activities through GeeksforGeeks.",
    tags: ["Business Development", "Engineering", "Mentorship"],
    link: "",
  },
  {
    title: "Student Brand Ambassador",
    company: "GeeksforGeeks",
    period: "Jan 2026 — Present",
    description: "Representing GeeksforGeeks as a student brand ambassador and supporting outreach activities.",
    tags: ["Brand Ambassadorship", "Outreach"],
    link: "",
  },
  {
    title: "Generative AI Intern",
    company: "SURE proED",
    period: "Jan 2026 — May 2026",
    description: "Internship focused on Generative AI, Google Colab, and project management tasks.",
    tags: ["Generative AI", "Google Colab", "Project Management"],
    link: "",
  },
  {
    title: "Java Full Stack Intern",
    company: "Amdox Technologies",
    period: "Dec 2025 — Feb 2026",
    description: "Internship focused on Java full stack development and related project work.",
    tags: ["Java", "Full Stack", "Internship"],
    link: "",
  },
  {
    title: "AI + Sustainability Intern",
    company: "1M1B (1 Million for 1 Billion)",
    period: "Dec 2025 — Jan 2026",
    description: "Worked on AI and sustainability-focused internship activities and completed program requirements.",
    tags: ["Artificial Intelligence", "Generative AI", "Sustainability"],
    link: "",
  },
  {
    title: "Development Team Lead",
    company: "Sricoresolutions (Freelance)",
    period: "Jan 2025 — Present",
    description:
      "Leading strategic growth initiatives for Sricoresolutions — overseeing training programs, project management, and web development services. Driving client engagement and business development while delivering learning solutions.",
    tags: ["Leadership", "Java", "Mobile Applications"],
    link: "",
  },
  {
    title: "Club Secretary",
    company: "Paavai Speakers",
    period: "Jan 2025 — Present",
    description: "Organizing club activities and events as Club Secretary.",
    tags: ["Leadership", "Public Speaking"],
    link: "",
  },
  {
    title: "Full-Stack Web Developer Intern",
    company: "Draupathi IT Solutions ",
    period: "Jan 2025 — Jan 2026",
    description: "Internship focused on software project management, coordination and web development tasks.",
    tags: ["Project Management", "Web Development"],
    link: "",
  },
  {
    title: "Full Stack Development Intern",
    company: "Cognifyz Technologies (Internship)",
    period: "Oct 2025 — Nov 2025",
    description: "Working on full-stack features and improving product functionality for Cognifyz Technologies during the internship.",
    tags: ["Full Stack", "JavaScript", "Backend"],
    link: "",
  },
  {
    title: "React Developer Intern",
    company: "ELiteTech Intern",
    period: "Oct 2025 — Nov 2025",
    description: "React development internship focused on building user interfaces and project delivery.",
    tags: ["React.js", "Project Management", "Web Development"],
    link: "",
  },
  {
    title: "Member",
    company: "InnoSphere",
    period: "Oct 2025 — Present",
    description: "Active member of InnoSphere contributing to local innovation and technical events.",
    tags: ["Events", "Innovation"],
    link: "",
  },
  {
    title: "Student Ambassador",
    company: "Google",
    period: "Oct 2025 — Jan 2026",
    description: "Representing Google as a Student Ambassador, participating in developer outreach and community events.",
    tags: ["Community", "Outreach"],
    link: "",
  },
  {
    title: "Conversational Data Analysis with LLMs",
    company: "VOIS",
    period: "Sep 2025 — Oct 2025",
    description: "Internship experience centered on data analysis, data handling, and LLM-based workflows.",
    tags: ["Data Analysis", "Data Handling", "LLMs"],
    link: "",
  },
  {
    title: "Volunteering",
    company: "She Can Foundation",
    period: "Aug 2025 — Oct 2025",
    description: "Volunteering internship supporting professional communication activities.",
    tags: ["Volunteering", "Communication"],
    link: "",
  },
  {
    title: "Angular Full Stack Intern",
    company: "Infosys Springboard (Internship)",
    period: "Jul 2025 — Jan 2026",
    description: "Completed internship tasks focused on web development. Worked with AngularJS, Node.js and built REST APIs.",
    tags: ["AngularJS", "Node.js", "REST APIs"],
    link: "",
  },
  {
    title: "Full-Stack Developer Intern",
    company: "Accent Techno Soft",
    period: "Jun 2025 — Jul 2025",
    description: "Full-time internship focused on web development tasks and project support.",
    tags: ["HTML5", "PHP", "Web Development"],
    link: "",
  },
  {
    title: "Member",
    company: "Google Developer Student Clubs",
    period: "Jan 2024 — Present",
    description: "Member of GDSc, involved in developer events and community projects.",
    tags: ["Community", "Developer Tools"],
    link: "",
  },
  {
    title: "Web Development Intern",
    company: "Corizo Edutech Private Limited",
    period: "Sep 2024 — Oct 2024",
    description: "Remote web development internship focused on HTML, CSS, and front-end fundamentals.",
    tags: ["HTML5", "CSS", "Web Development"],
    link: "",
  },
]

export function Positions() {
  const [open, setOpen] = useState<number | null>(null)
  const linkedinExperienceUrl = "https://www.linkedin.com/in/saran709/details/experience/"

  return (
    <section id="positions" className="relative py-8 sm:py-12 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">Positions</h2>
          <p className="text-gray-400 text-lg">A compact timeline — click an item to expand details.</p>
          <a
            href={linkedinExperienceUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white"
          >
            <ExternalLink className="w-4 h-4" />
            View LinkedIn experience
          </a>
        </motion.div>

        <div className="relative grid grid-cols-1 gap-6">
          {/* extend the connector a bit so it reaches the first and last dots */}
          <div className="ml-6 pl-6 border-l border-gray-800 -mt-2 -mb-2 relative">
            {positions.map((pos, i) => {
              const isOpen = open === i
              return (
                <div key={pos.title + i} id={`position-${i}`} className="relative mb-6">
                  <button
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full text-left flex items-start gap-4"
                  >
                    <div className="-left-6 absolute top-1">
                      <span className={`inline-block w-3 h-3 rounded-full ${isOpen ? "bg-white" : "bg-gray-600"}`} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-white font-semibold">{pos.title}</h3>
                          <div className="text-sm text-gray-400">{pos.company} • <span className="text-gray-500">{pos.period}</span></div>
                        </div>
                        <div className="text-sm text-gray-400">{isOpen ? "-" : "+"}</div>
                      </div>
                    </div>
                  </button>

                  <motion.div
                    layout
                    initial={{ height: 0, opacity: 0 }}
                    animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 pl-4">
                      <p className="text-gray-400 mb-3">{pos.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {pos.tags.map((tag) => (
                          <span key={tag} className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-300">{tag}</span>
                        ))}
                      </div>
                      {pos.link || linkedinExperienceUrl ? (
                        <a href={pos.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white">
                          <ExternalLink className="w-4 h-4" />
                          View details
                        </a>
                      ) : null}
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
