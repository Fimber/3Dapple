import React, { useRef, Suspense } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Canvas } from '@react-three/fiber'
import { Environment, ContactShadows } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import clsx from 'clsx'
import useIphoneStore from '../../store/iphoneStore'
import IPhoneModelSwitcher from './IPhoneModelSwitcher'

const IPhoneHero = () => {
  const heroRef = useRef(null)
  const { model, setModel, color, setColor } = useIphoneStore()
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })

  useGSAP(() => {
    const tl = gsap.timeline()
    
    tl.from('.iphone-title', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out'
    })
    .from('.iphone-subtitle', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.5')
    .from('.iphone-cta', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out'
    }, '-=0.4')
    .from('.iphone-canvas', {
      opacity: 0,
      scale: 0.9,
      duration: 1.2,
      ease: 'power2.out'
    }, '-=0.8')
  }, { scope: heroRef })

  const modelName = model === 'pro' ? 'iPhone 17 Pro' : 'iPhone 17 Pro Max'
  const displaySize = model === 'pro' ? '6.3"' : '6.9"'

  return (
    <section 
      ref={heroRef} 
      className="min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-5"
      style={{ background: 'linear-gradient(180deg, #000 0%, #1a1a2e 50%, #16213e 100%)' }}
    >
      <div className="text-center mb-4">
        <h1 
          className="iphone-title text-5xl lg:text-8xl font-bold mb-4"
          style={{ 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          {modelName}
        </h1>
        <h2 className="iphone-subtitle text-2xl lg:text-4xl text-gray-300 font-semibold mb-2">
          Hello, Apple Intelligence.
        </h2>
        <p className="text-gray-500 mb-6">{displaySize} display</p>
        <div className="flex gap-4 justify-center">
          <a href="#" className="iphone-cta px-6 py-3 rounded-full font-semibold text-lg bg-primary text-white hover:bg-blue-600 transition-all duration-300">
            Learn more
          </a>
          <a href="#" className="iphone-cta px-6 py-3 rounded-full font-semibold text-lg border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
            Buy
          </a>
        </div>
      </div>
      
      <div className="iphone-canvas w-full h-[350px] lg:h-[450px] mb-4">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 45 }}
          style={{ touchAction: 'none' }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} />
          <spotLight position={[0, 10, 0]} intensity={0.5} angle={0.3} penumbra={1} />
          
          <Suspense fallback={null}>
            <IPhoneModelSwitcher model={model} isMobile={isMobile} />
            <Environment preset="city" />
            <ContactShadows 
              position={[0, -2.5, 0]} 
              opacity={0.5} 
              scale={10} 
              blur={2} 
              far={4} 
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Model & Color Controls */}
      <div className="flex flex-col items-center gap-4">
        {/* Model Selector */}
        <div 
          className="flex items-center gap-2 px-4 py-2 rounded-full"
          style={{ background: 'rgba(255,255,255,0.1)' }}
        >
          <button
            onClick={() => setModel('pro')}
            className={clsx(
              'px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300',
              model === 'pro' 
                ? 'bg-white text-black' 
                : 'bg-transparent text-white hover:bg-white/20'
            )}
          >
            6.3" Pro
          </button>
          <button
            onClick={() => setModel('max')}
            className={clsx(
              'px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300',
              model === 'max' 
                ? 'bg-white text-black' 
                : 'bg-transparent text-white hover:bg-white/20'
            )}
          >
            6.9" Pro Max
          </button>
        </div>

        {/* Color Options */}
        <div className="text-center">
          <p className="text-gray-400 mb-3 text-sm">Titanium finishes</p>
          <div className="flex gap-3 justify-center">
            <button 
              onClick={() => setColor('natural')}
              className={clsx(
                'w-8 h-8 rounded-full cursor-pointer transition-transform duration-300 hover:scale-110 border-2',
                color === 'natural' ? 'border-white scale-110' : 'border-transparent'
              )}
              style={{ background: 'linear-gradient(135deg, #a8a29e, #78716c)' }}
              title="Natural Titanium"
            ></button>
            <button 
              onClick={() => setColor('blue')}
              className={clsx(
                'w-8 h-8 rounded-full cursor-pointer transition-transform duration-300 hover:scale-110 border-2',
                color === 'blue' ? 'border-white scale-110' : 'border-transparent'
              )}
              style={{ background: 'linear-gradient(135deg, #64748b, #475569)' }}
              title="Blue Titanium"
            ></button>
            <button 
              onClick={() => setColor('white')}
              className={clsx(
                'w-8 h-8 rounded-full cursor-pointer transition-transform duration-300 hover:scale-110 border-2',
                color === 'white' ? 'border-white scale-110' : 'border-transparent'
              )}
              style={{ background: 'linear-gradient(135deg, #f5f5f4, #d6d3d1)' }}
              title="White Titanium"
            ></button>
            <button 
              onClick={() => setColor('black')}
              className={clsx(
                'w-8 h-8 rounded-full cursor-pointer transition-transform duration-300 hover:scale-110 border-2',
                color === 'black' ? 'border-white scale-110' : 'border-transparent'
              )}
              style={{ background: 'linear-gradient(135deg, #292524, #1c1917)' }}
              title="Black Titanium"
            ></button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IPhoneHero
