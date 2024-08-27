import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Header from '../Header/Header';
import slider1 from "../Assets/slider2.jpg"
import slider2 from "../Assets/slider3.jpg"
import slider3 from "../Assets/slider4.jpg"
import slider4 from "../Assets/slider5.jpg"

const Banner = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    const targetText = 'METAL GROUP';
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex <= targetText.length) {
        setText(targetText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 200);

    return () => clearInterval(intervalId);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  // Configurations for the carousel
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // Dummy images for the slider
  const images = [
    { src: slider1, alt: 'Image 1' },
    { src: slider2, alt: 'Image 2' },
    { src: slider3, alt: 'Image 3' },
    { src: slider4, alt: 'Image 4' },
  ];

  return (
    <>
      <div className=" bg-gray-100 bg-center flex flex-col items-center">
        <Header />
        {/* <motion.div
          className="flex lg:w-1/2 absolute lg:left-3 font-custom font-bold text-center top-1/2 items-center justify-center bg-opacity-75 text-white p-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <p className='text-white text-4xl'>{text}</p>
        </motion.div> */}
        
        {/* Carousel Slider */}
        <div className="w-full z-40">
          <Carousel responsive={responsive} infinite={true} pauseOnHover={false} autoPlay={true} autoPlaySpeed={3000} showDots={true}>
            {images.map((image, index) => (
              <div key={index} className="">
                <img src={image.src} alt={`Slide ${index + 1}`} className="w-full h-[35vh] lg:h-fit object-cover" />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Banner;
