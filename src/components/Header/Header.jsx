import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import menu from "../Assets/menu.png";
import closeIcon from "../Assets/cross.png";
import logo from "../Assets/metalLogo.png";
import {motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  
  const [open, setOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`w-full lg:px-10 px-5 shadow-sm shadow-[#a9abb014] z-50 ${scrolling ? 'bg-[#0a1f2b]' : ''}`}>
      <div className='lg:flex items-center justify-between py-4 z-50'>
        <div className=''>
          <Link to="/" onClick={() => window.scrollTo({ top: 0, left: 0 })}>
            <img className='w-12 h-12 object-contain' src={logo} alt='' />
            <p className='text-base text-black font-custom'></p>
          </Link>
        </div>

        <div className='hidden lg:flex justify-center items-center'>
          <ul className='lg:flex lg:items-center uppercase text-center lg:pb-0 pb-12 font-normal text-[15px] lg:text-[14px] gap-x-12'>
            <li className='lg:my-0 my-7 font-custom'>
              <NavLink onClick={closeMenu} exact to="/" className='text-black hover:text-gray-400 duration-500 active:text-red-500'>Home</NavLink>
            </li>
            <li className='lg:my-0 my-7 font-custom'>
              <NavLink onClick={closeMenu} to="/about-metal-group" className='text-black hover:text-gray-400 duration-500 active:text-red-500'>About Us</NavLink>
            </li>
            <li className='lg:my-0 my-7 font-custom'>
              <NavLink onClick={closeMenu} to="/services" className='text-black hover:text-gray-400 duration-500 active:text-red-500'>Services</NavLink>
            </li>
            <li className='lg:my-0 my-7 font-custom'>
              <NavLink onClick={closeMenu} to="/our-works" className=' text-black hover:text-gray-400 duration-500 active:text-red-500'>Our Work</NavLink>
            </li>
            <li className='lg:my-0 my-7 font-custom'>
              <NavLink onClick={closeMenu} to="/contact" className=' text-black hover:text-gray-400 duration-500 active:text-red-500'>Contact</NavLink>
            </li>
            
          </ul>
        </div>

        {/* <div className='lg:flex items-center'>
          <button className='hidden lg:block text-black bg-[white] hover:bg-indigo-700 py-2 px-4 font-custom1 text-sm'>
            GET IN TOUCH
          </button>
        </div> */}

        <div onClick={toggleMenu} className='text-3xl absolute right-5 top-6 cursor-pointer lg:hidden'>
          {open ? (
            <p className='text-black font-custom1 text-base'>X</p>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#000"
              viewBox="0 0 24 24"
              width="28"
              height="28"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M4 18h16c.552 0 1-.448 1-1s-.448-1-1-1H4c-.552 0-1 .448-1 1s.448 1 1 1zm0-5h16c.552 0 1-.448 1-1s-.448-1-1-1H4c-.552 0-1 .448-1 1s.448 1 1 1zM3 7c0-.552.448-1 1-1h16c.552 0 1 .448 1 1s-.448 1-1 1H4c-.552 0-1-.448-1-1z" />
            </svg>
          )}
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
  {open && (
    <motion.div
      initial={{ opacity: 0, x: '-100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '-100%' }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className={`lg:hidden text-center py-10 absolute border-b border-gray-50 shadow-xl shadow-gray-200 z-50 bg-[#FFF6E7] top-0 left-0 w-full lg:w-auto lg:pl-0`}
    >
      <p className='absolute top-1 right-2 border border-black px-2 text-sm font-extrabold font-custom1 hover:bg-black hover:text-white rounded-md bg-white text-right' onClick={toggleMenu}>X</p>
      <ul className='py-10 grid gap-y-10 uppercase font-custom'>
        <motion.li
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <NavLink onClick={closeMenu} exact to="/" className='text-black hover:text-gray-400 duration-500 active:text-red-500'>Home</NavLink>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <NavLink onClick={closeMenu} to="/about-metal-group" className='text-black hover:text-gray-400 duration-500 active:text-red-500'>About Us</NavLink>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <NavLink onClick={closeMenu} to="/services" className='text-black hover:text-gray-400 duration-500 active:text-red-500'>Services</NavLink>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <NavLink onClick={closeMenu} to="/our-works" className='text-black hover:text-gray-400 duration-500 active:text-red-500'>Our Work</NavLink>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ delay: 1.0, duration: 0.5 }}
        >
          <NavLink onClick={closeMenu} to="/contact" className='text-black hover:text-gray-400 duration-500 active:text-red-500'>Contact</NavLink>
        </motion.li>
      </ul>
    </motion.div>
  )}
</AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
