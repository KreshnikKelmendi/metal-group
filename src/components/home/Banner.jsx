import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// import Header from '../Header/Header';

const Banner = () => {
  const [text, setText] = useState('');
  
  useEffect(() => {
    const targetText = 'METAL GROUP';
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex <= targetText.length) {
        setText(targetText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 200);

    return () => clearInterval(intervalId);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <>
      <div className="h-screen bg-black bg-metal bg-center flex flex-col items-center">
        {/* <Header /> */}
        <motion.div
          className="flex lg:w-1/2 bg-[#0a1f2b] absolute lg:left-3 font-custom font-bold text-center top-1/2 items-center justify-center bg-opacity-75 text-white p-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="font-bold mb-4">
            <span className="text-lg font-custom1">WELCOME TO FACTORY & METAL INDUSTRY COMPANY</span>
            <br />
                <p className='text-white text-4xl'>METAL GROUP</p>
          </motion.h1>
        </motion.div>
      </div>
    </>
  );
};

export default Banner;
