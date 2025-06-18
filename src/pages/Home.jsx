import React from 'react'
import ThemeToggle from '../components/ThemeToggle';
import  StarBackground  from '../components/StarBackground';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
    {/*Theme Toggle*/}
    <ThemeToggle/>

    {/*Star Background */}
    <StarBackground/>
    {/*Navbar */}
    <NavBar/>
    {/*main content*/}
    <main>
      <HeroSection/>
    </main>

    </div>
  )
}

export default Home;