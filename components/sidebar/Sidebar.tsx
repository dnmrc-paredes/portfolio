import { useToggle } from "@/contexts/useToggle"
import Image from "next/image"

export const Sidebar = () => {
  const { toggle } = useToggle()

  return (
    <div className="fixed h-svh top-0 w-full right-0 z-1 bg-white inline sm:w-1/2  md:hidden border-l-2 border-black">
      <div className="py-10 max-w-7xl px-8 flex justify-end">
        <button className="cursor-pointer" onClick={toggle}>
          <Image alt="close menu" src="/close.svg" width={30} height={30} />
        </button>
      </div>
      <ul className="flex flex-col gap-4 items-center">
        <li className="text-[28px] font-bold">
          <a href="#about">About</a>
        </li>
        <li className="text-[28px] font-bold">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  )
}
