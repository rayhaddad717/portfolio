export default function MySkills() {
  return (
    <div
      id="skills"
      className="mt-[1rem] flex sm:flex-row flex-col justify-between  px-[var(--page-padding)] sm:gap-0 gap-[2rem]"
    >
      <div className="left flex flex-col justify-between  gap-[2rem]">
        <h4 className="w-fit px-[5px] text-[var(--text-primary)] border-[var(--color-green)] border-[1px] rounded-3xl font-medium text-[20px]">
          My Skills
        </h4>
        <h2 className="font-semibold text-[40px] text-[var(--color-light-black)] leading-[54px]">
          Why Hire Me For Your Next{" "}
          <p className="text-[var(--text-primary)] inline">Project?</p>
        </h2>
        <p className="text-[var(--color-gray)] text-[1rem]">
          I&apos;m a specialist in UI/UX design. My passion is designing &
          solving problems through user experience and research.
        </p>
        <a
          href="#contactme"
          className="w-fit rounded-lg bg-[var(--color-green)] text-[var(--color-white)] px-[24px] py-[16px]"
        >
          Hire Me
        </a>
      </div>
      <div className="right flex gap-[1rem]  sm:w-[40%]">
        <div className="right-left flex flex-col justify-between sm:gap-0 gap-[1.5rem]">
          <div className="flex flex-col gap-[1rem]">
            <img
              alt="design"
              src="svgs/diamond.svg"
              className="w-[28px] h-[28px]"
            />
            <h4 className="text-[var(--color-black)] poppins font-semibold text-[20px] leading-[20px]">
              Visual Design
            </h4>
            <p className="text-[var(--color-gray)] text-[14px] ">
              Create user interface design with unique & modern ideas
            </p>
          </div>

          <div className="flex flex-col gap-[1rem]">
            <img
              alt="education"
              src="svgs/education.svg"
              className="w-[28px] h-[28px]"
            />
            <h4 className="text-[var(--color-black)] poppins font-semibold text-[20px] leading-[20px]">
              UX Research
            </h4>
            <p className="text-[var(--color-gray)] text-[14px] ">
              Create digital user products with updated ideas
            </p>
          </div>
        </div>
        <div className="right-right flex flex-col justify-center">
          <div className="flex flex-col gap-[1rem]">
            <img
              alt="vitals"
              src="svgs/vitals.svg"
              className="w-[28px] h-[28px]"
            />
            <h4 className="text-[var(--color-black)] poppins font-semibold text-[20px] leading-[20px]">
              Design Prototype
            </h4>
            <p className="text-[var(--color-gray)] text-[14px] ">
              Create advance design prototype with Figma apps.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
