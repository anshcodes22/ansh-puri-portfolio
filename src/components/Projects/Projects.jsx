import portfolioData from "../../data/portfolioData";

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <div id="Projects" className="projects w-full mb-10 mt-20 px-5 lg:px-10">
      <div>
        <h2 className="text-3xl font-bold">export default Projects...</h2>

        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} justify-center items-center gap-10 mt-10`}
          >
            <div className="w-full lg:w-[40vw]">
              <h3 className="text-2xl">{project.title}</h3>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-sm text-white rounded-full border border-gray-600 hover:bg-zinc-800 transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-5 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="w-full lg:w-[50vw]">
              <div className="relative w-full rounded-xl group overflow-hidden">
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  className="w-full h-auto rounded-xl transition-all duration-300 ease-in-out group-hover:blur-sm"
                />

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto text-black border border-black px-6 py-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"
                  >
                    Try It
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
