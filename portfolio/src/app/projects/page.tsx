export default function Projects() {
  const projects = [
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
  ];
  return (
    <section className="mt-5">
      <h1 className="text-4xl text-center mb-5">Projects</h1>
      <h4 className="text-center text-gray-500">Some of my projects</h4>
      <ul className="py-10 w-[100%] flex justify-center gap-8 sm:flex-row flex-col">
        {projects.map((project, index) => (
          <li
            key={index}
            className="sm:w-fit sm:flex-grow-0 flex-grow-1 basis-[200px] border-2 rounded-lg border-gray-400 flex flex-col items-center justify-center p-6"
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
    </section>
  );
}
