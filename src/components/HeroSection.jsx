import React from 'react'
import varun from "../assets/image.png"
import { ArrowDown } from 'lucide-react'

const HeroSection = () => {
  return (
    <section id='hero' className='relative min-h-screen flex flex-col items-center justify-center px-4'>
      <div className='container max-w-4xl mx-auto text-center z-10 mb-20 mt-20'>
        <div className='space-y-6'>
          <div className="flex justify-center">
            <div className="h-64 w-64 rounded-full p-1 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500">
              <div className="h-full w-full rounded-full">
                <img 
                  src={varun} 
                  alt="Varun Kamathi"
                  className="h-full w-full rounded-full object-cover animate-zoom-in-out"
                />
              </div>
            </div>
          </div>

          <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
            <span className='opacity-0 animate-fade-in'>Hi, I'm</span>
            <span className='text-primary opacity-0 animate-fade-in-delay-1'> Varun</span>
            <span className='text-gradient ml-2 opacity-0 animate-fade-in-delay-2'>Kamathi</span>
          </h1>

          <p className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3'>
            As a Full Stack Developer, I don't just build features. I build scalable,
            reliable, and user-focused products with confidence and precision.
          </p>
        </div>

        <div className='pt-4 opacity-0 animate-fade-in-delay-1'>
          <a href="#projects" className='cosmic-button'>View My Work</a>
        </div>
      </div>

      
    </section>
  )
}

export default HeroSection
