export const Experience = () => {
  return (
    <section
      id="about"
      className="w-full max-w-7xl px-8 py-8 flex flex-col gap-8 md:py-22.5"
    >
      <h2 className="text-[32px] font-semibold md:text-[40px] w-full max-w-125 leading-10">
        I’ve worked with some amazing companies
      </h2>
      <div className="flex flex-col gap-4 md:gap-8">
        <div>
          <strong className="text-[24px]">Goodfrontend, LTD</strong>
          <p className="text-[14px]">Sept 8, 2022</p>
        </div>

        <div className="flex flex-col gap-2 md:gap-2">
          <strong>Associate Software Engineer</strong>
          <p>
            Designed, developed, and maintained responsive, user-friendly web
            interfaces by handling UI implementation, building reusable
            components, integrating APIs, optimizing performance, ensuring
            cross-browser compatibility, and collaborating with cross-functional
            teams to deliver high-quality applications.
          </p>
        </div>
      </div>
    </section>
  )
}
