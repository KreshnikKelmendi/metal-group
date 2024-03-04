import React from 'react';
import metalLogo from '../Assets/metalLogo.png';
import certificate1 from '../Assets/certificate1.jpg';
import certificate2 from '../Assets/certificate2.png';
import certificate3 from '../Assets/certificate1.jpg';

const Footer = () => {
  return (
    <>
      <footer className="bg-[#0a1f2b] lg:px-10 relative lg:h-60 justify-center items-center flex flex-col lg:flex-row text-white py-8">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-around">
          <div className="mb-4 lg:mb-0">
            <img src={metalLogo} alt="Metal Logo" className="w-32 h-auto" />
          </div>
          <nav className="flex flex-col lg:flex-row lg:ml-8 space-y-10 lg:space-y-0 lg:space-x-24">
            <div className="mb-4 lg:mb-0 mt-6 lg:mt-0">
              <h3 className="text-lg font-semibold mb-2 text-[#ffaa4a]">QUICK LINKS</h3>
              <ul className="space-y-4 text-base lg:text-center">
                <li>
                  <a href="/about-gjelber" className="hover:text-gray-300">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/ballina" className="hover:text-gray-300">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/faq" className="hover:text-gray-300">
                    Kontakti
                  </a>
                </li>
              </ul>
            </div>
            {/* <div className="mb-4 lg:mb-0 lg:ml-8">
              <h3 className="text-lg font-semibold mb-2">Products</h3>
              <ul className="space-y-2 text-[12px]">
                <li>
                  <a href="/category-1" className="hover:text-gray-300">
                    Category 1
                  </a>
                </li>
                <li>
                  <a href="/category-2" className="hover:text-gray-300">
                    Category 2
                  </a>
                </li>
              </ul>
            </div> */}
           <div className="mb-4 lg:mb-0 lg:ml-8">
    <h3 className="text-lg font-semibold font-custom mb-2 text-[#ffaa4a]">CONTACT US</h3>
    <ul className="space-y-4 text-base text-center">
        <li className="flex items-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 mr-2"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 21s-8-4.5-8-11.8C4 5.4 9.6 2 12 2s8 3.4 8 7.2c0 7.3-8 11.8-8 11.8z"
                />
                <circle fill="currentColor" cx="12" cy="12" r="3" />
            </svg>
            <a href="/join-community" className="hover:text-gray-300">
                123 Main Street, Cityville
            </a>
        </li>
        <li className="flex items-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 mr-2"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M22 12h-6m0 0l-2-2m2 2l-2 2m16-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
            <a href="/join-community" className="hover:text-gray-300">
                contact@example.com
            </a>
        </li>
        <li className="flex items-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 mr-2"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 2a2 2 0 00-2 2v14a2 2 0 002 2h4a2 2 0 002-2V4a2 2 0 00-2-2zM4 6h8m-8 0a4 4 0 014-4h8a4 4 0 014 4v8a4 4 0 01-4 4H8a4 4 0 01-4-4V6z"
                />
            </svg>
            <a href="/join-community" className="hover:text-gray-300">
                +1 (123) 456-7890
            </a>
        </li>
    </ul>
</div>

          </nav>
        </div>

      </footer>

      <div className="bg-[#0a1f2b] py-10 justify-center  items-center">
      <h3 className="text-lg font-semibold text-center text-white mb-2">Certificates</h3>
          <div className="flex space-x-4 justify-center items-center">
          
            <img src={certificate1} alt="Certificate 1" className="w-24 h-auto" />
            <img src={certificate2} alt="Certificate 2" className="w-24 h-auto" />
            <img src={certificate3} alt="Certificate 3" className="w-24 h-auto" />
          </div>
        </div>

        <div className="bg-gray-800 h-14 flex flex-col justify-center items-center">
    <p className="text-xs text-white mb-2 font-custom1">Metal Group © 2024 | All Rights Reserved</p>
    </div>
   
     
    </>
  );
};

export default Footer;
