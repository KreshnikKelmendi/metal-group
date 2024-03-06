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
                Metal VM, previously recognized as Metal VM, stands as a distinguished enterprise 
                esteemed for its exceptional expertise in the manufacturing of scaffolding systems. 
                Encompassing a broad spectrum of offerings within its expansive product lineup, 
                scaffolding emerges as a pivotal cornerstone, accompanied by a varied assortment 
                of associated solutions.<br /> <br />
          </motion.p>
          <motion.p className='text-[#444] font-custom1 text-sm' variants={fadeInLeft}>
          Noteworthy is Metal VM's establishment of a formidable 
                presence within European markets, with a distinct emphasis placed on cultivating 
                strong footholds in Austria and Sweden.
            Leveraging strategic export endeavors, the company consistently extends its repertoire of 
            high-caliber scaffolding products to a discerning clientele spread across these nations, 
            thereby underscoring its unwavering dedication to upholding standards of excellence and 
            reliability that resonate with the exacting requirements of the European market.
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
