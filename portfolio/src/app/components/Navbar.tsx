"use client";
import Link from "next/link";
import "./Navbar.css";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className=" w-full  h-[50px] sticky top-0 bg-[var(--page-background-color)] bg-opacity-50 z-[1000]">
      <ul className="flex gap-1 w-full justify-end items-center h-full ">
        <li className="sm:basis-[100px] basis-[50px] sm:text-xl text-md">
          <Link
            className={`nav-link  ${pathname === "/" ? " active" : ""}`}
            href="/"
          >
            Home
          </Link>
        </li>
        <li className="sm:basis-[100px] basis-[50px] sm:text-xl text-md">
          <Link
            className={`nav-link  ${pathname === "/about" ? " active" : ""}`}
            href="/about"
          >
            About
          </Link>
        </li>
        <li className="sm:basis-[100px] basis-[50px] sm:text-xl text-md">
          <Link
            className={`nav-link  ${pathname === "/projects" ? " active" : ""}`}
            href="/projects"
          >
            Projects
          </Link>
        </li>
        <li className="sm:basis-[100px] basis-[50px] sm:text-xl text-md">
          <Link
            className={`nav-link  ${pathname === "/resume" ? " active" : ""}`}
            href="/resume"
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}
