import React, { useEffect } from 'react';
import imageAbout from "../Assets/VANGUARD.jpg";
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
      className='w-full flex flex-col justify-center items-center lg:flex-row px-5 lg:px-8 mt-6 lg:mt-16'
      variants={containerVariants}
      initial='hidden'
      animate={controls}
      ref={ref}
    >
      <div className='lg:w-1/2'>
        <p className='font-custom text-3xl lg:text-[55px] text-[#0a1f2b] uppercase'>About Us</p>
        <motion.p className='text-[#444] text-sm font-custom1 mt-4'>
            <b className='text-4xl'>1967</b> <br />
            HAS STARTED WORKING IN THE METAL INDUSTRY SINCE
            <br /><br />
            Metal Group LLC 1967 specialized company for the production of metal structures which operates in two locations where its headquarters is in Gjilan, Kosovo.
            <br /><br />
            The production capacity on a monthly basis will be <b>250–300MT</b> or <b>3000–3600MT</b> on an annual basis thanks to the most modern machinery in the metal industry.
            <br /><br />
            All the processing (steel construction) is for European market for several years now and continues to respond to your requests in the most professional way.
          </motion.p>
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
