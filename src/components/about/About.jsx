import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import imageAbout from "../Assets/logoMetalAbout.png";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation will only occur once when the component comes into view
    rootMargin: '-50px 0px', // Adjust root margin as needed for the trigger point
  });

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className='w-full px-8 lg:px-8 mt-16'>
      <p className='font-custom text-3xl lg:text-[55px] text-[#0a1f2b]'>About Us</p>
      <p className='font-custom text-[#ffaa4a] text-base lg:text-[25px] mt-2 lg:mt-6 lg:w-1/2'>Metal Group LLC has been operating in the metal industry since 1967.</p>
      <motion.div
        ref={ref}
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='flex flex-col lg:flex-row'
      >
        <div className='lg:w-1/2'>
          <p className='text-[#444] text-sm font-custom1 mt-5 text-justify'>Metal VM, formerly known as Metal VM, is a distinguished enterprise renowned for its manufacturing prowess in scaffolding systems. Within its extensive product portfolio, scaffolding stands as a cornerstone offering, complemented by a diverse array of related solutions. Notably, Metal VM has cultivated a robust presence in European markets, with a particular focus on Austria and Sweden. Through strategic export initiatives, the company consistently delivers its high-quality scaffolding products to discerning clientele across these nations, showcasing a commitment to excellence and reliability in meeting the stringent standards of the European market.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='bg-[#0a1f2b] text-white w-[200px] mt-5 py-2 hover:bg-[#ffaa4a]'
          >
            See More
          </motion.button>
        </div>
        <motion.div
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='lg:w-1/2 mt-6 lg:mt-0 lg:pl-16'
        >
          <img src={imageAbout} alt='' className='w-full lg:mt-[-50px] h-60 lg:h-[60vh] object-contain' />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;