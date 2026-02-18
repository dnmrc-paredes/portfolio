import Image from "next/image"

export const Hero = () => {
  return (
    <section className="w-full max-w-7xl py-8 flex flex-col gap-8 px-8 md:py-22.5">
      <div className="w-full flex flex-col gap-7 md:flex-row md:gap-0">
        <div className="w-full flex flex-col gap-8 md:max-w-131.5">
          <div className="flex flex-col gap-4 md:gap-8">
            <h1 className="text-[42px] leading-10 font-black md:text-[72px] md:leading-18">
              Hello there, I’m DPRDS
            </h1>
            <p>
              I&apos;m a curious <strong>software engineer</strong> striving to
              improve every day. I love making user-friendly web apps that
              everyone can enjoy. I love accessibility, ensuring my apps are
              easy for everyone to use.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:flex-row">
            <a
              href="#contact"
              className="py-4 px-7 border-2 border-transparent text-center bg-[#7522CA] rounded-[10px] text-white font-bold cursor-pointer hover:bg-white hover:text-[#7522CA] hover:border-[#7522CA]"
            >
              Get in touch
            </a>
            <a
              href="/documents/paredes-cv.pdf"
              download={true}
              className="py-4 px-7 border-2 border-transparent font-bold flex gap-1 rounded-[10px] items-center justify-center cursor-pointer hover:border-2 hover:border-black"
            >
              {" "}
              <Image
                alt="resume"
                src="/document-text.svg"
                width={28}
                height={29}
              />{" "}
              Resume
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center w-full">
          <div className="relative w-80.75 h-105.25">
            <Image alt="person vector image" src="/person.svg" fill={true} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-medium">current favorite tech stack/tools</p>
        <ul className="flex gap-2 flex-wrap">
          <li className="w-8 h-8 relative">
            <Image alt="" src="/logos/javascript-original.svg" fill={true} />
          </li>
          <li className="w-8 h-8 relative">
            <Image alt="" src="/logos/typescript-original.svg" fill={true} />
          </li>
          <li className="w-8 h-8 relative">
            <Image alt="" src="/logos/react-original.svg" fill={true} />
          </li>
          <li className="w-8 h-8 relative">
            <Image alt="" src="/logos/nextjs.svg" fill={true} />
          </li>
          <li className="w-8 h-8 relative">
            <Image alt="" src="/logos/nodejs-original.svg" fill={true} />
          </li>
          <li className="w-8 h-8 relative">
            <Image alt="" src="/logos/storybook-original.svg" fill={true} />
          </li>
          <li className="w-8 h-8 relative">
            <Image alt="" src="/logos/tailwindcss-plain.svg" fill={true} />
          </li>
          <li className="w-8 h-8 relative">
            <Image alt="" src="/logos/sanity.svg" fill={true} />
          </li>
          <li className="w-8 h-8 relative">
            <Image alt="" src="/logos/contentful.svg" fill={true} />
          </li>
          <li className="w-8 h-8 relative">
            <Image alt="" src="/logos/graphql-plain.svg" fill={true} />
          </li>
          <li className="w-8 h-8 relative">
            <Image alt="" src="/logos/postman.svg" fill={true} />
          </li>
          <li className="w-8 h-8 relative">
            <Image alt="" src="/logos/git-plain.svg" fill={true} />
          </li>
        </ul>
      </div>
    </section>
  )
}
