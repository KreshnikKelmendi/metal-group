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
      <p className='text-[#444] font-custom text-center'>Contact Us</p>
      <p className='text-center font-custom1 text-[#444] text-3xl'>Feel free to contact us!</p>

      <div className=' mt-8'>
        <motion.div className=' mb-8 lg:mb-0' variants={fadeInLeft}>
          <div className=''>
            <div className='flex items-center mb-4'>
              <span className='text-xl mr-2'>📧</span>
              <span className='font-bold font-custom'>Email:</span>
            </div>
            <motion.p className='mb-6 font-custom1' variants={{ visible: { opacity: 1, x: 0 }, hidden: { opacity: 0, x: -20 } }} initial='hidden' animate={inView ? 'visible' : 'hidden'} transition={{ delay: itemDelay }}>
              <a href='mailto:info@example.com' className=' hover:underline'>info@metalgroupllc.com</a>
            </motion.p>

            <div className='flex items-center mb-4'>
              <span className='text-xl mr-2'>📍</span>
              <span className='font-bold font-custom'>Location:</span>
            </div>
            <motion.p className='mb-6 font-custom1' variants={{ visible: { opacity: 1, x: 0 }, hidden: { opacity: 0, x: -20 } }} initial='hidden' animate={inView ? 'visible' : 'hidden'} transition={{ delay: itemDelay * 2 }}>
             15 November 151, 17523 Presevo, Serbia
            </motion.p>

            <div className='flex items-center mb-4'>
              <span className='text-xl mr-2'>📞</span>
              <span className='font-bold font-custom'>Phone:</span>
            </div>
            <motion.p className='mb-6 font-custom1' variants={{ visible: { opacity: 1, x: 0 }, hidden: { opacity: 0, x: -20 } }} initial='hidden' animate={inView ? 'visible' : 'hidden'} transition={{ delay: itemDelay * 3 }}>
              +383 49 123 456
            </motion.p>

            {/* <motion.div className='mb-4' variants={{ visible: { opacity: 1, x: 0 }, hidden: { opacity: 0, x: -20 } }} initial='hidden' animate={inView ? 'visible' : 'hidden'} transition={{ delay: itemDelay * 4 }}>
             
            </motion.div> */}
          </div>
        </motion.div>

        <motion.div className='h-96 lg:h-[100vh] mt-6' variants={fadeInLeft}>
          <iframe
            title='Location Map'
            className='w-full h-full'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94408.21788852857!2d21.506538502199287!3d42.31572099557157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1354f7e4c0da0fd1%3A0x3b633443b6fb680d!2sPre%C5%A1evo%2C%20Serbia!5e0!3m2!1sen!2s!4v1709698184415!5m2!1sen!2s"
            loading='lazy'
          ></iframe>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
