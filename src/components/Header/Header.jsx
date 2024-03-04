import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import menu from "../Assets/menu.png";
import closeIcon from "../Assets/remove.png";
import logo from "../Assets/logoMetalAbout.png";

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
    <div className={`w-full lg:px-10 px-5 z-50 ${scrolling ? 'bg-[#0a1f2b]' : 'bg-[#0a1f2b]'}`}>
      <div className='lg:flex items-center justify-between py-4 z-50'>
        <div className=''>
          <Link to="/" onClick={() => window.scrollTo({ top: 0, left: 0 })}>
            <img className='w-12 h-12 object-contain' src={logo} alt='' />
            <p className='text-base text-black font-custom'></p>
          </Link>
        </div>

        <div className='hidden lg:flex justify-center items-center'>
          <ul className='lg:flex lg:items-center uppercase text-center lg:pb-0 pb-12 font-normal text-[15px] lg:text-[12px] gap-x-12'>
            <li className='lg:my-0 my-7 font-custom'>
              <NavLink onClick={closeMenu} exact to="/" className='text-white hover:text-gray-400 duration-500 active:text-red-500'>Home</NavLink>
            </li>
            <li className='lg:my-0 my-7 font-custom'>
              <NavLink onClick={closeMenu} to="/about-metal-group" className='text-white hover:text-gray-400 duration-500 active:text-red-500'>About Us</NavLink>
            </li>
            <li className='lg:my-0 my-7 font-custom'>
              <NavLink onClick={closeMenu} to="/services" className='text-white hover:text-gray-400 duration-500 active:text-red-500'>Services</NavLink>
            </li>
            <li className='lg:my-0 my-7 font-custom'>
              <NavLink onClick={closeMenu} to="/contact" className=' text-white hover:text-gray-400 duration-500 active:text-red-500'>Contact</NavLink>
            </li>
            <button className='uppercase hidden lg:block bg-[#444] text-white hover:bg-indigo-700 py-2 px-3 font-custom text-[10px]'>
            <a href="mailto:info@group.com">GET IN TOUCH</a>
          </button>
          </ul>
        </div>

        {/* <div className='lg:flex items-center'>
          <button className='hidden lg:block text-black bg-[white] hover:bg-indigo-700 py-2 px-4 font-custom1 text-sm'>
            GET IN TOUCH
          </button>
        </div> */}

        <div onClick={toggleMenu} className='text-3xl absolute right-5 top-6 cursor-pointer lg:hidden'>
          {open ? (
            <img className='w-7 h-7 object-cover' src={closeIcon} alt='' />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#FFF"
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
        <div className={`lg:hidden text-center py-10 absolute z-50 bg-[#0a1f2b] top-18 left-0 w-full lg:w-auto lg:pl-0 transition-all duration-500 ease-in ${open ? 'flex justify-center items-center' : 'hidden'}`}>
          <ul className='py-10 grid gap-y-10 uppercase'>
            <li>
              <NavLink onClick={closeMenu} exact to="/" className='text-white hover:text-gray-400 duration-500 active:text-red-500'>Home</NavLink>
            </li>
            <li>
              <NavLink onClick={closeMenu} to="/about-metal-group" className='text-white hover:text-gray-400 duration-500 active:text-red-500'>About Us</NavLink>
            </li>
            <li>
              <NavLink onClick={closeMenu} to="/services" className='text-white hover:text-gray-400 duration-500 active:text-red-500'>Services</NavLink>
            </li>
            <li>
              <NavLink onClick={closeMenu} to="/contact" className=' text-white hover:text-gray-400 duration-500 active:text-red-500'>Contact</NavLink>
            </li>
            {/* Button inside the mobile menu */}
            <li className='text-white border border-white px-5 py-1 font-custom1 font-bold hover:bg-white hover:text-[#444]'>
              
                <a href="mailto:info@group.com">GET IN TOUCH</a>
              
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
