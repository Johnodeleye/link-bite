"use client";
import {assets} from '../assets/assets'
import Image from "next/image";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };


  return (
    <header className="bg-white dark:bg-gray-800 shadow-lg">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" onClick={toggleDarkMode} className="text-2xl font-bold text-indigo-800 dark:text-white transition-colors duration-300">
          <Image src='/logo.png' alt='logo' width={250} height={250} className="w-24 lg:w-fit " /> 
        </a>

        {/* Dark Mode Toggle (mobile) */}
        <button
          onClick={toggleDarkMode}
          className="text-gray-700 dark:text-gray-200 hover:text-indigo-800 dark:hover:text-white focus:outline-none transition-colors duration-300 md:hidden"
        >
          {isDarkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>

         {/* Sign Up Button */}
         <a href="/signup" className="bg-neon text-white  dark:text-black px-4 py-2 rounded-lg hover:text-white hover:shadow-md hover:shadow-charcoal dark:hover:shadow-neon dark:bg-text-black transition-colors duration-300">
            Get Started ➡
          </a>

        

        <div className="hidden md:flex space-x-6">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="nav-link text-gray-700 dark:text-gray-200 hover:text-indigo-800 dark:hover:text-white transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {/* Dark Mode Toggle (desktop) */}
          <button
            onClick={toggleDarkMode}
            className="text-gray-700 dark:text-gray-200 hover:text-indigo-800 dark:hover:text-white focus:outline-none transition-colors duration-300"
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
          {/* Sign Up Button */}
          <a href="/signup" className="bg-neon text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300">
            Sign Up
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={()=> setShowMobileMenu(true)}
          className="md:hidden text-gray-700 dark:text-gray-200 hover:text-indigo-800 dark:hover:text-white focus:outline-none transition-colors duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

              {/* ------------Mobile Menu----------------- */}
      {showMobileMenu && (
      <div className="fixed top-0 bottom-0 right-0 w-full overflow-hidden transition-transform ease-in-out bg-white dark:bg-charcoal duration-5000s md:hidden text-white dark:text-neon z-50">
        <div className='flex justify-end p-6 cursor-pointer'>
          <Image src={assets.cross_icon} className='w-6 text-red-500 dark:border dark:border-neon rounded-sm dark:bg-neon' alt="close"  onClick={() => setShowMobileMenu(false)}/>
        </div>
        <ul className='flex flex-col items-center gap-2 px-5 mt-5 text-lg font-medium'>
        <a onClick={() => setShowMobileMenu(false)} href="#Header" className='inline-block px-4 py-2 rounded-full cursor-pointer hover:text-neon hover:shadow-sm hover:shadow-neon text-charcoal dark:text-neon'>Home</a>
        <a onClick={() => setShowMobileMenu(false)} href="#About" className='inline-block px-4 py-2 rounded-full cursor-pointer  hover:text-neon hover:shadow-sm hover:shadow-neon text-charcoal dark:text-neon'>About</a>
        <a onClick={() => setShowMobileMenu(false)} href="#Service" className='inline-block px-4 py-2 rounded-full cursor-pointer  hover:text-neon hover:shadow-sm hover:shadow-neon text-charcoal dark:text-neon'>Service</a>
        <a onClick={() => setShowMobileMenu(false)} href="#Contact" className='inline-block px-4 py-2 rounded-full cursor-pointer  hover:text-neon hover:shadow-sm hover:shadow-neon text-charcoal dark:text-neon'>Contact</a>
        <a onClick={() => setShowMobileMenu(false)} href="" className='inline-block px-4 py-2 rounded-full cursor-pointer  hover:text-neon hover:shadow-sm hover:shadow-neon text-charcoal dark:text-neon'>Blog</a>
        </ul>
      </div>
      )}

      </nav>
    </header>
  );
};

export default Navbar;
