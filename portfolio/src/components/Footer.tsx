import Link from "next/link";

export default function Footer() {
  return (
    <footer className="sm:flex sm:justify-between sm:flex-row h-[50px] sm:items-center flex-col gap-5 items-start">
      <h3>Designed and Developped by Ray Haddad</h3>
      <h3>Copyright © 2023</h3>
      <ul className="sm:flex-row sm:justify-between sm:gap-5 gap-1 flex flex-col items-start">
        <Link href="/">Github</Link>
        <Link href="/">Instagram</Link>
        <Link href="/">LinkedIn</Link>
      </ul>
    </footer>
  );
}
