import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
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
      className='w-full h-screen px-5 lg:px-10 py-10'
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      variants={staggerChildren}
      ref={ref}
    >
        <p className='text-[#ffaa4a] font-custom text-center'>Contact Us</p>
      <p className='text-center font-custom1 text-[#444] text-3xl'>Feel free to contact!</p>

      <div className='flex flex-col mt-8 lg:flex-row'>
        <motion.div className='lg:w-1/2 mb-8 lg:mb-0' variants={fadeInLeft}>
          <div className=''>
            <div className='flex items-center mb-4'>
              <span className='text-2xl mr-2'>📧</span>
              <span className='font-bold'>Email:</span>
            </div>
            <p className='mb-6'>
              <a href='mailto:info@example.com' className='text-blue-500 hover:underline'>info@example.com</a>
            </p>

            <div className='flex items-center mb-4'>
              <span className='text-2xl mr-2'>📍</span>
              <span className='font-bold'>Location:</span>
            </div>
            <p className='mb-6'>123 Main Street, City, Country</p>

            <div className='flex items-center mb-4'>
              <span className='text-2xl mr-2'>📞</span>
              <span className='font-bold'>Phone:</span>
            </div>
            <p className='mb-6'>+123 456 7890</p>

            <div className='mb-4'>
              <p className='font-bold'>Description:</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </motion.div>

        <motion.div className='lg:w-1/2 h-[100vh] lg:h-96' variants={fadeInLeft}>
        
            <iframe
              title='Location Map'
              className='w-full h-[100%]'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.606159189577!2d-122.08394558429615!3d37.386051879846356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbc033f0ed8b1%3A0x80f620a91a6b3f!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1638326857924!5m2!1sen!2sus'
              loading='lazy'
            ></iframe>
        
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
