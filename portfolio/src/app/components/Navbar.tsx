"use client";
import Link from "next/link";
import "./Navbar.css";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="h-[56px] mt-[2rem] sm:px-[var(--page-padding)]">
      <nav className="sm:flex-row flex-col gap-[1rem] sm:gap-0 sm:items-center items-end h-full flex justify-between w-full sticky top-0 bg-[var(--page-background-color)] bg-opacity-50 z-[1000]">
        <ul className="mx-auto flex gap-[40px] xsgap20 w-fit justify-center items-center  ">
          <li className="font-medium sm:basis-[100px]  text-[1rem]">
            <Link
              className="text-[var(--color-black)] hover:text-[var(--text-primary)] ease-in-out duration-200 "
              href="/"
            >
              About
            </Link>
          </li>
          <li className="font-medium sm:basis-[100px]  text-[1rem]">
            <a
              className="text-[var(--color-black)] hover:text-[var(--text-primary)] ease-in-out duration-200 "
              href="/#skills"
            >
              Skills
            </a>
          </li>
          <li className="font-medium sm:basis-[100px]  text-[1rem]">
            <a
              className="text-[var(--color-black)] hover:text-[var(--text-primary)] ease-in-out duration-200 "
              href="/#portfolio"
            >
              Portfolio
            </a>
          </li>
          <li className="font-medium sm:basis-[100px]  text-[1rem] shrink-0">
            <a
              className="text-[var(--color-black)] hover:text-[var(--text-primary)] ease-in-out duration-200 "
              href="/#contactme"
            >
              Contact Me
            </a>
          </li>
        </ul>
        <div className="justify-self-end">
          <button className="font-medium text-[var(--color-black)] bg-[var(--background-color)] py-[16px] px-[24px] w-[152px] h-[56px] border-[var(--color-green)] border-[2px] rounded-xl text-[1rem] text-center hover:text-[var(--text-primary)] ease-in-out duration-200 ">
            <a download href="RayHaddad.pdf">
              Download CV
            </a>
          </button>
        </div>
      </nav>
    </header>
  );
}
