import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const sizes = [
  { name: 'iPhone 17 Pro', display: '6.3"', size: 'pro' },
  { name: 'iPhone 17 Pro Max', display: '6.9"', size: 'max' }
]

const designFeatures = [
  { icon: '🏆', title: 'Grade 5 Titanium', desc: 'Strongest material ever used in an iPhone' },
  { icon: '💧', title: 'Ceramic Shield', desc: '4x more drop resistant than any smartphone glass' },
  { icon: '🌊', title: 'Water Resistant', desc: 'IP68 — up to 6 meters for 30 minutes' }
]

const IPhoneDesign = () => {
  const sectionRef = useRef(null)
  const [selectedSize, setSelectedSize] = useState('pro')

  useGSAP(() => {
    gsap.from('.design-item', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
      },
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.7,
      ease: 'power2.out'
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="py-24 px-5 bg-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="design-item text-4xl lg:text-6xl font-bold text-white mb-6 text-center">
          Titanium. Tougher than ever.
        </h2>
        <p className="design-item text-xl text-gray-400 text-center max-w-2xl mx-auto mb-12">
          iPhone 17 Pro features our most advanced Grade 5 titanium design 
          with a brushed finish and thinner bezels than ever. Incredibly strong, 
          remarkably light, absolutely stunning.
        </p>

        <div className="design-item flex justify-center gap-4 mb-12">
          {sizes.map((size) => (
            <button
              key={size.size}
              className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 text-left ${
                selectedSize === size.size ? 'border-2 border-[#667eea]' : 'border-2 border-transparent'
              }`}
              style={{ background: selectedSize === size.size ? 'linear-gradient(145deg, #1a1a2e, #0f0f1a)' : '#1a1a1a' }}
              onClick={() => setSelectedSize(size.size)}
            >
              <span className="block text-2xl font-bold text-white">{size.display}</span>
              <span className="text-sm text-gray-400">{size.name}</span>
            </button>
          ))}
        </div>

        <div className="design-item flex justify-center mb-16">
          <div className="relative transition-all duration-500">
            <div 
              className={`rounded-[40px] p-1.5 transition-all duration-500 ${
                selectedSize === 'pro' ? 'w-48 h-96' : 'w-56 h-[440px]'
              }`}
              style={{ 
                background: 'linear-gradient(145deg, #78716c, #57534e)',
                boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4)'
              }}
            >
              <div 
                className="w-full h-full rounded-[36px] relative"
                style={{ background: 'linear-gradient(180deg, #1a1a2e, #0a0a1a)' }}
              >
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full"></div>
              </div>
            </div>
            <div className="absolute -right-20 top-0 h-full flex items-center">
              <span className="text-xs text-gray-500 whitespace-nowrap">
                {selectedSize === 'pro' ? '149.6mm' : '163mm'}
              </span>
            </div>
            <div className="absolute -bottom-10 left-0 w-full flex justify-center">
              <span className="text-xs text-gray-500">
                {selectedSize === 'pro' ? '71.5mm' : '77.6mm'}
              </span>
            </div>
          </div>
        </div>

        <div className="design-item grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {designFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="flex items-start gap-4 p-6 rounded-2xl"
              style={{ background: 'linear-gradient(145deg, #1a1a1a, #0f0f0f)' }}
            >
              <span className="text-3xl">{feature.icon}</span>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">{feature.title}</h4>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div 
          className="design-item flex flex-col lg:flex-row items-center gap-8 p-8 rounded-3xl"
          style={{ background: 'linear-gradient(145deg, #1a1a2e, #0f0f1a)' }}
        >
          <div>
            <div 
              className="w-16 h-24 rounded-full"
              style={{ 
                background: 'linear-gradient(180deg, #667eea, #764ba2)',
                boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)'
              }}
            >
              <div 
                className="w-full h-full rounded-full"
                style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.2), transparent)' }}
              ></div>
            </div>
          </div>
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Action button</h3>
            <p className="text-gray-400">
              A new, customizable button that gives you instant access to your 
              favorite features. Set it to launch the camera, turn on the 
              flashlight, start a voice memo, and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IPhoneDesign
