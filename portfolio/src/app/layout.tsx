import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ray Haddad",
  description: "Full Stack Developer",
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
      <meta name="theme-color" content="#070707" />
      <meta
        name="google-site-verification"
        content="6wLNrLsUxaQfuiwLTzD2q5QcwE9U13Fq0MeLzahIr94"
      />
      <meta
        property="og:image"
        content="https://media.licdn.com/dms/image/C5603AQEKXNgClmog2w/profile-displayphoto-shrink_800_800/0/1614590546241?e=2147483647&v=beta&t=cSdGOjcXR8fUxdRhMqdiCtEngMMejCcsfIC0FXqnpd8"
      />
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta
        name="twitter:image"
        content="https://media.licdn.com/dms/image/C5603AQEKXNgClmog2w/profile-displayphoto-shrink_800_800/0/1614590546241?e=2147483647&v=beta&t=cSdGOjcXR8fUxdRhMqdiCtEngMMejCcsfIC0FXqnpd8"
      />
      <title>Ray Haddad</title>

      <body className="overflow-y-auto">
        <Navbar />
        <main className="sm:min-h-[calc(100vh-100px)] min-h-[calc(100vh-200px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
