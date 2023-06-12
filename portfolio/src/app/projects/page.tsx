import Link from "next/link";
import { useMemo } from "react";
import "./Projects.css";
export interface IProject {
  title: string;
  img: string;
  description: string;
  techs?: string[];
  link?: string;
  github_link?: string;
}
export default function Projects() {
  const projects: IProject[] = useMemo(
    () => [
      {
        title: "Yelpcamp",
        img: "/project-images/yelpcamp.png",
        description: "Website that has campgrounds",
        techs: ["Express", "NodeJS", "HTML", "CSS"],
        link: "https://yelpcamp.rayhaddad.xyz",
        github_link: "https://github.com/rayhaddad717/yelpcamp",
      },
      {
        title: "Silent Reads",
        img: "/project-images/silentreads.png",
        description: "NODEJS",
        techs: ["HTML", "CSS", "JS", "API", "Firebase"],
      },
      {
        title: "Yahtzee",
        img: "/project-images/yahtzee.png",
        description: "NODEJS",
        techs: ["React", "Firebase"],
        link: "https://myyahtzee.web.app/",
      },
      {
        title: "Lights Out",
        img: "/project-images/lightsout.png",
        description: "NODEJS",
        techs: ["React", "Firebase"],
        link: "https://mylightsout.web.app/",
      },
      {
        title: "Dad Jokes",
        img: "/project-images/cheezjokes.png",
        description: "NODEJS",
        techs: ["React", "Firebase"],
        link: "https://cheezjokes.web.app/",
      },
      {
        title: "High Low",
        img: "/project-images/highlow.png",
        description: "NODEJS",
        techs: ["React", "Firebase"],
        link: "https://myhighlow.web.app/",
      },
      {
        title: "Game Library",
        img: "/project-images/videogames.png",
        description: "NODEJS",
        techs: ["Angular", "API", "Firebase"],
        link: "https://raysvideogamelibrary.web.app/",
      },

      {
        title: "Ecom",
        img: "/icons/code-solid.svg",
        description: "Ecommerce Website",
      },
      {
        title: "Wine Predictor",
        img: "/icons/code-solid.svg",
        description: "NODEJS",
      },

      {
        title: "Deliveroo Clone",
        img: "/icons/code-solid.svg",
        description: "NODEJS",
      },
      {
        title: "Signal Clone",
        img: "/icons/code-solid.svg",
        description: "NODEJS",
      },
    ],
    []
  );
  const courses = useMemo(
    () => [
      {
        title: "The Web Developer Bootcamp 2022",
        img: "/icons/code-solid.svg",
        description: "NODEJS",
        link: "https://www.udemy.com/course/the-web-developer-bootcamp/",
      },
      {
        title: "The Modern React Bootcamp",
        img: "/icons/code-solid.svg",
        description: "React",
        link: "https://www.udemy.com/course/modern-react-bootcamp/",
      },
    ],
    []
  );
  // return <ProjectsList projects={projects} />;
  return (
    <section className="mt-5">
      <div>
        <h1 className="text-4xl text-center mb-5">Projects</h1>
        <h4 className="text-center text-gray-500">Some of my projects</h4>
        <ul className="py-10 w-[100%] flex justify-center gap-8 sm:flex-row flex-col flex-wrap">
          {projects.map((project, index) => (
            <li
              key={index}
              className="flex-grow-0 basis-[400px] border-1  border-gray-400 flex flex-col items-center justify-center  rounded-md overflow-hidden"
            >
              <div className="border-0 card flex-[2] relative mb-4">
                <div className="  hover:rgb(46 46 46 / 50%) w-full h-full absolute  flex-wrap top-0 left-0 justify-center items-center gap-2 hidden tech-chip">
                  {project.techs?.map((tech, tech_index) => (
                    <span
                      className="rounded-r-lg rounded-l-lg bg-[var(--text-color)] w-fit h-fit p-1 cursor-pointer text-black "
                      key={tech_index}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <img
                  className=" object-contain   transition-transform duration-500 ease-in-out"
                  src={project.img}
                  alt={project.title}
                />
              </div>
              <div className="flex-1 flex flex-col w-full px-4 pb-2">
                <h4 className="text-xl font-bold mb-4 text-start text-[var(--link-color)]">
                  {project.title}
                </h4>
                <p className="text-gray-600 mb-5">{project.description}</p>
                <div className="flex items-center justify-center gap-3 my-2">
                  <Link
                    href={project.github_link || "#"}
                    className="hover:-translate-y-1 transition-all ease-in-out duration-200 "
                  >
                    <img
                      className="w-[24px] cursor-pointer "
                      src="/icons/github.svg"
                    />
                  </Link>
                  <Link
                    href={project.link || "#"}
                    className="hover:-translate-y-1 transition-all ease-in-out duration-200 "
                  >
                    <img
                      className="w-[24px] cursor-pointer"
                      src="/icons/link-solid.svg"
                    />
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1 className="text-4xl text-center mb-5">Courses</h1>
        <h4 className="text-center text-gray-500">
          Some of my completed courses
        </h4>
        <ul className="py-10 w-[100%] flex justify-center gap-8 sm:flex-row flex-col">
          {courses.map(
            (
              course: {
                title: string;
                link: string;
                description: string;
                img: string;
              },
              index: number
            ) => (
              <li
                key={index}
                className="sm:w-fit sm:flex-grow-0 flex-grow-1 basis-[200px] border-2  border-gray-400 flex flex-col items-center justify-center p-6 rounded-md hover:scale-110 transition-transform duration-500 ease-in-out"
              >
                <h4 className="text-xl font-bold mb-4">{course.title}</h4>
                <img
                  className="w-32 h-32  rounded-full mb-4"
                  src={course.img}
                  alt={course.title}
                />
                <p className="text-gray-600 mb-5">{course.description}</p>
                <div className="flex items-center gap-3 my-2">
                  <img
                    className="w-[24px] cursor-pointer"
                    src="/icons/github.svg"
                  />
                  <Link href={course.link}>
                    <img
                      className="w-[24px] cursor-pointer"
                      src="/icons/link-solid.svg"
                    />
                  </Link>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
}
