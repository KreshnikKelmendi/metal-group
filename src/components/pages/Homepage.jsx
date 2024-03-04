import React from 'react'
import Banner from '../home/Banner'
import Services from '../home/Services'
import About from '../about/About'
import SliderHome from '../about/SliderHome'
import Team from '../about/Team'
import Export from '../home/Export'

const Homepage = () => {
  return (
    <>
    <Banner />
    <About />
    <Services />
    <SliderHome />
    <Team />
    <Export />
    </>
  )
}

export default Homepage