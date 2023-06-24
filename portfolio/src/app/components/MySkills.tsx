import Button from "@/components/Button";
import Link from "next/link";

export default function MySkills() {
  return (
    <div
      id="skills"
      className="pt-4 mt-[1rem] flex sm:flex-row flex-col justify-between  px-[var(--page-padding)] sm:gap-0 gap-[2rem]"
    >
      <div className="left flex flex-col justify-between  gap-[2rem] sm:w-[50%]">
        <h4 className="w-fit px-[5px] text-[var(--text-primary)] border-[var(--color-green)] border-[1px] rounded-3xl font-medium text-[20px]">
          My Skills
        </h4>
        <h2 className="font-semibold text-[40px] text-[var(--color-light-black)] leading-[54px]">
          Why Hire Me For Your Next{" "}
          <p className="text-[var(--text-primary)] inline">Project?</p>
        </h2>
        <p className="text-[var(--color-gray)] text-[1rem]">
          I&apos;m a specialist in front and backend development. My passion is
          solving problems and creating new and exciting features.
        </p>
        {/* <Link
          href="skills"
          className="w-fit rounded-lg bg-[var(--color-green)] text-[var(--color-white)] px-[24px] py-[16px]"
        >
          My Skillset
        </Link> */}
        <Link href="skills">
          <Button title="My Skillset" />
        </Link>
      </div>
      <div className="right flex gap-[1rem]  sm:w-[40%]">
        <div className="right-left flex flex-col justify-between sm:gap-0 gap-[1.5rem] sm:w-[45%]">
          <div className="flex flex-col gap-[1rem]">
            <img
              alt="education"
              src="svgs/education.svg"
              className="w-[28px] h-[28px]"
            />
            <h4 className="text-[var(--color-black)] poppins font-semibold text-[20px] leading-[20px]">
              Fast Learner
            </h4>
            <p className="text-[var(--color-gray)] text-[14px] ">
              Always excited to learn new stuff, and to conquer new challenges.
            </p>
          </div>
          <div className="flex flex-col gap-[1rem]">
            <img
              alt="vitals"
              src="svgs/vitals.svg"
              className="w-[28px] h-[28px]"
            />
            <h4 className="text-[var(--color-black)] poppins font-semibold text-[20px] leading-[20px]">
              Hard Worker
            </h4>
            <p className="text-[var(--color-gray)] text-[14px] ">
              Always settings new goals to achieve.
            </p>
          </div>
        </div>
        <div className="right-right flex flex-col justify-center sm:w-[45%]">
          <div className="flex flex-col gap-[1rem]">
            <img
              alt="design"
              src="svgs/diamond.svg"
              className="w-[28px] h-[28px]"
            />
            <h4 className="text-[var(--color-black)] poppins font-semibold text-[20px] leading-[20px]">
              Good Under Pressure
            </h4>
            <p className="text-[var(--color-gray)] text-[14px] ">
              Able to handle pressure and keep stable output.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
