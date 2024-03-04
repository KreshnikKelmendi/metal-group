import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import europeMap from '../Assets/europe.svg';
import locationIcon from '../Assets/placeholder.png';

const Export = () => {
  const countries = [
    { name: 'Germany', icon: locationIcon, marginLeft: '5rem' },
    { name: 'Switzerland', icon: locationIcon, marginLeft: '12rem' },
    { name: 'Austria', icon: locationIcon, marginLeft: '-1rem' },
    { name: 'Belgium', icon: locationIcon, marginLeft: '15rem' },
    { name: 'France', icon: locationIcon, marginLeft: '2rem' },
    { name: 'Sweden', icon: locationIcon, marginLeft: '10rem' },
  ];

  return (
    <div className='w-full lg:h-screen flex items-center justify-center flex-col'>
      <p className='font-custom text-[#444] text-3xl text-center font-bold mt-6'>
        Export
      </p>
      <p className='px-5 lg:px-0 text-center font-custom1 text-[#444] text-[12px] lg:w-[50%] lg:mx-auto mt-4'>
        Due to the high level of expertise, recognized by the impossible qualifications, 
        Metal Group is becoming a leader in the construction of metal structures exporting to 
        European countries such as:
      </p>

      <div className='w-full flex flex-col lg:flex-row mt-6'>
        {/* Left side with map */}
        <div className='lg:w-1/2'>
          <img src={europeMap} alt='' className='w-full h-[100%] object-cover' />
        </div>

        {/* Right side with countries and icons */}
        <div className='lg:w-1/2 flex flex-col justify-center items-center'>
          <p className='text-[#444] text-xl font-bold mb-2 font-custom'></p>
          <ul className='text-[#444] text-sm list-disc'>
            {countries?.map((country, index) => (
              <AnimatedCountry key={index} country={country} index={index} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// AnimatedCountry component
const AnimatedCountry = ({ country, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const transition = {
    delay: index * 0.2, // Adjust the delay as needed
  };

  return (
    <motion.li
      ref={ref}
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={transition}
      className='flex items-center bg-map mb-2 py-3'
      style={{ marginLeft: country.marginLeft }}
    >
      <img src={country.icon} alt={`${country.name} icon`} className='w-4 h-4 mr-2' />
      <p className='font-custom1 text-xl'>{country.name}</p>
    </motion.li>
  );
};

export default Export;
