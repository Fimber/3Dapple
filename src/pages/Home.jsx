import React from 'react'
import Hero from '../components/Hero'
import ProductViewer from '../components/ProductViewer'
import Showcase from '../components/three/Showcase'
import Performance from '../components/three/Performance'
import Features from '../components/three/Features'
import Highlights from '../components/three/Highlights'
import Footer from '../components/three/Footer'

const Home = () => {
  return (
    <>
      <Hero/>
      <ProductViewer/>
      <Showcase/>
      <Performance/>
      <Features/>
      <Highlights/>
      <Footer/>
    </>
  )
}

export default Home
