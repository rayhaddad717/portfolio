import Button from "@/components/Button";
import Link from "next/link";

export default function AboutMe() {
  return (
    <div className="mt-[9rem] px-[var(--page-padding)] flex flex-col gap-[4rem]">
      <div className="upper flex justify-between relative lg:flex-row flex-col lg:gap-0 gap-[2rem]">
        <div className="left flex flex-col gap-[1rem] lg:w-[50%] w-[80%]">
          <h4 className="w-fit px-[5px] text-[var(--text-primary)] border-[var(--color-green)] border-[1px] rounded-3xl font-medium text-[20px]">
            Welcome
          </h4>
          <h1 className="sm:text-[50px] text-[40px] text-[var(--color-light-black)] sm:leading-[70px] leading-[53px] font-semibold">
            I have{" "}
            <span className="text-[var(--text-primary)]">Full Stack</span>{" "}
            Development Experience
          </h1>
          <p className="text-[var(--color-gray)] text-[1rem]">
            I&apos;m Ray, a self-taught Full Stack developer. I&apos;ve been
            helping businesses to solve their problems with my engineering for
            around 2 years.
          </p>
          <div className="flex gap-[1.5rem]">
            {/* <a
              href="#contactme"
              className="rounded-lg bg-[var(--color-green)] text-[var(--color-white)] px-[24px] py-[16px]"
            >
              Contact Me
            </a> */}
            <a href="#contactme">
              <Button title="Contact Me" />
            </a>
            <a className="flex items-center font-medium" href="#portfolio">
              View Portfolio
              <img
                className="ml-[8px] inline cursor-pointer"
                src="svgs/arow_up_left.svg"
                alt="portfolio"
              />
            </a>
          </div>
        </div>
        <div className="right relative">
          <div className="rounded-md lg:h-[350px] h-[80vw] lg:w-[350px] w-[80vw] bg-[var(--color-green)] relative">
            <img
              src="images/me.png"
              className="lg:w-[80%] w-[70vw]  absolute lg:left-[10%] left-[18px] bottom-0 z-20"
            />
          </div>
          <div className="rounded-md absolute border-[4px] border-[var(--color-black)] lg:h-[350px] h-[80vw] lg:w-[350px] w-[80vw] left-[10%] top-[10%] z-10 lg:top-[52px] lg:left-[-52px]"></div>
        </div>

        <div className="extreme-right absolute right-[-7%] flex flex-col gap-[32px] items-center">
          <p className="text-[var(--color-green)] writing-mode-vertical-lr font-medium">
            Follow me on :
          </p>
          <div className="w-[1px] h-[80px] bg-[var(--color-green)]"></div>
          <img
            className="w-[20px] h-[20px]"
            src="svgs/facebook.svg"
            alt="facebook"
          />
          <Link href="https://www.instagram.com/rayhaddad11">
            <img
              className="w-[20px] h-[20px]"
              src="svgs/instagram.svg"
              alt="instragram"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/ray-haddad/">
            <img
              className="w-[20px] h-[20px]"
              src="svgs/linkedin.svg"
              alt="linkedin"
            />
          </Link>
        </div>
      </div>
      <ul className="lower my-16 flex justify-evenly w-full sm:gap-0 gap-[0.5rem]">
        <li className="flex flex-col justify-between ">
          <h2 className="w-min text-[var(--text-primary)] text-[23px] sm:text-[48px] font-semibold font-pop poppins">
            20+
          </h2>
          <p className="w-fit break-word poppins text-[15px] sm:text-[28px] text-[var(--color-black)]">
            Technologies
          </p>
        </li>
        <li className="w-[2px] h-[80px] mt-auto bg-[var(--color-green)]"></li>
        <li className="flex flex-col justify-between ">
          <h2 className="w-min text-[var(--text-primary)] text-[23px] sm:text-[48px] font-semibold font-pop poppins">
            10+
          </h2>
          <p className="w-fit break-word  poppins text-[15px] sm:text-[28px] text-[var(--color-black)]">
            Projects completed
          </p>
        </li>
        <li className="w-[2px] h-[80px] mt-auto bg-[var(--color-green)]"></li>
        <li className="flex flex-col justify-between ">
          <h2 className="w-min text-[var(--text-primary)] text-[23px] sm:text-[48px] font-semibold font-pop poppins">
            2+
          </h2>
          <p className="w-fit break-word  poppins text-[15px] sm:text-[28px] text-[var(--color-black)]">
            Years of experience
          </p>
        </li>
      </ul>
    </div>
  );
}
