import React, { useEffect } from 'react';
import imageAbout from "../Assets/Picture26.jpg";
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  // Trigger animation when in view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      className='w-full flex flex-col lg:flex-row px-5 lg:px-8 mt-6 lg:mt-16'
      variants={containerVariants}
      initial='hidden'
      animate={controls}
      ref={ref}
    >
      <div className='lg:w-1/2'>
        <p className='font-custom text-3xl lg:text-[55px] text-[#0a1f2b]'>About Us</p>
        <p className='font-custom text-[#444] text-base lg:text-[25px] mt-2 lg:mt-6'>Metal Group LLC has been operating in the metal industry since 1967.</p>
        <p className='text-[#444] text-sm font-custom1 mt-5 text-justify tracking-tighter'>Metal VM, formerly known as Metal VM, is a distinguished enterprise renowned for its manufacturing prowess in scaffolding systems. Within its extensive product portfolio, scaffolding stands as a cornerstone offering, complemented by a diverse array of related solutions. Notably, Metal VM has cultivated a robust presence in European markets, with a particular focus on Austria and Sweden. Through strategic export initiatives, the company consistently delivers its high-quality scaffolding products to discerning clientele across these nations, showcasing a commitment to excellence and reliability in meeting the stringent standards of the European market.</p>
        <Link to="/about-metal-group" onClick={() => window.scrollTo({ top: 0, left: 0 })}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='bg-[#0a1f2b] text-white w-[200px] mt-5 py-2 rounded-md hover:bg-[#444]'
          >
            See More
          </motion.button>
        </Link>
      </div>
      <motion.div
        className='lg:w-1/2 mt-6 lg:pl-16'
        variants={imageVariants}
        initial='hidden'
        animate={controls}
        ref={ref}
      >
        <img src={imageAbout} alt='' className='w-full h-80 lg:h-96 object-cover' />
      </motion.div>
    </motion.div>
  );
};

export default About;
