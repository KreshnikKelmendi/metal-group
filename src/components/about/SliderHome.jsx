import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import image1 from "../Assets/metalFurnace.jpg";
import image2 from "../Assets/Picture66.jpg";

const dataItems = [
  {
    id: 1,
    imageBackground: image1,
    name: 'METAL IS OUR LANGUAGE',
    description: 'Empowering innovation, meeting real customer needs. Our management fosters continuous improvement through employee and partner engagement, guided by standards.',
  },
  {
    id: 2,
    imageBackground: image2,
    name: 'Zero Defects or Delays',
    description: 'With zero delays or defects, our metal company sets the standard for efficiency and excellence. Our commitment to quality ensures seamless operations and flawless products, every time.',
  },
];

const SliderHome = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className='mt-16'>
    <Carousel responsive={responsive}
      arrows={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      stopOnHover={false}
      showDots={true}>
      {dataItems.map((item) => (
        <div
          key={item.id}
          className="slider-item relative h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${item.imageBackground})` }}
        >
          <div className="absolute lg:w-1/2 top-1/2 h-60 px-5 py-8 lg:py-4 left-2 right-2 lg:left-8 transform -translate-y-1/2 text-white" style={{ backgroundColor: 'rgba(39, 45, 51, 0.85)' }}>
            <p className="text-[25px] lg:text-[55px] lg:leading-[52px] font-custom mb-2 text-[#ffaa4a]">{item.name}</p>
            <p className="text-sm lg:text-lg font-custom1">{item.description}</p>
          </div>
        </div>
      ))}
    </Carousel>
    </div>
  );
};

export default SliderHome;
