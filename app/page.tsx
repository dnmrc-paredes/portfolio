import { Header } from "@/components/header/Header"
import { Hero } from "@/components/hero/Hero"

export default function Home() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <Header />
      <Hero />
      <section></section>
      <section></section>
      <section></section>
      <section></section>
    </div>
  )
}
