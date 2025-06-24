import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id='contact' className=" bg-background-sm py-24 px-6 relative overflow-hidden rounded">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Connect <span className="text-primary">with</span> <br />Me
        </h1>
        <p className="text-base md:text-lg mb-8">
          Reach out to me today, let's discuss how I can help you
        </p>
         <a
          href="mailto:varunakamthi522004@gmail.com"
           className="inline-flex items-center justify-center px-8 py-3 border border-purple-500  rounded-lg hover:bg-purple-600 transition duration-300">
            Let’s get in touch <Send className="ml-2 w-4 h-4" />
            </a>

      </div>

      {/* Footer */}
      <div className="absolute bottom-6 left-6 text-sm ">
        Copyright © 2024 <span className="font-semibold">Varun Kamathi</span>
      </div>

      {/* Social Icons */}
      <div className="absolute bottom-6 right-6 flex gap-4">
        <a
          href="https://github.com/varunkamathi"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/5 p-2 rounded-md hover:bg-white/10"
        >
          <FaGithub className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/varun-kamathi-0295b4288/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/5 p-2 rounded-md hover:bg-white/10"
        >
          <FaLinkedin className="w-5 h-5" />
        </a>
        
      </div>
    </section>
  );
};

export default ContactSection;
