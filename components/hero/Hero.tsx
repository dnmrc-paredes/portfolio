import Image from "next/image"

export const Hero = () => {
  return (
    <section className="w-full max-w-7xl py-22.5 flex flex-col gap-8">
      <div className="w-full flex">
        <div className="w-full max-w-131.5 flex flex-col gap-8">
          <div className="flex flex-col gap-8">
            <h1 className="text-[72px] leading-18 font-black">
              Hello there,
              <br />
              I’m DPRDS
            </h1>
            <p>
              I&apos;m a curious <strong>software engineer</strong> striving to
              improve every day. I love making user-friendly web apps that
              everyone can enjoy. I love accessibility, ensuring my apps are
              easy for everyone to use.
            </p>
          </div>

          <div className="flex gap-4">
            <button className="py-4 px-7 bg-[#7522CA] rounded-[10px] text-white">
              Get in touch
            </button>
            <button>Resume</button>
          </div>
        </div>

        <div className="flex justify-center items-center w-full">
          <div className="relative w-80.75 h-105.25">
            <Image alt="person vector image" src="/person.svg" fill={true} />
          </div>
        </div>
      </div>
      <div>
        <p className="font-medium">current favorite tech stack/tools</p>
        <ul className="flex gap-2">
          <li className="w-6 h-6 relative">
            <Image alt="" src="/logos/javascript-original.svg" fill={true} />
          </li>
          <li className="w-6 h-6 relative">
            <Image alt="" src="/logos/typescript-original.svg" fill={true} />
          </li>
          <li className="w-6 h-6 relative">
            <Image alt="" src="/logos/react-original.svg" fill={true} />
          </li>
          <li className="w-6 h-6 relative">
            <Image alt="" src="/logos/nextjs.svg" fill={true} />
          </li>
          <li className="w-6 h-6 relative">
            <Image alt="" src="/logos/nodejs-original.svg" fill={true} />
          </li>
          <li className="w-6 h-6 relative">
            <Image alt="" src="/logos/storybook-original.svg" fill={true} />
          </li>
          <li className="w-6 h-6 relative">
            <Image alt="" src="/logos/tailwindcss-plain.svg" fill={true} />
          </li>
          <li className="w-6 h-6 relative">
            <Image alt="" src="/logos/sanity.svg" fill={true} />
          </li>
          <li className="w-6 h-6 relative">
            <Image alt="" src="/logos/contentful.svg" fill={true} />
          </li>
          <li className="w-6 h-6 relative">
            <Image alt="" src="/logos/graphql-plain.svg" fill={true} />
          </li>
          <li className="w-6 h-6 relative">
            <Image alt="" src="/logos/postman.svg" fill={true} />
          </li>
          <li className="w-6 h-6 relative">
            <Image alt="" src="/logos/git-plain.svg" fill={true} />
          </li>
        </ul>
      </div>
    </section>
  )
}
