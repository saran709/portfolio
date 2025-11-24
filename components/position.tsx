"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const positions = [
  {
    title: "Student Ambassador",
    company: "Google",
    period: "Oct 2025 — Present",
    description:
      "Representing Google as a Student Ambassador, participating in developer outreach and community events, and helping students access Google resources.",
    tags: ["Community", "Outreach"],
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
    title: "Full Stack Development Intern",
    company: "Cognifyz Technologies (Internship)",
    period: "Oct 2025 — Present",
    description: "Working on full-stack features and improving product functionality for Cognifyz Technologies during the internship.",
    tags: ["Full Stack", "JavaScript", "Backend"],
    link: "",
  },
  {
    title: "Intern",
    company: "Infosys Springboard (Internship)",
    period: "Jul 2025 — Present",
    description: "Completed internship tasks focused on web development. Worked with AngularJS, Node.js and built REST APIs.",
    tags: ["AngularJS", "Node.js", "REST APIs"],
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
    title: "Assistant Sales Head",
    company: "Draupathi IT Solutions (Part-time)",
    period: "Mar 2025 — Present",
    description: "Supporting sales strategy and operations as Assistant Sales Head.",
    tags: ["Sales Management"],
    link: "",
  },
  {
    title: "Full Stack Developer",
    company: "Draupathi IT Solutions",
    period: "Dec 2024 — Present",
    description: "Developing full-stack web applications and contributing to ongoing projects remotely.",
    tags: ["Full Stack", "Web Development"],
    link: "",
  },
  {
    title: "Full-stack Web Developer Intern",
    company: "Draupathi IT Solutions (Internship)",
    period: "Sep 2024 — Nov 2024",
    description: "Internship focused on software project management, coordination and web development tasks.",
    tags: ["Project Management", "Web Development"],
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
    title: "Member",
    company: "Paavai Speakers",
    period: "Jan 2024 — Present",
    description: "Active member participating in speaking events and workshops.",
    tags: ["Public Speaking"],
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
]

export function Positions() {
  const [open, setOpen] = useState<number | null>(null)

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
                      {pos.link ? (
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
