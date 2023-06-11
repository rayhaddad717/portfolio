import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({
  children,
}: {
  children: React.ReactNode[] | React.ReactNode[];
}) {
  return (
    <>
      <Navbar />
      <main className="h-[calc(100vh-100px)]">{children}</main>
      <Footer />
    </>
  );
}
