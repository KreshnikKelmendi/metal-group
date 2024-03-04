import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import firstImage from "../Assets/17130.jpg";
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
      className='w-full px-5 lg:px-12 py-10'
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      variants={staggerChildren}
      ref={ref}
    >
      <p className='text-[#ffaa4a] font-custom text-center'>About us</p>
      <p className='text-center font-custom1 text-[#444] text-3xl'>WHO WE ARE</p>
      <div className='w-full flex flex-col lg:flex-row mt-10'>
        <motion.div className='lg:w-1/2' variants={fadeInLeft}>
          <img src={firstImage} alt='' className='w-full h-80 lg:h-[70vh] object-cover' />
          <p className='text-[#ffaa4a] mt-6 font-custom' variants={fadeInLeft}>
            WHO WE ARE
          </p>
          <motion.p className='text-[#444] font-custom1 mt-2' variants={fadeInLeft}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non ratione officia aspernatur 
            iste et, laudantium magni nobis totam aperiam maxime dolorum dolore assumenda similique 
            nam ab quis sed ea impedit! Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Perferendis magnam dignissimos distinctio cumque assumenda ipsa voluptatem porro facere, 
            minus aliquid dolorum officia molestiae repellat debitis rem expedita sint quas soluta?
          </motion.p>
        </motion.div>
        <motion.div className='lg:w-1/2 lg:ml-6' variants={fadeInLeft}>
          <motion.p className='text-[#444] font-custom1' variants={fadeInLeft}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus eos libero atque 
            aliquam, modi pariatur quae neque sapiente fugit necessitatibus excepturi exercitationem 
            unde quo distinctio voluptates placeat, aspernatur reprehenderit ipsa! Lorem ipsum dolor, sit 
            amet consectetur adipisicing elit. Modi nisi, possimus voluptatem atque est commodi cupiditate 
            alias voluptates, debitis minima hic. Aperiam quam accusantium a inventore blanditiis rem 
            explicabo excepturi.
          </motion.p>
          <img src={secondImage} alt='' className='w-full h-80 lg:h-[70vh] object-cover mt-6' variants={fadeInLeft} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BannerAbout;
