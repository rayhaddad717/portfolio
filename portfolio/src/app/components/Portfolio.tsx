import Button from "@/components/Button";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div
      id="portfolio"
      className="pt-4 mt-[4rem] flex justify-between  px-[var(--page-padding)] sm:flex-row flex-col"
    >
      <div className="left flex flex-col justify-between sm:w-[40%] w-[100%] gap-[2rem]">
        <h4 className="w-fit px-[5px] text-[var(--text-primary)] border-[var(--color-green)] border-[1px] rounded-3xl font-medium text-[20px]">
          Portfolio
        </h4>
        <h2 className="font-semibold text-[40px] text-[var(--color-light-black)] leading-[54px]">
          My Creative Works Latest{" "}
          <p className="text-[var(--text-primary)] inline">Projects</p>
        </h2>
        <p className="text-[var(--color-gray)] text-[1rem]">
          I have selected and mentioned here some of my latest projects to share
          with you.
        </p>
        <Link href="/projects">
          {/* <button className="w-fit rounded-lg bg-[var(--color-green)] text-[var(--color-white)] px-[24px] py-[16px]">
            Show More
          </button> */}
          <Button title="See All" />
        </Link>
      </div>
      <div className="right flex gap-[1rem]  w-[60%]"></div>
    </div>
  );
}
