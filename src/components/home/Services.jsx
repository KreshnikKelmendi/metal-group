import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const dataService = [
  {
    id: 1,
    serviceName: 'TECHNOLOGY',
    description: 'In 2017, the company initiated investments in state-of-the-art machinery, including an automated welding robot, multiple tracking machines, and the latest generation of metal cutting, profile cutting, and drilling machines, along with a metal pipe cutting robot.',
  },
  {
    id: 2,
    serviceName: 'TEAM',
    description: 'A team dedicated to surface treatment works in a special workshop, equipped with machinery for the treatment of steel structures, and the painting process is also tested.',
  },
  {
    id: 3,
    serviceName: 'LOGISTICS',
    description: 'The Metal Group also operates a crucial logistics department, responsible for efficiently and securely packaging materials for export, providing prompt information to customers, and facilitating import operations.',
  },
  {
    id: 4,
    serviceName: 'WORK ENVIRONMENT',
    description: 'In more than 10,000 m2 and in a technical environment and modern premises, qualified workers and their assistants work in separate workshops for the treatment of steel, aluminum and stainless steel.',
  },
  {
    id: 5,
    serviceName: 'PARTNERSHIPS',
    description: 'Today Metal Group is dedicated to the design and construction of metal constructions. Operating quality Metal Group with the support of all their projects, in the construction of various structures, such as industrial, tertiary and sports buildings, commercial spaces throughout.',
  },
  {
    id: 6,
    serviceName: 'INNOVATIVE SOLUTIONS',
    description: 'A group of engineers perform static calculations, 3D modeling with Tekla software as well as making drawings for production and installation. They design and optimize all types of construction, combining technical expertise and mastery of architectural finishing requirements.',
  },
];

const Services = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // const [ref, inView] = useInView({
  //   triggerOnce: true,
  // });

  return (
    <div className='w-full'>
      <p className='font-custom text-[#444] text-3xl text-center mt-16 justify-center items-center font-bold'>
        Our Objectives
      </p>
      <p className='text-center font-custom mt-4 px-2 lg:w-[50%] text-sm mx-auto text-[#444]'>
        Our philosophy unites our actions towards our customers, our employees, and our external partners. All our actions
        are focused on:
      </p>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-8 mt-10'>
        {dataService?.map((item, index) => (
          <motion.div
            key={item.id}
            className='border-[1px] border-gray-200 bg-[#0a1f2b] text-white rounded-md h-60 p-5'
            // ref={ref}
            initial='hidden'
            // animate={inView ? 'visible' : 'hidden'}
            // variants={variants}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <p className='font-custom font-bold border-b w-fit border-b-[#444] text-xl text-gray-200'>{item.serviceName}</p>
            <p className='mt-4 text-sm font-custom1'>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
