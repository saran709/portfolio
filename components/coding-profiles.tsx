"use client"
import { motion } from "framer-motion"
import { Github } from "lucide-react"

export function CodingProfiles() {
  const profiles = [
    { name: "GitHub", url: "https://github.com/saran709", icon: <Github className="w-5 h-5" /> },
    { name: "LeetCode", url: "https://leetcode.com/your-username", icon: null },
    { name: "Codeforces", url: "https://codeforces.com/profile/your-username", icon: null },
    { name: "HackerRank", url: "https://www.hackerrank.com/your-username", icon: null },
    { name: "CodeChef", url: "https://www.codechef.com/users/your-username", icon: null },
  ]

  return (
    <section id="coding-profiles" className="py-12 sm:py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h3 className="text-2xl font-semibold text-white">Coding Profiles</h3>
          <p className="text-gray-400">Follow my coding activity and practice across platforms</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {profiles.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors"
            >
              <span className="inline-flex items-center justify-center w-6 h-6 text-gray-200">
                {p.icon ?? <span className="text-xs">{p.name[0]}</span>}
              </span>
              <span className="font-medium">{p.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
