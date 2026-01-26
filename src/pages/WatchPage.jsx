import React from 'react'
import WatchHero from '../components/watch/WatchHero'
import WatchFeatures from '../components/watch/WatchFeatures'
import WatchHealth from '../components/watch/WatchHealth'
import WatchDesign from '../components/watch/WatchDesign'
import Footer from '../components/three/Footer'

const WatchPage = () => {
  return (
    <>
      <WatchHero />
      <WatchFeatures />
      <WatchHealth />
      <WatchDesign />
      <Footer />
    </>
  )
}

export default WatchPage
