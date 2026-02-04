export const Header = () => {
  return (
    <nav className="flex justify-center items-center py-10 w-full max-w-7xl">
      <div className="max-w-7xl flex justify-between w-full">
        <p className="font-bold text-2xl">DPRDS</p>

        <ul className="flex gap-10 items-center">
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
