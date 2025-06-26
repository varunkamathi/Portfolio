import React from 'react';
import { FaGlobe, FaGithub } from 'react-icons/fa';
import Project1 from "../assets/project1.png";
import Project2 from "../assets/project2.png";
import Project3 from "../assets/project3.png";

const projects = [
  {
    title: "VirtualR Platform Landing Page",
    image: Project1,
    link: "https://virtual-r-frontend.vercel.app/",
    tags: ["#react js", "#tailwindcss", "#javascript"],
    description: "A responsive landing page for VirtualR that showcases cutting-edge VR tools using modern UI and animations.",
    status: "completed"
  },
  {
    title: "Blog",
    image: Project3,
    link: "https://varunsblog.onrender.com/",
    tags: ["#reactjs", "#express", "#nodejs", "#javascript","#mongodb"],
    description: "A full-featured developer blog with rich content rendering and user-friendly interface.",
    status: "completed"
  },
  {
    title: "E-commerce UI",
    image: Project2,
    link: "https://e-commerce-seven-jade-70.vercel.app/",
    tags: ["#react", "#tailwind", "#javascript","#clerk auth"],
    description: "An elegant and responsive UI for an online store, built for seamless shopping experiences.",
    status: "completed"
  }
];


const ProjectSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Featured <span className="text-purple-500">Projects</span>
        </h2>

        <div className="flex flex-col gap-10 items-center">
          {projects.map((project, index) => (
            <div key={index} className="bg-black backdrop-blur-sm rounded-2xl p-4 max-w-xl w-full shadow-md">
              <div className="relative rounded-xl overflow-hidden">
                <img src={project.image} alt={project.title} className="rounded-xl w-full h-78 object-cover border border-purple-800" />
                <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                  {project.status}
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-black/40 p-2 rounded-full hover:bg-white/20 transition text-white">
                    <FaGlobe size={16} />
                  </a>
                  <a href="https://github.com/varunkamathi?tab=repositories" target="_blank" rel="noopener noreferrer" className="bg-black/40 p-2 rounded-full hover:bg-white/20 transition text-white">
                    <FaGithub size={16} />
                  </a>
                </div>
              </div>

              <div className="mt-5 px-2">
                <h3 className="text-lg font-bold text-white text-left">{project.title}</h3>
                <p className="text-sm text-gray-300 mt-2 text-left font-semibold">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs font-medium text-purple-300">
                      {tag}
                    </span>
                  ))}
                </div>
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
