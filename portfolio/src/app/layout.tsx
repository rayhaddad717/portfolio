import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta property="og:title" content="Ray Haddad" />
      <meta property="og:description" content="Full Stack Developer" />
      {/* <meta property="og:image" content="URL of Your Image"/> */}
      <meta property="og:url" content="rayhaddad.xyz" />
      <title>Ray Haddad</title>

      <body className="overflow-y-auto">
        <Navbar />
        <main className="min-h-[calc(100vh-100px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
