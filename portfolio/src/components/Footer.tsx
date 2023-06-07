import Link from "next/link";

export default function Footer() {
  return (
    <footer className="sm:flex sm:justify-between sm:flex-row h-[50px] sm:items-center flex-col gap-5 items-start">
      <h3>Designed and Developed by Ray Haddad</h3>
      <h3>Copyright © 2023</h3>
      <ul className="sm:flex-row sm:justify-between sm:gap-5 gap-1 flex flex-col items-start">
        <Link href="https://github.com/rayhaddad717">Github</Link>
        <Link href="https://www.instagram.com/rayhaddad11">Instagram</Link>
        <Link href="https://www.linkedin.com/in/ray-haddad/">LinkedIn</Link>
      </ul>
    </footer>
  );
}
