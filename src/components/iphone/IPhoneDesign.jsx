import React, { useRef, Suspense } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei'
import { Model as IPhoneModel } from '../models/Iphone17'

const RotatingPhone = ({ children, speed = 0.5 }) => {
  const groupRef = useRef()
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * speed
    }
  })
  return <group ref={groupRef}>{children}</group>
}

const designFeatures = [
  { icon: '🏆', title: 'Grade 5 Titanium', desc: 'Strongest material ever used in an iPhone' },
  { icon: '💧', title: 'Ceramic Shield', desc: '4x more drop resistant than any smartphone glass' },
  { icon: '🌊', title: 'Water Resistant', desc: 'IP68 — up to 6 meters for 30 minutes' }
]

const IPhoneDesign = () => {
  const sectionRef = useRef(null)

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

        {/* 3D Models - Both phones side by side */}
        <div className="flex justify-center mb-16">
          <div className="w-full max-w-5xl h-[450px] rounded-3xl overflow-hidden relative">
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
              <ambientLight intensity={0.6} />
              <directionalLight position={[5, 5, 5]} intensity={1} />
              <directionalLight position={[-5, -5, -5]} intensity={0.3} />
              <spotLight position={[0, 6, 0]} intensity={0.5} angle={0.5} penumbra={1} />
              <Suspense fallback={null}>
                {/* iPhone 17 Pro - Left (smaller) */}
                <group position={[-1.5, 0, 0]}>
                  <Center>
                    <RotatingPhone speed={0.4}>
                      <IPhoneModel
                        scale={0.7}
                        rotation={[0.1, 0, 0]}
                      />
                    </RotatingPhone>
                  </Center>
                </group>

                {/* iPhone 17 Pro Max - Right (larger) */}
                <group position={[1.5, 0, 0]}>
                  <Center>
                    <RotatingPhone speed={0.4}>
                      <IPhoneModel
                        scale={0.85}
                        rotation={[0.1, 0, 0]}
                      />
                    </RotatingPhone>
                  </Center>
                </group>

                <Environment preset="studio" />
              </Suspense>
            </Canvas>
          </div>
        </div>

        {/* Size labels */}
        <div className="design-item flex justify-center gap-24 mb-12">
          <div className="text-center">
            <span className="block text-2xl font-bold text-white">6.3"</span>
            <span className="text-sm text-gray-400">iPhone 17 Pro</span>
          </div>
          <div className="text-center">
            <span className="block text-2xl font-bold text-white">6.9"</span>
            <span className="text-sm text-gray-400">iPhone 17 Pro Max</span>
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
