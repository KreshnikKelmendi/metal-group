import React from 'react'
import Banner from '../home/Banner'
import Services from '../home/Services'
import About from '../about/About'
import SliderHome from '../about/SliderHome'
import Team from '../about/Team'
import Export from '../home/Export'
import OurService from '../services/OurService'
import ServiceMap from '../services/ServiceMap'

const Homepage = () => {
  return (
    <>
    <Banner />
    <About />
    {/* <Services /> */}
    <OurService />
    <SliderHome />
    <Team />
    {/* <Export /> */}
    <ServiceMap />
    </>
  )
}

export default Homepage