import React, { useEffect } from 'react';
import imageAbout from "../Assets/VANGUARD.jpg";
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.3
      } 
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.2, 0.8, 0.3, 1]
      } 
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 1,
        ease: [0.2, 0.8, 0.3, 1]
      } 
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.section
      className="w-full bg-white py-16 lg:py-24 px-5 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Image - Taller version */}
          <motion.div 
            className="lg:w-1/2 relative"
            variants={imageVariants}
          >
            <div className="relative h-[500px] lg:h-[650px] w-full overflow-hidden shadow-2xl">
              <img 
                src={imageAbout} 
                alt="Metal Group 1967 manufacturing facility" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <span className="block font-custom1 text-5xl font-bold mb-2">1967</span>
                <span className="text-2xl font-medium font-custom">Since</span>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            className="lg:w-1/2 flex flex-col justify-center"
            variants={textVariants}
          >
            <motion.div variants={textVariants}>
              <span className="text-lg font-semibold uppercase tracking-wider font-custom">About Us</span>
          
            </motion.div>

            <motion.div 
              className="space-y-5 text-gray-700 text-sm leading-relaxed font-custom1"
              variants={textVariants}
            >
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
            </motion.div>

            <motion.div 
              className="mt-8 flex flex-wrap gap-4"
              variants={textVariants}
            >
              <Link to="/about-metal-group" onClick={() => window.scrollTo({ top: 0, left: 0 })}>
                <motion.button
                  whileHover={{ 
                    y: -3,
                    boxShadow: "0 10px 20px rgba(37, 99, 235, 0.2)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#0a1f2b] text-white w-[200px] mt-5 py-2 rounded-md hover:bg-[#444]"
                >
                  See More
                </motion.button>
              </Link>
            
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;