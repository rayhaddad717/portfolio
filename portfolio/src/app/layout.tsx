import Navbar from "@/app/components/Navbar";
import "./globals.css";
import Footer from "./components/Footer";
export const metadata = {
  title: "Ray Haddad",
  description: "Full Stack Developer",
};

const bubbles = [
  {
    color: "var(--color-blue)",
    width: "6px",
    height: "6px",
    top: "6px",
    left: "332px",
  },
  {
    color: "var(--color-blue)",
    width: "14px",
    height: "14px",
    top: "22px",
    left: "596px",
  },
  {
    color: "var(--color-red)",
    width: "6px",
    height: "6px",
    top: "46px",
    left: "119px",
  },
  {
    color: "var(--color-dark-gray)",
    width: "8px",
    height: "8px",
    top: "49px",
    left: "322px",
  },

  {
    color: "var(--color-green)",
    width: "14px",
    height: "14px",
    top: "56px",
    left: "30px",
  },
  {
    color: "var(--color-blue)",
    width: "14px",
    height: "14px",
    top: "116px",
    left: "126px",
  },
  {
    color: "var(--color-green)",
    width: "14px",
    height: "14px",
    top: "113px",
    left: "407px",
  },
  {
    color: "var(--color-light-green)",
    width: "6px",
    height: "6px",
    top: "176px",
    left: "335px",
  },
  {
    color: "var(--color-light-yellow)",
    width: "14px",
    height: "14px",
    top: "178px",
    left: "558px",
  },
  {
    color: "var(--color-blue)",
    width: "6px",
    height: "6px",
    top: "206px",
    left: "475px",
  },
  {
    color: "var(--color-red)",
    width: "14px",
    height: "14px",
    top: "245px",
    left: "400px",
  },
  {
    color: "var(--color-green)",
    width: "14px",
    height: "14px",
    top: "252px",
    left: "528px",
  },
];
const scaled_bubbles = [
  {
    color: "var(--color-blue)",
    width: "6px",
    height: "6px",
    top: "calc(0.9836065573770493 * 1vh)",
    left: "26.059654631083202%",
  },
  {
    color: "var(--color-blue)",
    width: "14px",
    height: "14px",
    top: "calc(3.6065573770491803* 1vh)",
    left: "46.781789638932494%",
  },
  {
    color: "var(--color-red)",
    width: "6px",
    height: "6px",
    top: "calc(7.540983606557377* 1vh)",
    left: "9.340659340659341%",
  },
  {
    color: "var(--color-dark-gray)",
    width: "8px",
    height: "8px",
    top: "calc(8.032786885245901* 1vh)",
    left: "25.274725274725274%",
  },
  {
    color: "var(--color-green)",
    width: "14px",
    height: "14px",
    top: "calc(9.18032786885246* 1vh)",
    left: "2.3547880690737832%",
  },
  {
    color: "var(--color-blue)",
    width: "14px",
    height: "14px",
    top: "calc(19.016393442622952* 1vh)",
    left: "9.89010989010989%",
  },
  {
    color: "var(--color-green)",
    width: "14px",
    height: "14px",
    top: "calc(18.524590163934427* 1vh)",
    left: "31.946624803767662%",
  },
  {
    color: "var(--color-light-green)",
    width: "6px",
    height: "6px",
    top: "calc(28.852459016393443* 1vh)",
    left: "26.29513343799058%",
  },
  {
    color: "var(--color-light-yellow)",
    width: "14px",
    height: "14px",
    top: "calc(29.180327868852462* 1vh)",
    left: "43.79905808477237%",
  },
  {
    color: "var(--color-blue)",
    width: "6px",
    height: "6px",
    top: "calc(33.77049180327869* 1vh)",
    left: "37.28414442700157%",
  },
  {
    color: "var(--color-red)",
    width: "14px",
    height: "14px",
    top: "calc(40.16393442622951* 1vh)",
    left: "31.39717425431711%",
  },
  {
    color: "var(--color-green)",
    width: "14px",
    height: "14px",
    top: "calc(41.31147540983607* 1vh)",
    left: "41.444270015698585%",
  },
];
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta property="og:title" content="Ray Haddad" />
      <meta property="og:description" content="Full Stack Developer" />
      <meta property="og:url" content="rayhaddad.xyz" />
      <meta name="theme-color" content="#0db760" />
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
      <link rel="icon" type="image/png" href="/images/me.png"></link>

      <title>Ray Haddad</title>

      <body className="overflow-y-auto bg-[var(--background-color)] relative">
        {bubbles.map((bubble, index) => (
          <div
            key={index}
            className="rounded-full"
            style={{
              position: "absolute",
              top: bubble.top,
              left: bubble.left,
              width: bubble.width,
              height: bubble.height,
              background: bubble.color,
              zIndex: -1,
            }}
          ></div>
        ))}
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
