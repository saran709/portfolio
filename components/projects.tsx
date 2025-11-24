"use client"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const projects: {
  title: string
  description: string
  tags: string[]
  github: string
  featured?: boolean
  live?: string
}[] = [
  {
    title: "Genfolio",
    description: "an intelligent portfolio-building platform that automatically generates personalized, professional portfolios for students and job seekers.",
    tags: ["JavaScript", "Type Script", "Git & GitHub"],
    github: "https://github.com/saran709/Genfolio",
    featured: true,
  },
  {
    title: "Online Voting System using Python",
    description: "a secure, scalable web application built with Python to enable authenticated voters to cast ballots remotely while preserving integrity, privacy, and auditability.",
    tags: ["Python", "Django", "GUI"],
    github: "https://github.com/saran709/Online_Voting_System_using_Python",
  },
  {
    title: "Timetable Generator",
    description: "optimized, conflict-free class schedules by assigning courses, instructors, rooms, and time slots automatically",
    tags: ["HTML5", "Bootstrap", "Plain JavaScript", "SheetJS"],
    github: "https://github.com/saran709/timetable-generator",
  },
  // {
  //   title: "Uber Clone",
  //   description: "Uber Clone app.",
  //   tags: ["React", "TypeScript", "Storybook", "Vitest"],
  //   github: "https://github.com/saran709/Uber-Clone",
  // },
  // {
  //   title: "Data Analytics Dashboard",
  //   description: "Real-time data visualization dashboard with interactive charts and custom metrics.",
  //   tags: ["Next.js", "Recharts", "Drizzle ORM", "PostgreSQL"],
  //   github: "#",
  //   live: "#",
  // },
  // {
  //   title: "E-commerce Platform",
  //   description: "Full-stack e-commerce solution with product management, payments, and inventory.",
  //   tags: ["Next.js", "Stripe", "Prisma", "MongoDB"],
  //   github: "#",
  //   live: "#",
  // },
]

export function Projects() {
  return (
    <section id="projects" className="relative pt-12 pb-8 sm:pt-16 sm:pb-12 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">Featured Projects</h2>
          <p className="text-gray-400 text-lg">A selection of my latest work and side projects</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <motion.div
              className="h-full"
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/50 group overflow-hidden">
                  <CardHeader>
                  <CardTitle className="group-hover:text-white transition-colors">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 mt-6 pt-6 border-t border-gray-800">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-400 mb-3">For more projects, visit my GitHub profile.</p>
          <a
            href="https://github.com/saran709"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-200 rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors"
          >
            <Github className="w-4 h-4" />
            View more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
