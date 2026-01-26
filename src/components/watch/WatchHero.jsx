import React, { useRef, useState, Suspense } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import clsx from 'clsx'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, ContactShadows, Center } from '@react-three/drei'
import { Model as AppleWatch } from '../models/Apple_watch_series_5'

const RotatingWatch = ({ children, speed = 0.3 }) => {
  const groupRef = useRef()
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * speed
    }
  })
  return <group ref={groupRef}>{children}</group>
}

const WatchHero = () => {
  const heroRef = useRef(null)
  const [size, setSize] = useState('large')
  const [color, setColor] = useState('black')

  useGSAP(() => {
    const tl = gsap.timeline()
    
    tl.from('.watch-title', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out'
    })
    .from('.watch-subtitle', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.5')
    .from('.watch-cta', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out'
    }, '-=0.4')
    .from('.watch-display', {
      opacity: 0,
      scale: 0.8,
      duration: 1.2,
      ease: 'back.out(1.7)'
    }, '-=0.8')
  }, { scope: heroRef })

  const modelName = size === 'large' ? 'Apple Watch Ultra 3' : 'Apple Watch Series 11'

  return (
    <section 
      ref={heroRef} 
      className="min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-5"
      style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #1a0a1e 50%, #0a1628 100%)' }}
    >
      <div className="text-center mb-8">
        <h1 
          className="watch-title text-5xl lg:text-8xl font-bold mb-4"
          style={{ 
            background: 'linear-gradient(135deg, #f97316 0%, #ef4444 50%, #ec4899 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          {modelName}
        </h1>
        <h2 className="watch-subtitle text-2xl lg:text-4xl text-gray-300 font-semibold mb-2">
          Smarter. Brighter. Mightier.
        </h2>
        <p className="text-gray-500 mb-6">{size === 'large' ? '49mm' : '45mm'} case</p>
        <div className="flex gap-4 justify-center">
          <a href="#" className="watch-cta px-6 py-3 rounded-full font-semibold text-lg bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300">
            Learn more
          </a>
          <a href="#" className="watch-cta px-6 py-3 rounded-full font-semibold text-lg border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300">
            Buy
          </a>
        </div>
      </div>
      
      {/* Watch Display - 3D Model */}
      <div className="watch-display w-full h-[400px] lg:h-[500px] mb-8">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          style={{ touchAction: 'none' }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} />
          <spotLight position={[0, 10, 0]} intensity={0.5} angle={0.3} penumbra={1} />
          
          <Suspense fallback={null}>
            <Center>
              <RotatingWatch speed={0.4}>
                <AppleWatch 
                  scale={size === 'large' ? 12 : 10}
                  rotation={[0.3, 0, 0]}
                />
              </RotatingWatch>
            </Center>
            <Environment preset="city" />
            <ContactShadows 
              position={[0, -1.5, 0]} 
              opacity={0.4} 
              scale={5} 
              blur={2} 
              far={4} 
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Controls */}
      <div className="flex flex-col items-center gap-6">
        {/* Size Selector */}
        <div 
          className="flex items-center gap-2 px-4 py-2 rounded-full"
          style={{ background: 'rgba(255,255,255,0.1)' }}
        >
          <button
            onClick={() => setSize('small')}
            className={clsx(
              'px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300',
              size === 'small' 
                ? 'bg-white text-black' 
                : 'bg-transparent text-white hover:bg-white/20'
            )}
          >
            45mm Series 11
          </button>
          <button
            onClick={() => setSize('large')}
            className={clsx(
              'px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300',
              size === 'large' 
                ? 'bg-white text-black' 
                : 'bg-transparent text-white hover:bg-white/20'
            )}
          >
            49mm Ultra 3
          </button>
        </div>

        {/* Color Options */}
        <div className="text-center">
          <p className="text-gray-400 mb-3 text-sm">Case finishes</p>
          <div className="flex gap-3 justify-center">
            <button 
              onClick={() => setColor('black')}
              className={clsx(
                'w-8 h-8 rounded-full cursor-pointer transition-transform duration-300 hover:scale-110 border-2',
                color === 'black' ? 'border-white scale-110' : 'border-transparent'
              )}
              style={{ background: 'linear-gradient(135deg, #1a1a1a, #000)' }}
              title="Black Titanium"
            />
            <button 
              onClick={() => setColor('silver')}
              className={clsx(
                'w-8 h-8 rounded-full cursor-pointer transition-transform duration-300 hover:scale-110 border-2',
                color === 'silver' ? 'border-white scale-110' : 'border-transparent'
              )}
              style={{ background: 'linear-gradient(135deg, #e8e8e8, #a0a0a0)' }}
              title="Silver Titanium"
            />
            <button 
              onClick={() => setColor('gold')}
              className={clsx(
                'w-8 h-8 rounded-full cursor-pointer transition-transform duration-300 hover:scale-110 border-2',
                color === 'gold' ? 'border-white scale-110' : 'border-transparent'
              )}
              style={{ background: 'linear-gradient(135deg, #d4a574, #b8860b)' }}
              title="Gold Titanium"
            />
            <button 
              onClick={() => setColor('graphite')}
              className={clsx(
                'w-8 h-8 rounded-full cursor-pointer transition-transform duration-300 hover:scale-110 border-2',
                color === 'graphite' ? 'border-white scale-110' : 'border-transparent'
              )}
              style={{ background: 'linear-gradient(135deg, #4a4a4a, #2d2d2d)' }}
              title="Graphite"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WatchHero
