import Link from "next/link";
import "./Navbar.css";
export default function Navbar() {
  return (
    <ul className="flex gap-1 w-full justify-end items-center h-[50px] sticky top-0 bg-[var(--page-background-color)] bg-opacity-50">
      <li className="sm:basis-[100px] basis-[50px] sm:text-xl text-md">
        <Link className="nav-link" href="/">
          Home
        </Link>
      </li>
      <li className="sm:basis-[100px] basis-[50px] sm:text-xl text-md">
        <Link className="nav-link" href="/about">
          About
        </Link>
      </li>
      <li className="sm:basis-[100px] basis-[50px] sm:text-xl text-md">
        <Link className="nav-link" href="/projects">
          Projects
        </Link>
      </li>
      <li className="sm:basis-[100px] basis-[50px] sm:text-xl text-md">
        <Link className="nav-link" href="/resume">
          Resume
        </Link>
      </li>
    </ul>
  );
}
