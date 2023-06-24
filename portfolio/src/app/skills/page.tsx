import { useMemo } from "react";
import { IconType } from "react-icons";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiNpm,
} from "react-icons/di";
import {
  SiRedis,
  SiAngularjs,
  SiFirebase,
  SiNextdotjs,
  SiMicrosoftazure,
  SiTypescript,
  SiCsharp,
  SiPostgresql,
  SiPostman,
  SiMysql,
  SiVisualstudiocode,
  SiHtml5,
  SiCss3,
  SiSequelize,
} from "react-icons/si";
import { TbBrandSocketIo } from "react-icons/tb";
export default function About() {
  const skills = useMemo(
    () => [
      { title: "Angular", icon: SiAngularjs },
      { title: "NodeJS", icon: DiNodejs },
      { title: "PostgreSQL", icon: SiPostgresql },
      { title: "HTML5", icon: SiHtml5 },
      { title: "CSS3", icon: SiCss3 },
      { title: "SocketIO", icon: TbBrandSocketIo },
      { title: "Javascript", icon: DiJavascript1 },
      { title: "Typescript", icon: SiTypescript },
      { title: "React", icon: DiReact },
      { title: "React Native", icon: DiReact },
      { title: "Python", icon: DiPython },
      { title: "Mongodb", icon: DiMongodb },
      { title: "Git", icon: DiGit },
      { title: "Java", icon: DiJava },
      { title: "Redis", icon: SiRedis },
      { title: "Firebase", icon: SiFirebase },
      { title: "NextJS", icon: SiNextdotjs },
      { title: "C++", icon: CgCPlusPlus },
      { title: "C#", icon: SiCsharp },
      { title: "mySQL", icon: SiMysql },
      { title: "SequelizeJS", icon: SiSequelize },
    ],
    []
  );
  const techs = useMemo(
    () => [
      { title: "VS Code", icon: SiVisualstudiocode },
      { title: "Microsoft Azure", icon: SiMicrosoftazure },
      { title: "Postman", icon: SiPostman },
      { title: "NPM", icon: DiNpm },
    ],
    []
  );
  return (
    <section>
      <div className="flex flex-col items-center gap-[2rem] sm:my-10 my-16 px-[var(--page-padding)] w-full mx-[auto]">
        <h3 className="text-3xl text-center ">
          Profesional{" "}
          <span className="text-[var(--color-green)]">Skillset</span>
        </h3>
        <p>
          During my professional and personal experience I have come across
          different technologies with which I am now comfortable using.
        </p>
        <ul className="flex flex-wrap gap-[2rem] justify-evenly">
          {skills.map(
            (skill: { title: string; icon: IconType }, index: number) => (
              <li
                title={skill.title}
                key={index}
                className="border-[var(--color-medium-green)] cursor-pointer my-4 text-7xl flex items-center justify-center py-10 px-14  border-[2px] rounded-md hover:scale-105 transition-transform duration-500 ease-in-out"
              >
                {skill.icon({
                  title: skill.title,

                  // color: "var(--color-green)",
                })}
              </li>
            )
          )}
        </ul>
      </div>
      <div className="flex flex-col items-center gap-[2rem] mt-16 mb-20">
        <h3 className="sm:text-3xl text-center text-lg">
          <span className="text-[var(--color-green)]">Technologies </span>
          Used
        </h3>
        <p>Tools I have used along my coding journey.</p>
        <ul className="flex flex-wrap gap-[2rem] justify-evenly">
          {techs.map(
            (tech: { title: string; icon: IconType }, index: number) => (
              <li
                title={tech.title}
                key={index}
                className="border-[var(--color-medium-green)] cursor-pointer my-4 text-7xl flex items-center justify-center py-10 px-14  border-[2px] rounded-md hover:scale-105 transition-transform duration-500 ease-in-out"
              >
                {tech.icon({ title: tech.title })}
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
}
