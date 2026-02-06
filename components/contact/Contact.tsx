import Image from "next/image"

export const Contact = () => {
  return (
    <section className="w-full max-w-7xl py-8 flex flex-col gap-8 px-8 md:py-22.5 md:gap-16">
      <div className="flex flex-col gap-4 md:gap-8">
        <h2 className="text-[32px] font-semibold md:text-[40px]">Sold Now?</h2>
        <p className="text-[16px] md:text-[28px]">
          Thank you for visiting my portfolio, I’m currently looking for a job
          as a software engineer. If you think that I am qualified to work at
          your company, send me an{" "}
          <a href="mailto:dnmrcprds@gmail.com">
            <strong>email</strong>
          </a>
          ✉️.
        </p>
      </div>

      <div className="flex flex-col gap-2 md:gap-4">
        <p className="text-[20px] font-medium">Connect with me online!</p>
        <ul className="flex items-center gap-4 md:gap-8">
          <li>
            <a
              href="https://github.com/dnmrc-paredes"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center"
            >
              <div>
                <Image
                  alt="github logo"
                  src="/socials/github.svg"
                  width={50}
                  height={50}
                />
              </div>
              <span>Github</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/dinmarc-paredes"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center"
            >
              <div>
                <Image
                  alt="linkedin logo"
                  src="/socials/linkedin.svg"
                  width={50}
                  height={50}
                />
              </div>
              <span>LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
