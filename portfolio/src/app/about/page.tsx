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
      <h1 className="text-center sm:text-4xl text-lg mb-5">
        About <span className="text-[var(--link-color)]">Me</span>
      </h1>
      <div className="flex items-center justify-center my-10">
        <div className="flex flex-col items-center gap-[1rem]">
          <h3 className="sm:text-3xl text-lg">
            <span className="text-[var(--link-color)]">Who</span> Am I ?
          </h3>
          <p>
            Hello There, I am Ray Haddad. I am currently a software engineering
            student in my 4th year.
          </p>
          <p>
            I am extremely passionate about everything related to coding. I do a
            lot of self-learn and passion projects to push my limits.
          </p>
          <p>
            During my free time I like to listen to music, go on long, calming
            walks in nature, and go out with friends.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-[2rem] my-10 w-[80%] mx-[auto]">
        <h3 className="sm:text-3xl text-center text-lg">
          Profesional <span className="text-[var(--link-color)]">Skillset</span>
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
                className="cursor-pointer my-4 text-7xl flex items-center justify-center py-10 px-14  border-[2px] rounded-md hover:scale-105 transition-transform duration-500 ease-in-out"
              >
                {skill.icon({ title: skill.title })}
              </li>
            )
          )}
        </ul>
      </div>
      <div className="flex flex-col items-center gap-[2rem] mt-16 mb-20">
        <h3 className="sm:text-3xl text-center text-lg">
          <span className="text-[var(--link-color)]">Technologies </span>
          Used
        </h3>
        <p></p>
        <ul className="flex flex-wrap gap-[2rem] justify-evenly">
          {techs.map(
            (tech: { title: string; icon: IconType }, index: number) => (
              <li
                title={tech.title}
                key={index}
                className="cursor-pointer my-4 text-7xl flex items-center justify-center py-10 px-14  border-[2px] rounded-md hover:scale-105 transition-transform duration-500 ease-in-out"
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
