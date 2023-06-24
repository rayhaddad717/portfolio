import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-[9rem] border-t-[1px] border-[var(--color-light-gray-2)] mx-[var(--page-padding)] py-[40px] flex sm:justify-between sm:flex-row  sm:items-center flex-col sm:gap-5 gap-[2rem] items-start">
      <p className="text-[var(--color-black)] text-[16px] ">
        © 2023. All Rights Reserved
      </p>
      <p className="text-[var(--color-black)] text-[16px] ">
        Designed by Tanvir Ahmed
      </p>
      <ul className="sm:justify-between sm:gap-5 gap-[1rem] sm:w-fit w-[100%] flex  items-start">
        <Link href="https://github.com/rayhaddad717">
          <img
            className="sm:w-[20px] w-[40px] sm:h-[20px] h-[40px] filter-green"
            src="icons/github.svg"
            alt="github"
          />
        </Link>
        <Link href="https://www.instagram.com/rayhaddad11">
          {" "}
          <img
            className="sm:w-[20px] w-[40px] sm:h-[20px] h-[40px]"
            src="svgs/instagram.svg"
            alt="instragram"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/ray-haddad/">
          {" "}
          <img
            className="sm:w-[20px] w-[40px] sm:h-[20px] h-[40px]"
            src="svgs/linkedin.svg"
            alt="linkedin"
          />
        </Link>
      </ul>
    </footer>
  );
}
