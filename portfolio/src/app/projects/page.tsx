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
  stack: "Full Stack" | "Frontend" | "Mobile";
}
export default function Projects() {
  const projects: IProject[] = useMemo(
    () => [
      {
        title: "Yelpcamp",
        img: "/project-images/yelpcamp.png",
        description:
          "First FullStack project. Serves as a platform to view campgrounds across the country, add new campgrounds, and review others. Implements sessions, authorization, authentication, image upload and more.",
        techs: ["Express", "NodeJS", "EJS", "Cloudinary", "Redis"],
        link: "https://yelpcamp.rayhaddad.xyz",
        github_link: "https://github.com/rayhaddad717/yelpcamp",
        stack: "Full Stack",
      },
      {
        title: "Silent Reads",
        img: "/project-images/silentreads.png",
        description:
          "A book search engine, made with vanilla javascript using google search apis.",
        techs: ["HTML", "CSS", "JS", "API", "Firebase"],
        link: "https://silentreads.web.app/",
        stack: "Frontend",
      },
      {
        title: "Yahtzee",
        img: "/project-images/yahtzee.png",
        description: "Yahtzee Game.",
        techs: ["React", "Firebase"],
        link: "https://myyahtzee.web.app/",
        github_link: "https://github.com/rayhaddad717/reactCourse.git",
        stack: "Frontend",
      },
      {
        title: "Lights Out",
        img: "/project-images/lightsout.png",
        description:
          "Simple and fun game where the objective is to turn off all the lights.",
        techs: ["React", "Firebase"],
        link: "https://mylightsout.web.app/",
        github_link: "https://github.com/rayhaddad717/reactCourse.git",
        stack: "Frontend",
      },
      {
        title: "Dad Jokes",
        img: "/project-images/cheezjokes.png",
        description:
          "Generates jokes which are considered funny by people and cheesy by others :)",
        techs: ["React", "Firebase"],
        link: "https://cheezjokes.web.app/",
        github_link: "https://github.com/rayhaddad717/reactCourse.git",
        stack: "Frontend",
      },
      {
        title: "High Low",
        img: "/project-images/highlow.png",
        description: "Standard High-Low card game.",
        techs: ["React", "Firebase"],
        link: "https://myhighlow.web.app/",
        github_link: "https://github.com/rayhaddad717/reactCourse.git",
        stack: "Frontend",
      },
      {
        title: "Game Library",
        img: "/project-images/videogames.png",
        description: "Game library search engine built with external APIs.",
        techs: ["Angular", "API", "Firebase"],
        link: "https://raysvideogamelibrary.web.app/",
        stack: "Frontend",
      },

      {
        title: "Wine Quality Predictor",
        img: "/project-images/WinePredictor.jpeg",
        description:
          "Mobile App to predict the quality of a wine sample. Uses machine learning with python backend to predict the quality of a sample",
        github_link:
          "https://github.com/rayhaddad717/ml-wine-prediction-mobile.git",
        stack: "Full Stack",
      },

      {
        title: "Deliveroo Clone",
        img: "/project-images/deliveroo.jpeg",
        description:
          "Deliveroo mobile app clone built with React Native and Expo with Sanity as a CMS.",
        github_link: "https://github.com/rayhaddad717/Deliveroo-clone.git",
        stack: "Mobile",
      },
      {
        title: "Signal Clone",
        img: "/icons/code-solid.svg",
        description:
          "Signal mobile app clone built with React Native, Expo, with Firebase authentication and messaging.",
        github_link: "https://github.com/rayhaddad717/Signal.git",
        stack: "Mobile",
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
    <section className="sm:mt-5 mt-16 px-[var(--page-padding)]">
      <div>
        <h1 className="text-4xl text-center mb-5 text-[var(--link-color)]">
          My <p className="text-[var(--text-primary)] inline">Projects</p>
        </h1>
        <h4 className="text-center text-[var(--text-color)]">
          Some of my projects
        </h4>
        <ul className="py-10 w-[100%] flex justify-center gap-8 sm:flex-row flex-col flex-wrap">
          {projects.map((project, index) => (
            <li
              key={index}
              className="relative sm:mx-0 mx-[2rem] flex-grow-0 sm:basis-[400px] border-[2px]  border-[var(--color-green)] sm:hover:-translate-x-1 sm:hover:-translate-y-1 duration-100 ease-in-out flex flex-col items-center justify-center  rounded-md overflow-hidden"
            >
              <div className="w-[10rem] text-center z-50 absolute top-0 left-0 -rotate-45 -translate-x-[2.5rem] translate-y-[1.5rem] text-[var(--color-white)] bg-[var(--color-green)]">
                {project.stack}
              </div>
              <div className="border-0 card flex-[2] relative mb-4 max-h-[180px]">
                <div className="  hover:rgb(46 46 46 / 50%) w-full h-full absolute  flex-wrap top-0 left-0 justify-center items-center gap-2 hidden tech-chip">
                  {project.techs?.map((tech, tech_index) => (
                    <span
                      className="rounded-r-lg rounded-l-lg bg-[var(--color-white)] w-fit h-fit p-1 cursor-pointer text-black "
                      key={tech_index}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <img
                  className=" object-contain max-h-[180px]   transition-transform duration-500 ease-in-out"
                  src={project.img}
                  alt={project.title}
                />
              </div>
              <div className="flex-1 flex flex-col w-full px-4 pb-2 justify-between">
                <div className="flex flex-col">
                  <h4 className="text-xl font-bold mb-4 text-start text-[var(--link-color)]">
                    {project.title}
                  </h4>
                  <p className="text-[var(--text-color)] mb-5">
                    {project.description}
                  </p>
                </div>
                <div className="flex items-center justify-center gap-3 my-2">
                  {project.github_link ? (
                    <Link
                      href={project.github_link || "#"}
                      className="hover:-translate-y-1 transition-all ease-in-out duration-200 "
                    >
                      <img
                        className="w-[24px] cursor-pointer  img-filter"
                        src="/icons/github.svg"
                      />
                    </Link>
                  ) : null}
                  {project.link ? (
                    <Link
                      href={project.link || "#"}
                      className="hover:-translate-y-1 transition-all ease-in-out duration-200 "
                    >
                      <img
                        className="w-[24px] cursor-pointer img-filter"
                        src="/icons/link-solid.svg"
                      />
                    </Link>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* <div>
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
                    className="w-[24px] cursor-pointer img-filter"
                    src="/icons/github.svg"
                  />
                  <Link href={course.link}>
                    <img
                      className="w-[24px] cursor-pointer img-filter"
                      src="/icons/link-solid.svg"
                    />
                  </Link>
                </div>
              </li>
            )
          )}
        </ul>
      </div> */}
    </section>
  );
}
