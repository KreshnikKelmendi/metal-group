import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import visionImage from '../Assets/1176.jpg';

const Vision = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className='py-10'>
      {/* Vision Header */}
      <motion.p
        className='text-[#ffaa4a] font-custom text-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        VISION & MISSION
      </motion.p>

      {/* Vision Content */}
      <div className='w-full mt-10 relative'>
        {/* Vision Image */}
        <motion.img
          src={visionImage}
          alt='Vision'
          className='w-full h-96 object-cover'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Vision Overlay */}
        <motion.div
          ref={ref}
          className='bg-white p-5 shadow-md shadow-gray-400 relative mt-[-280px] flex py-10 lg:py-0 lg:h-80 justify-center items-center mx-4 lg:mx-16'
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          transition={{ duration: 1 }}
        >
          {/* Vision Text */}
          <motion.p
            className='mx-auto lg:w-[66%] lg:py-16 font-custom1 text-justify tracking-tighter text-[#444]'
            variants={textVariants}
          >
            Our commitment lies not only in delivering products of superior quality but also in fostering 
            enduring and prosperous relationships with both our valued customers and esteemed suppliers. 
            By consistently providing high-caliber products, we aim to instill confidence and satisfaction 
            in our clientele, ensuring that their needs and expectations are not just met but exceeded. 
            Moreover, we recognize the vital role that our suppliers play in our operations, and we 
            endeavor to cultivate partnerships characterized by mutual respect, trust, and collaboration. 
            Through this dedicated focus on quality and relationship-building, we strive to establish 
            ourselves as a trusted ally in the marketplace, dedicated to the success and satisfaction of 
            all stakeholders involved.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Vision;
