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
          Hello, My name is Dinmarc Paredes and I am a software engineer with a
          passion for developing and building innovative solutions. My journey
          in web development began in 2019 when I was tasked by my professor
          with creating a personal website. This experience sparked my interest
          in the field, and since then, I have been honing my skills and
          expanding my knowledge of web development.
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
