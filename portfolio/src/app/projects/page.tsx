import Link from "next/link";
import { useMemo } from "react";

export default function Projects() {
  const projects = useMemo(
    () => [
      {
        title: "Ecom",
        img: "/icons/code-solid.svg",
        description: "Ecommerce Website",
      },
      {
        title: "Yelpcamp",
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
  return (
    <section className="mt-5">
      <div>
        <h1 className="text-4xl text-center mb-5">Projects</h1>
        <h4 className="text-center text-gray-500">Some of my projects</h4>
        <ul className="py-10 w-[100%] flex justify-center gap-8 sm:flex-row flex-col">
          {projects.map((project, index) => (
            <li
              key={index}
              className="sm:w-fit sm:flex-grow-0 flex-grow-1 basis-[200px] border-2  border-gray-400 flex flex-col items-center justify-center p-6 rounded-md hover:scale-110 transition-transform duration-500 ease-in-out"
            >
              <h4 className="text-xl font-bold mb-4">{project.title}</h4>
              <img
                className="w-32 h-32  rounded-full mb-4"
                src={project.img}
                alt={project.title}
              />
              <p className="text-gray-600 mb-5">{project.description}</p>
              <div className="flex items-center gap-3 my-2">
                <img
                  className="w-[24px] cursor-pointer"
                  src="/icons/github.svg"
                />{" "}
                <img
                  className="w-[24px] cursor-pointer"
                  src="/icons/link-solid.svg"
                />
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
