import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import icon1 from "../Assets/steelIcon.png";
import icon2 from "../Assets/empIcon.png";
import icon3 from "../Assets/welder.png";
import icon4 from "../Assets/world.png";

const CountItem = ({ id, description, icon, maxCount }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });

      const interval = setInterval(() => {
        setCount((prevCount) => (prevCount < maxCount ? prevCount + 1 : maxCount));
      }, 15);

      return () => {
        clearInterval(interval);
      };
    }
  }, [inView, controls, maxCount]);

  return (
    <div className="flex lg:border-l border-[#ffaa4a] flex-col mt-4 lg:mt-0 items-center mb-8 w-52 h-52 bg-[#FFF6E7] hover:text-white transition-all duration-700">
      <img src={icon} alt={`${id} icon`} className="mb-4 w-10 h-10 object-contain" />
      <motion.div ref={ref} animate={controls} initial={{ opacity: 0, y: -50 }} className="text-4xl font-bold font-custom mb-2 text-[#ffaa4a] hover:text-[#444]">
        {count}+
      </motion.div>
      <div className="text-lg font-custom text-center">{description}</div>
    </div>
  );
};

const CountEmployer = () => {
  const data = [
    { id: 'steelConstruction', description: 'Years in Bussiness', icon: icon3, maxCount: 57 },
    { id: 'employees', description: 'Employees', icon: icon2, maxCount: 60 },
    { id: 'steelConstruction', description: 'Fabrication (Tons) Medium Steel Construction', icon: icon1, maxCount: 200 },
    { id: 'export', description: 'Export Countries', icon: icon4, maxCount: 6 },
   
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 lg:h-96 items-center justify-center">
      {data?.map((countData) => (
        <CountItem key={countData.id} {...countData} />
      ))}
    </div>
  );
};

export default CountEmployer;
