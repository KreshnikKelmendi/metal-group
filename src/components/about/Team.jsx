import React from 'react'
import CountEmployer from './CountEmployer'

const Team = () => {
  return (
    <div className='w-full mt-16 justify-center items-center flex flex-col lg:flex-row'>
        {/* <div className='lg:w-1/2'>
            <p className='font-custom text-3xl lg:text-[55px] text-[#444]'>Team</p>
            <p className='font-custom1 mt-6 text-[#444]'>Metal Group LLC does not stop with investments only in modern machines, but we have also invested in human resources by being trained in software programs for the operation of machines as well as the Tekla program to be more flexible in the realization of projects and transfer programs.
               <br /> <br />Our people are satisfied, the company a number of about 60 employees, realizing a capacity of 200T medium steel constructions.
            </p>
        </div> */}
        <div className=''>
            <CountEmployer />
        </div>
    </div>
  )
}

export default Team