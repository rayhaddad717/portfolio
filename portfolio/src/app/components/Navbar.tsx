"use client";
import Link from "next/link";
import "./Navbar.css";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="h-[56px] mt-[2rem] sm:px-[var(--page-padding)]">
      <nav className="sm:flex-row flex-col gap-[1rem] sm:gap-0 sm:items-center items-end h-full flex justify-between w-full sticky top-0 bg-[var(--page-background-color)] bg-opacity-50 z-[1000]">
        <ul className="mx-auto flex gap-[40px] w-fit justify-center items-center  ">
          <li className="font-medium sm:basis-[100px]  text-[1rem]">
            <a
              className={` text-[var(--color-black)] ${
                pathname === "/" ? " active" : ""
              }`}
              href="#"
            >
              About
            </a>
          </li>
          <li className="font-medium sm:basis-[100px]  text-[1rem]">
            <a
              className={`text-[1rem] text-[var(--color-black)] ${
                pathname === "/about" ? " active" : ""
              }`}
              href="#skills"
            >
              Skills
            </a>
          </li>
          <li className="font-medium sm:basis-[100px]  text-[1rem]">
            <a
              className={`text-[1rem] text-[var(--color-black)] ${
                pathname === "/projects" ? " active" : ""
              }`}
              href="#portfolio"
            >
              Portfolio
            </a>
          </li>
          <li className="font-medium sm:basis-[100px]  text-[1rem] shrink-0">
            <a
              className={`nav-link  ${pathname === "/resume" ? " active" : ""}`}
              href="#contactme"
            >
              Contact Me
            </a>
          </li>
        </ul>
        <div className="justify-self-end">
          <button className="font-medium text-[var(--color-black)] bg-[var(--background-color)] py-[16px] px-[24px] w-[152px] h-[56px] border-[var(--color-green)] border-[2px] rounded-xl text-[1rem] text-center ">
            <a download href="RayHaddad.pdf">
              Download CV
            </a>
          </button>
        </div>
      </nav>
    </header>
  );
}
