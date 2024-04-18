import React from 'react'
import BannerAbout from '../about/BannerAbout'
import Vission from '../about/Vission'
import Header from '../Header/Header'
import Services from "../home/Services.jsx"

const AboutUsPage = () => {
  return (
    <div className=''>
        <Header />
        <BannerAbout />
        <Vission />
        <Services />
    </div>
  )
}

export default AboutUsPage