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

  const itemDelay = 0.2;

  return (
    <motion.div
      className='w-full px-5 lg:px-10 py-10'
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      variants={staggerChildren}
      ref={ref}
    >
      <p className='text-[#444] font-custom text-center uppercase'>Contact Us</p>
      <p className='text-center font-custom1 text-[#444] uppercase text-2xl lg:text-3xl'>Feel free to contact us!</p>

      <div className=' mt-8'>
        

        <motion.div className='h-96 lg:h-[100vh] mt-6' variants={fadeInLeft}>
          <iframe 
              title='Location Map' 
              className='w-full h-full' 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94188.71061523256!2d21.314556660000946!3d42.461840106248346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13548d28fe87b91d%3A0xab45b8a9d06a705!2sGjilan!5e0!3m2!1sen!2s!4v1713414524032!5m2!1sen!2s" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
