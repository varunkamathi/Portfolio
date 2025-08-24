import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import Git from "../assets/git.png";
import Code from "../assets/code.png";
import MERNImage from "../assets/MERN2.png";
import PC from "../assets/pc.png";


const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section id='about' className='py-16 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h1 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          About <span className='text-primary'>Me</span>
        </h1>

        {/* First Row */}
        <div className="flex flex-col md:flex-row mt-6 gap-6 items-stretch">
          {/* Left Card */}
          <div
            className="md:basis-[40%] w-full relative rounded-xl p-6 text-white bg-black flex flex-col justify-between overflow-hidden"
            data-aos="fade-right"
          >
            <img src={Code} alt="Git Code Background" className="absolute bottom-2 right-2 pointer-events-none select-none" />
            <div>
              <h2 className="text-lg md:text-xl font-bold">
                Skilled in debugging and resolving errors with a logical approach.
              </h2>
            </div>
          </div>

          {/* Right Card */}
          <div className="md:basis-[60%] w-full" data-aos="fade-left">
            <div className="rounded-xl">
              <img
                src={Git}
                alt="Git Illustration"
                className="h-56 md:h-full w-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col md:flex-row gap-6 w-full mt-6">
          {/* Left */}
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


          {/* Right */}
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
    Hi, I'm Varun, MERN stack developer from India. I build scalable web apps with seamless UI/UX.
  </h1>
</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
