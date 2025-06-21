import { FaReact, FaNodeJs, FaFigma, FaCode, FaUsers, FaBook, FaGithub,FaHourglassHalf} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import React, { useEffect } from 'react';
import Git from "../assets/git.png"
import Code from "../assets/code.png"
import { SiPostman } from "react-icons/si";




const aboutCards = [
  {
    title: "Frontend Developer",
    description: "Building responsive and accessible UI with React and Tailwind CSS.",
    color: "bg-white/10 backdrop-blur-sm",
    icon: <FaReact size={32} color='61DBFB'/>,
  },
  {
    title: "Backend Developer",
    description: "Creating robust APIs with Node.js, Express, and MongoDB.",
    color: "bg-white/10 backdrop-blur-sm",
    icon: <FaNodeJs size={32} color='#F7DF1E
' />,
  },
  {
    title: "UI/UX Enthusiast",
    description: "Designing intuitive user experiences with a focus on usability.",
    color: "bg-white/10 backdrop-blur-sm",
    icon: <FaFigma size={32} style={{ color: "#F24E1E" }} />,
  },
  {
  title: "Problem Solver",
  description: "Enjoy tackling DSA problems and improving system efficiency.",
  color: "bg-white/10 backdrop-blur-sm",
  icon: <FaCode size={32} style={{ color: "#E34C26" }} />, // Orange-like for coding (HTML/Coding theme)
},
{
  title: "Team Player",
  description: "Thrives in collaborative environments with strong communication.",
  color: "bg-white/10 backdrop-blur-sm",
  icon: <FaUsers size={32} style={{ color: "#4ADE80" }} />, // Green (Team/Success theme)
},
{
  title: "Continuous Learner",
  description: "Always exploring new technologies and best practices.",
  color: "bg-white/10 backdrop-blur-sm",
  icon: <FaBook size={32} style={{ color: "#6366F1" }} />, // Indigo (Learning/Knowledge)
},

{
  title: "API Testing",
  description: "Experienced in validating APIs using Postman and Insomnia to ensure backend reliability.",
  color: "bg-white/10 backdrop-blur-sm",
  icon: <SiPostman size={32} style={{ color: "#FF6C37" }} />,
},
{
  title: "Version Control",
  description: "Confident with Git & GitHub for managing codebases, branches, and collaborating in teams.",
  color: "bg-white/10 backdrop-blur-sm",
  icon: <FaGithub size={32} style={{ color: "#FFFFFF" }} />,
},
{
  title: "Coming Soon",
  description: "Stay tuned! A new skill or feature is on the way.",
  color: "bg-white/10 backdrop-blur-sm",
  icon: <FaHourglassHalf size={32} style={{ color: "#FACC15" }} />, // Yellow/gold vibe
},

];

const SkillSection = () => {
  useEffect(() => {
  AOS.init({
    duration: 800, // animation duration in ms
    once: false, // animate only once
  });
}, []);
  return (
    <section id='skills' className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h1 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          Skill<span className='text-primary'>s</span>
        </h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
           {aboutCards.map((card, index) => (
          <div key={index}
           className={`rounded-2xl p-6 shadow-lg hover:scale-105 transform transition duration-300 ${card.color}`}
           data-aos="fade-up"
           data-aos-delay={index * 100} // stagger animations
            >
               <div className='mb-4 flex justify-center'>{card.icon}</div>
               <h3 className='text-xl font-semibold text-center mb-2'>{card.title}</h3>
               <p className='text-sm text-center'>{card.description}</p>
          </div>
            ))}
        </div>
    
</div>
    
    </section>
  );
};

export default SkillSection;
