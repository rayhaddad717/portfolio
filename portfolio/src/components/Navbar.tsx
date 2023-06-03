import Link from "next/link";
export default function Navbar() {
  return (
    <ul className="flex gap-1 w-full justify-end items-center h-[50px] sticky top-0 bg-black bg-opacity-50">
      <li className="sm:basis-[100px] basis-[50px] sm:text-xl text-md">
        <Link href="/">Home</Link>
      </li>
      <li className="sm:basis-[100px] basis-[50px] sm:text-xl text-md">
        <Link href="/about">About</Link>
      </li>
      <li className="sm:basis-[100px] basis-[50px] sm:text-xl text-md">
        <Link href="/projects">Projects</Link>
      </li>
      <li className="sm:basis-[100px] basis-[50px] sm:text-xl text-md">
        <Link href="/resume">Resume</Link>
      </li>
    </ul>
  );
}
