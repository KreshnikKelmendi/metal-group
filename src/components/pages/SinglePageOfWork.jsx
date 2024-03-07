import React from 'react'
import { useParams } from 'react-router-dom';
import { worksData } from '../data/data';
import Header from '../Header/Header';

const SinglePageOfWork = () => {
    const { workID } = useParams();
    const work = worksData?.find((ad) => ad.id == workID);

  if (!work) {
    return <div className='font-custom text-2xl mt-5 justify-center items-center text-center'>WORK NOT FOUND. BAD REQUEST !</div>;
  }

  const { textTitle, description, firstImage, fullText } = work;

  return (
    <>
    <Header />
    <div className='w-full justify-center items-center py-5 px-5 lg:px-10'>
        <div className=' py-6'>
            <p className='font-custom text-[#444] text-2xl'>{textTitle}</p>
            <p className='mt-2 font-custom1'>{fullText}</p>
        </div>
        <div className='grid lg:grid-cols-3 gap-4'>
            <img src={firstImage} alt='' className='w-full lg:h-[80vh] object-cover' />
            <img src={firstImage} alt='' className='w-full lg:h-[80vh] object-cover' />
            <img src={firstImage} alt='' className='w-full lg:h-[80vh] object-cover' />
        </div>
    </div>
    </>
  )
}

export default SinglePageOfWork