import { Header } from "@/components/header/Header"
import { Hero } from "@/components/hero/Hero"
import { AboutMe } from "@/components/about-me/AboutMe"
import { Contact } from "@/components/contact/Contact"
import { Metadata } from "next"
import { ToggleProvider } from "@/contexts/useToggle"
import { Experience } from "@/components/experience/Experience"

export const metadata: Metadata = {
  title: "DPRDS | Software Engineer",
  description: "Welcome to my portfolio website.",
}

export default function Home() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <ToggleProvider>
        <Header />
        <Hero />
        <AboutMe />
        <Experience />
        <Contact />
      </ToggleProvider>
    </div>
  )
}
