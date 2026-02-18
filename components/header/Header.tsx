"use client"

import Image from "next/image"
import { useToggle } from "@/contexts/useToggle"
import { Sidebar } from "../sidebar/Sidebar"

export const Header = () => {
  const { isOpen, toggle } = useToggle()

  return (
    <nav className="flex justify-center items-center py-10 w-full max-w-7xl px-8">
      <div className="max-w-7xl flex justify-between w-full">
        <p className="font-bold text-2xl">DPRDS</p>

        <button className="cursor-pointer md:hidden" onClick={toggle}>
          <Image
            alt="close menu"
            src={isOpen ? "/close.svg" : "/hamburger-menu.svg"}
            width={30}
            height={30}
          />
        </button>

        <ul className="gap-10 items-center hidden md:flex">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      {isOpen && <Sidebar />}
    </nav>
  )
}
