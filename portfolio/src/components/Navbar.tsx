import Link from "next/link";
export default function Navbar() {
  return (
    <ul className="flex gap-1 w-full justify-end items-center h-[50px] sticky top-0">
      <li className="basis-[100px]  text-xl">
        <Link href="/">Home</Link>
      </li>
      <li className="basis-[100px]  text-xl">
        <Link href="/about">About</Link>
      </li>
      <li className="basis-[100px]  text-xl">
        <Link href="/projects">Projects</Link>
      </li>
      <li className="basis-[100px]  text-xl">
        <Link href="/resume">Resume</Link>
      </li>
    </ul>
  );
}
