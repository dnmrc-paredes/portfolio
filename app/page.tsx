import { Header } from "@/components/header/Header"
import { Hero } from "@/components/hero/Hero"
import { AboutMe } from "@/components/about-me/AboutMe"
import { Contact } from "@/components/contact/Contact"

export default function Home() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <Header />
      <Hero />
      <AboutMe />
      <Contact />
      <section></section>
      <section></section>
      <section></section>
    </div>
  )
}
