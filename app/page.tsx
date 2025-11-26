"use client"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { CodingProfiles } from "@/components/coding-profiles"
import { Positions } from "@/components/position"
import { Contact } from "@/components/contact"
import { Certificates } from "@/components/certificates"
import { Achievements } from "@/components/achievements"

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <About />
      <Projects />
      <CodingProfiles />
      <Positions />
      <Certificates />
      <Achievements />
      <Contact />
    </main>
  )
}
