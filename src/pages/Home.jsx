import React from 'react'
import ThemeToggle from '../components/ThemeToggle';
import  StarBackground  from '../components/StarBackground';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillSection from '../components/SkillSection';
import ContactSection from '../components/ContactSection';
import ProjectSection from '../components/ProjectSection';

const Home = () => {
  return (
    <div >
    {/*Theme Toggle*/}
    <ThemeToggle/>

    {/*Star Background */}
    <StarBackground/>
    {/*Navbar */}
    <NavBar/>
    {/*main content*/}
    <main>
      <HeroSection/>
      <AboutSection/>
      <ProjectSection/>
      <SkillSection/>
      <ContactSection/>
    </main>

    </div>
  )
}

export default Home;