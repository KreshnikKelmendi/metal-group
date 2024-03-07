import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <div className='w-full'>
      <p className='font-custom uppercase text-[#444] text-3xl text-center mt-16 justify-center items-center font-bold'>
        Our Objectives
      </p>
      <p className='text-center font-custom mt-4 px-2 lg:w-[50%] text-sm mx-auto text-[#444]'>
        Our philosophy unites our actions towards our customers, our employees, and our external partners. All our actions
        are focused on:
      </p>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-8 mt-10'>
       
          <motion.div className='text-white rounded-md h-64 p-5' style={{ backgroundColor: 'rgba(23, 45, 51, 0.53)' }}
          >
            <p className='font-custom font-bold text-xl text-white'>TECHNOLOGY</p>
            <p className='mt-4 text-sm font-custom1'>
              In 2017, the company initiated investments in state-of-the-art machinery, including an 
              automated welding robot, multiple tracking machines, and the latest generation of metal 
              cutting, profile cutting, and drilling machines, along with a metal pipe cutting robot.
            </p>
          </motion.div>
      
          <motion.div className='text-white rounded-md h-64 p-5' style={{ backgroundColor: 'rgba(23, 45, 51, 0.53)' }}
          >
            <p className='font-custom font-bold text-xl text-white'>TEAM</p>
            <p className='mt-4 text-sm font-custom1'>
                A team dedicated to surface treatment works in a special workshop, equipped with machinery 
                for the treatment of steel structures, and the painting process is also tested.
            </p>
          </motion.div>

          <motion.div className='text-white rounded-md h-64 p-5' style={{ backgroundColor: 'rgba(23, 45, 51, 0.53)' }}
          >
            <p className='font-custom font-bold text-xl text-white'>LOGISTICS</p>
            <p className='mt-4 text-sm font-custom1'>
               The Metal Group also operates a crucial logistics department, responsible for efficiently 
               and securely packaging materials for export, providing prompt information to customers, 
               and facilitating import operations.
            </p>
          </motion.div>

          <motion.div className='text-white rounded-md h-64 p-5' style={{ backgroundColor: 'rgba(23, 45, 51, 0.53)' }}
          >
            <p className='font-custom font-bold text-xl text-white'>WORK ENVIRONMENT</p>
            <p className='mt-4 text-sm font-custom1'>
                In more than 10,000 m² and in a technical environment and modern premises, qualified 
                workers and their assistants work in separate workshops for the treatment of steel, 
                aluminum and stainless steel.
            </p>
          </motion.div>

          <motion.div className='text-white rounded-md h-64 p-5' style={{ backgroundColor: 'rgba(23, 45, 51, 0.53)' }}
          >
            <p className='font-custom font-bold text-xl text-white'>PARTNERSHIPS</p>
            <p className='mt-4 text-sm font-custom1'>
               Today Metal Group is dedicated to the design and construction of metal constructions. <br /> <br />
               Operating quality Metal Group with the support of all their projects, in the construction 
               of various structures, such as industrial, tertiary and sports buildings, commercial spaces 
               throughout.
            </p>
          </motion.div>

          <motion.div className='text-white rounded-md h-64 p-5' style={{ backgroundColor: 'rgba(23, 45, 51, 0.53)' }}
          >
            <p className='font-custom font-bold text-xl text-white'>INNOVATIVE SOLUTIONS</p>
            <p className='mt-4 text-sm font-custom1'>
               A group of engineers perform static calculations, 3D modeling with Tekla software as well 
               as making drawings for production and installation. <br /> <br /> They design and optimize all types of 
               construction, combining technical expertise and mastery of architectural finishing 
               requirements.
            </p>
          </motion.div>
      </div>
    </div>
  );
};

export default Services;
