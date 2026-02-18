import Image from "next/image"

export const AboutMe = () => {
  return (
    <section
      id="about"
      className="w-full max-w-7xl px-8 py-8 flex flex-col gap-8 order md:flex-row-reverse md:py-22.5"
    >
      <div className="flex flex-col w-full max-w-145 gap-4 md:gap-9.25">
        <h2 className="text-[42px] leading-10 font-black md:text-[72px] md:leading-18">
          Nice to meet you!
        </h2>
        <p>
          Hello, My name is <strong>Dinmarc Paredes</strong> and I’m a{" "}
          <strong>Software Engineer</strong> with over 3 years of experience,
          having started my journey in 2020 driven by curiosity about how
          websites work and a passion for turning ideas into interactive digital
          experiences. I specialize in building responsive, user-friendly web
          applications and enjoy helping clients achieve their goals by
          delivering clean, efficient, and impactful solutions.
        </p>
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="relative w-90 h-80">
          <Image alt="person coding" src="/developer.svg" fill={true} />
        </div>
      </div>
    </section>
  )
}
