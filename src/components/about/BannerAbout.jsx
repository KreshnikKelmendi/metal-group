import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import firstImage from "../Assets/1681213223660.jpg";
import secondImage from "../Assets/10325.jpg";

const BannerAbout = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const fadeInLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const staggerChildren = {
    visible: { transition: { staggerChildren: 0.5 } },
  };

  return (
    <motion.div
      className='w-full px-5 lg:px-12 py-5 lg:py-10'
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      variants={staggerChildren}
      ref={ref}
    >
      <div className='w-full flex flex-col lg:flex-row items-center'>
        <motion.div className='lg:w-1/2' variants={fadeInLeft}>
          <p className='text-[#444] mt-6 font-custom' variants={fadeInLeft}>
            WHO WE ARE
          </p>
          <motion.p className='text-[#444] text-sm font-custom1 mt-2' variants={fadeInLeft}>
            <b className='text-4xl'>1967</b> <br />
            HAS STARTED WORKING IN THE METAL INDUSTRY SINCE
            <br /><br />
            Metal Group LLC 1967 specialized company for the production of metal structures which operates in two locations where its headquarters is in Gjilan, Kosovo.
            <br /><br />
            The production capacity on a monthly basis will be <b>250–300MT</b> or <b>3000–3600MT</b> on an annual basis thanks to the most modern machinery in the metal industry.
            <br /><br />
            All the processing (steel construction) is for European market for several years now and continues to respond to your requests in the most professional way.
          </motion.p>

        </motion.div>
        <motion.div className='w-full mt-6 lg:mt-0 lg:w-1/2 lg:ml-6' variants={fadeInLeft}>
          <img src={firstImage} alt='' className='w-full h-80 lg:h-[70vh] object-cover' />
          {/* <img src={secondImage} alt='' className='w-full h-80 lg:h-[70vh] object-cover mt-6' variants={fadeInLeft} /> */}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BannerAbout;
