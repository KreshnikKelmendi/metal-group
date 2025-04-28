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
            Metal Group 1967 LLC has been operating since <b className='text-lg lg:text-xl'>1967</b>, which since
            those distant years has developed in many directions in the metal
            industry. The last step of Metal Group 1967 LLC has been the next
            investment in increasing production capacities where we built a
            production hall of a surface of 5000m2 in which we have installed the
            latest generation machinery.<br /><br />
            Metal Group 1967 LLC now operates in Gjilan in the Rep.Kosovo which
            is also certified ISO 9001, EN 3834-2 EN 1090-1 EXC 3.
            Our capacities are 400T on a monthly basis.
            Regarding the technical aspect, we also have a technical office where
            we operate with software such as Tekla and we also perform static
            calculations.<br /><br />
            Metal Group 1967 LLC exports to many European countries such as
            Switzerland, Germany, Austria, Luxembourg, the Czech Republic,
            Sweden, France, Estonia, Romania.
            The policy of our company is mainly to create relationships between
            clients in the form of partnership, which leads us to a serious and long-
            term cooperation from both sides.
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
