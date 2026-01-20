import React, { useRef, Suspense } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { Model as CamerasModel } from '../models/Cameras'

const cameraSpecs = [
  { label: '64MP', desc: 'Fusion camera' },
  { label: '10x', desc: 'Optical zoom' },
  { label: '48MP', desc: 'Ultra Wide' }
]

const IPhoneCamera = () => {
  const sectionRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
      }
    })

    tl.from('.camera-title', {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: 'power2.out'
    })
    .from('.camera-subtitle', {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: 'power2.out'
    }, '-=0.4')
    .from('.camera-canvas', {
      opacity: 0,
      scale: 0.95,
      duration: 1,
      ease: 'power2.out'
    }, '-=0.3')
    .from('.camera-spec', {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.5,
      ease: 'power2.out'
    }, '-=0.5')
  }, { scope: sectionRef })

  return (
    <section 
      ref={sectionRef} 
      className="py-24 px-5"
      style={{ background: 'linear-gradient(180deg, #000 0%, #0a0a0a 100%)' }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="camera-title text-4xl lg:text-6xl font-bold text-white mb-6 text-center">
          Pro camera system
        </h2>
        <p className="camera-subtitle text-xl text-gray-400 text-center max-w-2xl mx-auto mb-16">
          The most advanced camera system we've ever created. The all-new 64MP 
          Fusion camera with 10x optical zoom captures incredible detail from 
          any distance. Pro-level photography, redefined.
        </p>

        <div className="camera-canvas w-full h-[300px] lg:h-[400px] mb-8">
          <Canvas
            camera={{ position: [0, 0, 1.5], fov: 45 }}
            style={{ touchAction: 'none' }}
          >
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <directionalLight position={[-5, -5, -5]} intensity={0.3} />
            <spotLight position={[0, 5, 0]} intensity={0.5} angle={0.5} penumbra={1} />
            
            <Suspense fallback={null}>
              <CamerasModel 
                scale={2.5} 
                position={[-0.4, 0, 0]} 
                rotation={[0, Math.PI / 6, 0]} 
              />
              <Environment preset="studio" />
            </Suspense>
            
            <OrbitControls 
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={2}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 1.8}
            />
          </Canvas>
        </div>
        <p className="text-center text-gray-500 text-sm mb-12">Pro camera system</p>

        <div className="flex justify-center gap-12 lg:gap-20 mb-16">
          {cameraSpecs.map((spec, index) => (
            <div key={index} className="camera-spec text-center">
              <span className="block text-3xl lg:text-4xl font-bold text-white mb-1">{spec.label}</span>
              <span className="text-gray-400">{spec.desc}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="text-center">
            <div 
              className="aspect-square rounded-2xl mb-3"
              style={{ background: 'linear-gradient(145deg, #1a1a3e, #0a0a1a)' }}
            ></div>
            <p className="text-gray-400">Night mode</p>
          </div>
          <div className="text-center">
            <div 
              className="aspect-square rounded-2xl mb-3"
              style={{ background: 'linear-gradient(145deg, #2a1a3e, #1a0a2a)' }}
            ></div>
            <p className="text-gray-400">Portrait</p>
          </div>
          <div className="text-center">
            <div 
              className="aspect-square rounded-2xl mb-3"
              style={{ background: 'linear-gradient(145deg, #1a2a1e, #0a1a0a)' }}
            ></div>
            <p className="text-gray-400">Macro</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IPhoneCamera
