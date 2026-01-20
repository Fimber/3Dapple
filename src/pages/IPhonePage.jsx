import React from 'react'
import IPhoneHero from '../components/iphone/IPhoneHero'
import IPhoneFeatures from '../components/iphone/IPhoneFeatures'
import IPhoneCamera from '../components/iphone/IPhoneCamera'
import IPhoneChip from '../components/iphone/IPhoneChip'
import IPhoneDesign from '../components/iphone/IPhoneDesign'
import Footer from '../components/three/Footer'

const IPhonePage = () => {
  return (
    <>
      <IPhoneHero />
      <IPhoneFeatures />
      <IPhoneCamera />
      <IPhoneChip />
      <IPhoneDesign />
      <Footer />
    </>
  )
}

export default IPhonePage
