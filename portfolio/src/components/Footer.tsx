import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-between h-[50px] items-center">
      <h3>Designed and Developped by Ray Haddad</h3>
      <h3>Copyright © 2023</h3>
      <ul className="flex justify-between gap-5">
        <Link href="/">Github</Link>
        <Link href="/">Instagram</Link>
        <Link href="/">LinkedIn</Link>
      </ul>
    </footer>
  );
}
