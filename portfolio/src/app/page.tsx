// "use client";
import Type from "@/components/Type";
import "./home.css";
import ContactMe from "./components/ContactMe";
import AboutMe from "./components/AboutMe";
import SideBubbles from "./components/Sidebubbles";
import MySkills from "./components/MySkills";
import Portfolio from "./components/Portfolio";
export default function Home() {
  return (
    <>
      <AboutMe /> <SideBubbles state={1} />
      <MySkills />
      <SideBubbles state={2} />
      <Portfolio />
      <SideBubbles state={3} />
      <ContactMe />
    </>
  );
}
