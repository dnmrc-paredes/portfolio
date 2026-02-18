import { Header } from "@/components/header/Header"
import { Hero } from "@/components/hero/Hero"
import { AboutMe } from "@/components/about-me/AboutMe"
import { Contact } from "@/components/contact/Contact"
import { Metadata } from "next"
import { ToggleProvider } from "@/contexts/useToggle"
import { Experience } from "@/components/experience/Experience"
import { Footer } from "@/components/footer/Footer"

export const metadata: Metadata = {
  title: "DPRDS | Software Engineer",
  description:
    "I'm a curious software engineer striving to improve every day. I love making user-friendly web apps that everyone can enjoy. I love accessibility, ensuring my apps are easy for everyone to use.",
  keywords: [
    "paredes",
    "dinmarc",
    "dinmarc paredes",
    "software engineer",
    "frontend enginneer",
    "web developer",
    "frontend developer",
    "software",
    "frontend",
    "dprds",
  ],
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
        <Footer />
      </ToggleProvider>
    </div>
  )
}
