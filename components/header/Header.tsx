export const Header = () => {
  return (
    <nav className="flex justify-center items-center py-10 w-full max-w-7xl px-8">
      <div className="max-w-7xl flex justify-between w-full">
        <p className="font-bold text-2xl">DPRDS</p>

        <ul className="gap-10 items-center hidden md:flex">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#works">Works</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
