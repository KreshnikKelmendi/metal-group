import React from 'react';
import metalLogo from '../Assets/metalLogo.png';
import certificate1 from '../Assets/cer1.png';
import certificate2 from '../Assets/Picture20.png';
import certificate3 from '../Assets/Picture18.png';
import certificate4 from '../Assets/Picture22.png';

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
              {/* <h3 className="text-lg font-semibold mb-2 text-[#ffaa4a]">QUICK LINKS</h3> */}
              <ul className="space-y-4 text-sm text-center">
              <li>
                  <a href="/" className="hover:text-gray-300">
                    Home
                  </a>
                </li>
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
                    Contact
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
    {/* <h3 className="text-lg font-semibold font-custom mb-2 text-[#ffaa4a]">CONTACT US</h3> */}
    <ul className="space-y-4 text-sm text-center">
        <li className="flex items-center">
        <span className='text-sm mr-2'>📍</span>
            <a href="" className="hover:text-gray-300">
                123 Main Street, Cityville
            </a>
        </li>
        <li className="flex items-center">
        <span className='text-sm mr-2'>📧</span>
            <a href="" className="hover:text-gray-300">
                contact@example.com
            </a>
        </li>
        <li className="flex items-center">
        <span className='text-sm mr-2'>📞</span>
            <a href="" className="hover:text-gray-300">
                +383 44 123 456
            </a>
        </li>
    </ul>
</div>

          </nav>
        </div>

      </footer>

      <div className="bg-[#0a1f2b] py-10 px-5 lg:px-10 justify-center items-center ">
      <h3 className="text-lg font-custom active font-semibold text-center text-white">Certificates</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 mt-6 justify-center items-center ">
          
            <img src={certificate1} alt="Certificate 1" className="w-52 lg:w-96 p-3 h-56 lg:h-80 object-fill lg:object-contain" />
            <img src={certificate2} alt="Certificate 2" className="w-52 lg:w-96 p-3 h-56 lg:h-80 object-fill lg:object-contain" />
            <img src={certificate3} alt="Certificate 3" className="w-52 lg:w-96 p-3 h-56 lg:h-80 object-fill lg:object-contain" />
            <img src={certificate4} alt="Certificate 4" className="w-52 lg:w-96 p-3 h-56 lg:h-80 object-fill lg:object-contain" />
          </div>
        </div>

        <div className="bg-gray-800 h-12 flex flex-col justify-center items-center">
    <p className="text-xs text-white font-custom1">Metal Group © 2024 | All Rights Reserved</p>
    </div>
   
     
    </>
  );
};

export default Footer;
