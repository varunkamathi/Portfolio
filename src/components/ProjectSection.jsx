import React from 'react';

const projects = [
  {
    title: "VirtualR Platform",
    image: "/projects/virtualr.png", // Make sure this image is in your public/projects folder
    link: "https://virtualr-demo.netlify.app",
  },
  {
    title: "Weather Dashboard",
    image: "/projects/weather.png",
    link: "https://weather-now.vercel.app",
  },
  {
    title: "E-commerce UI",
    image: "/projects/ecommerce.png",
    link: "https://ecommerce-ui-demo.com",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-20 bg-[#0d0d0d] text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Featured <span className="text-purple-500">Projects</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-xl shadow-lg overflow-hidden hover:shadow-purple-700 transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-purple-400 hover:underline"
                >
                  Visit Website →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
