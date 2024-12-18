import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { worksData } from '../data/data';
// import { ReactComponent as PdfIcon } from '../assets/pdf-icon.svg'; // Assuming you have an SVG file for the PDF icon
import pdfFile from "../Assets/file.png"
import katalogu from "../Assets/METAL GROUP - CATALOGUE.pdf"

const Works = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const textVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
  };

  return (
    <>
      <div className='w-full py-5 px-5 lg:px-10'>
        <p className='font-custom text-3xl uppercase text-center text-[#444]'>Our Works</p>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 gap-y-12 mt-8'>
          {worksData?.map((work, index) => (
            <div key={index} className='relative' onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(-1)}>
              <img src={work.firstImage} alt='' className='w-full h-64 lg:h-[50vh] object-cover'/>
              <Link to={`/our-works/${work.id}`} onClick={() => window.scrollTo({ top: 0, left: 0 })}>
                {hoveredIndex === index && (
                  <div className='absolute inset-0 flex flex-col lg:h-[50vh] justify-center items-center bg-black bg-opacity-80'>
                    <motion.p 
                        variants={textVariants} 
                        initial="hidden"
                        animate="visible" 
                        className='text-white font-bold cursor-pointer'>
                            {work.textTitle}
                    </motion.p>
                  </div>
                )}
                {/* <p className='mt-4 font-custom text-[#444]'>{work.textTitle}</p>
                <p className='font-custom1 text-sm mt-2 text-[#444]'>{work.description}</p> */}
                {/* <button className='border-b border-gray-400 font-custom1 text-[#444] mt-4 text-sm'>See more</button> */}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Download Catalogue Section */}
      <div className='w-full flex justify-center items-center py-10'>
        <a href={katalogu} download='Metal Group - Catalogue' className='flex uppercase items-center bg-blue-900 text-white px-3 py-2 rounded-md font-custom1'>
          <img src={pdfFile} alt='' className='w-5 h-5 mr-2' />
          Download Our Catalogue
        </a>
      </div>
    </>
  );
}

export default Works;
