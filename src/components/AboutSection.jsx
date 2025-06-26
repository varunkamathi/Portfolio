import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import Git from "../assets/git.png";
import Code from "../assets/code.png";
import MERNImage from "../assets/MERN2.png";
import PC from "../assets/pc.png"


const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section id='about' className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h1 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          About <span className='text-primary'>Me</span>
        </h1>

        {/* First Row */}
        <div className="flex flex-col md:flex-row mt-6 gap-6 items-center">
          {/* Left Card */}
          <div
            className="md:basis-[40%] w-full relative rounded-xl p-6 text-white bg-black h-77 flex flex-col justify-between overflow-hidden"
            data-aos="fade-right"
          >
            <img
              src={Code}
              alt="Git Code Background"
              className="absolute bottom-2 right-2 pointer-events-none select-none"
            />
            <div>
              <div className="flex items-center gap-2 mb-4">
                <h2 className="text-xl font-bold"> Skilled in debugging and resolving errors with a logical approach.</h2>
              </div>
             
            </div>
          </div>

          {/* Right Card */}
          <div className="md:basis-[60%] w-full h-77" data-aos="fade-left">
            
            <div className="rounded-xl p-1">
              <div className="h-full w-full rounded-xl overflow-hidden">
                <img
                  src={Git}
                  alt="Git Illustration"
                  className="h-full w-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col md:flex-row gap-6 w-full mt-5">
          <div
  className="md:basis-[60%] w-full bg-black bg-cover bg-center p-6 rounded-xl shadow-md text-white h-65 relative "
  style={{ backgroundImage: `url(${MERNImage})` }}
  data-aos="fade-right"
>
  <div className="absolute inset-0  z-0" /> {/* Overlay */}
  <div className="relative z-10">
    <h2 className="text-3xl font-bold mb-1">Full <span>{"  "}</span> Stack Expertise</h2>
   
  </div>
</div>


          <div
  className="md:basis-[40%] w-full relative backdrop-blur-sm p-6 rounded-xl shadow-md overflow-hidden"
  data-aos="fade-left"
  style={{backgroundColor: "#020b11"}}
>
  {/* Background Image Positioned at Bottom Right */}
  <img
    src={PC}
    alt="PC Background"
    className="absolute bottom-0 right-0 w-[35%]  pointer-events-none select-none object-contain"
  />

  {/* Foreground Text Content */}
  <h1 className="text-xl font-bold leading-relaxed relative z-10 text-left w-[60%] text-white">
    Hi, I'm Varun, MERN stack developer from India. I build scalable web apps witu seamless UI/UX.
  </h1>
</div>

        </div>

        {/* Third Row */}
        {/*
        <div className="flex flex-col md:flex-row gap-6 w-full mt-5">
          <div
            className="md:basis-[35%] w-full bg-black backdrop-blur-sm p-6 rounded-xl shadow-md text-white h-60"
            data-aos="fade-right"
          >
            <h2 className="text-xl font-bold mb-2">API Integration</h2>
            <p className="text-sm leading-relaxed">
              Integrated third-party and custom APIs for payment gateways, maps, data sources, and more, improving functionality and user experience.
            </p>
          </div>

          <div
            className="md:basis-[75%] w-full bg-black backdrop-blur-sm p-6 rounded-xl shadow-md text-white"
            data-aos="fade-left"
          >
            <h2 className="text-xl font-bold mb-2">Responsive Design</h2>
            <p className="text-sm leading-relaxed">
              Developed mobile-first interfaces with Tailwind CSS and React, ensuring seamless experience across devices with dynamic layouts and breakpoints.
            </p>
          </div>
        </div>
        */}
      </div>
    </section>
  );
};

export default AboutSection;
