import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import picture1 from '../Assets/update-1.jpg';
import picture2 from '../Assets/service2.jpg';
import picture3 from '../Assets/service3.jpg';
import picture4 from '../Assets/service4.jpg';
import picture5 from '../Assets/update-2.jpg';

const ServiceItem = ({ service, index }) => {
  const [ref, inView] = useInView({
    once: true
  });

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  // const transition = {
  //   delay: index * 0.2,
  // };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      // transition={transition}
      className='text-black px-5'
    >
   
        <>
          <p className='text-3xl font-custom text-black'>{`${service.id}. ${service.title}`}</p>
          <p className='mt-2 font-custom1 text-sm 2xl:text-base text-[#444]'>{service.description}</p>
          <img src={service.image} alt='' className='w-full h-80 lg:h-[60vh] mt-6' />
        </>
    
        <>
          {/* <img src={service.image} alt='' className='w-full h-80 lg:h-[60vh] mt-6 object-cover' />
          <p className='text-3xl mt-6 font-custom text-[#ffaa4a]'>{`${service.id}. ${service.title}`}</p>
          <p className='mt-2 font-custom1 text-[12px] lg:text-base'>{service.description}</p> */}
        </>

    </motion.div>
  );
};

const OurService = () => {
  const servicesData = [
    {
      id: 1,
      title: 'Steel Constructing',
      description: 'Discover the unmatched advantages of steel in construction! With its unparalleled strength, durability, versatility, and sustainability, steel stands as the ultimate choice for your construction projects.',
      image: picture1,
    },
    // {
    //   id: 2,
    //   title: 'Scaffolding',
    //   description: 'Introducing our premium scaffolding solution, designed to revolutionize your construction experience! Ready to elevate your construction game? Choose our scaffolding solution and experience safety, efficiency, and reliability like never before.',
    //   image: picture2,
    // },
    // {
    //   id: 3,
    //   title: 'Fences',
    //   description: 'Explore our diverse range of fences tailored to meet your unique needs and preferences. From timeless picket fences to intricate wrought iron designs and towering privacy fences, we offer a plethora of styles, designs, and materials to complement any property.',
    //   image: picture3,
    // },
    {
      id: 2,
      title: 'Laser Cutting',
      description: 'Experience the pinnacle of precision and efficiency with laser cutting—an advanced technique for cutting and engraving materials with unparalleled accuracy. Harnessing the power of a focused laser beam, our cutting-edge process ensures flawless results every time. By directing a high-powered laser onto the materials surface, we achieve precise cuts and detailed engravings with remarkable clarity.',
      image: picture4,
    },
    {
     
      id: 3,
      title: 'Projecting',
      description: 'Our company, a leader in metal manufacturing, prides itself on projecting manufacturing capacity as a testament to our commitment to excellence. More than just numbers, it represents our dedication to meeting and exceeding client demands with precision and efficiency. With cutting-edge facilities and skilled professionals, we deliver high-quality metal products within specified time frames, showcasing our relentless pursuit of perfection. Partnering with us means gaining access to reliability, consistency, and the ability to turn aspirations into achievements, redefining possibilities in metal production.',
      image: picture5,  
    },

  ];

  return (
    <div className='w-full py-5 relative mt-5 container mx-auto'>
      <p className='text-black font-custom text-center'>Our Services</p>
      <p className='text-center font-custom1 text-black text-3xl'>We work to craft</p>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 px-3 lg:px-8 py-10'>
        {servicesData?.map((service, index) => (
          <ServiceItem key={index} service={service} index={index} />
        ))}
      </div>
      {/* <div className='absolute hidden lg:block inset-y-40 left-1/2 w-px bg-gray-300'></div> */}
    </div>
  );
};

export default OurService;
