import React, { useRef, Suspense } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei'
import { Model as AppleWatchUltra } from '../models/Apple_watch_ultra_2'

const RotatingWatch = ({ children, speed = 0.3 }) => {
  const groupRef = useRef()
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * speed
    }
  })
  return <group ref={groupRef}>{children}</group>
}

const healthFeatures = [
  {
    metric: 'Heart Rate',
    value: '72',
    unit: 'BPM',
    icon: '❤️',
    color: '#ef4444',
    description: 'Continuous monitoring with irregular rhythm notifications'
  },
  {
    metric: 'Blood Oxygen',
    value: '98',
    unit: '%',
    icon: '🫁',
    color: '#3b82f6',
    description: 'Measure your blood oxygen level anytime'
  },
  {
    metric: 'Sleep',
    value: '7.5',
    unit: 'hrs',
    icon: '😴',
    color: '#8b5cf6',
    description: 'Track sleep stages and get insights'
  },
  {
    metric: 'Temperature',
    value: '36.8',
    unit: '°C',
    icon: '🌡️',
    color: '#f97316',
    description: 'Wrist temperature sensing for cycle tracking'
  }
]

const WatchHealth = () => {
  const sectionRef = useRef(null)

  useGSAP(() => {
    gsap.from('.health-title', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power2.out'
    })

    gsap.from('.health-card', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
      },
      opacity: 0,
      x: -50,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power2.out'
    })

    gsap.from('.health-ring', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 50%',
      },
      scale: 0,
      opacity: 0,
      duration: 1,
      ease: 'back.out(1.7)'
    })
  }, { scope: sectionRef })

  return (
    <section 
      ref={sectionRef} 
      className="py-24 px-5"
      style={{ background: 'linear-gradient(180deg, #000 0%, #0f172a 100%)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="health-title text-4xl lg:text-6xl font-bold text-white mb-4">
            Your health. At a glance.
          </h2>
          <p className="health-title text-xl text-gray-400 max-w-2xl mx-auto">
            Advanced sensors and algorithms work together to give you a complete picture of your health.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Watch Model - Left */}
          <div className="health-model h-[500px] rounded-3xl overflow-hidden">
            <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <directionalLight position={[-10, -10, -5]} intensity={0.5} />
              <spotLight position={[0, 10, 0]} intensity={0.5} angle={0.3} penumbra={1} />
              
              <Suspense fallback={null}>
                <Center>
                  <RotatingWatch speed={0.3}>
                    <AppleWatchUltra scale={40} rotation={[0.2, 0, 0]} />
                  </RotatingWatch>
                </Center>
                <Environment preset="city" />
              </Suspense>
            </Canvas>
          </div>

          {/* Health Metrics & Activity Rings - Right */}
          <div className="space-y-8">
            {/* Health Metrics */}
            <div className="space-y-4">
              {healthFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="health-card flex items-center gap-6 p-6 rounded-2xl transition-all duration-300 hover:translate-x-2"
                  style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))' }}
                >
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                    style={{ background: `${feature.color}20` }}
                  >
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-3xl font-bold text-white">{feature.value}</span>
                      <span className="text-lg text-gray-400">{feature.unit}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-1">{feature.metric}</h4>
                    <p className="text-sm text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Activity Rings */}
            <div className="flex justify-center">
              <div className="health-ring relative w-64 h-64">
                {/* Outer ring - Move */}
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle
                    cx="128"
                    cy="128"
                    r="112"
                    fill="none"
                    stroke="#3f3f46"
                    strokeWidth="20"
                  />
                  <circle
                    cx="128"
                    cy="128"
                    r="112"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="20"
                    strokeLinecap="round"
                    strokeDasharray="703.7"
                    strokeDashoffset="140.74"
                    className="drop-shadow-lg"
                    style={{ filter: 'drop-shadow(0 0 10px #ef4444)' }}
                  />
                </svg>
                {/* Middle ring - Exercise */}
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle
                    cx="128"
                    cy="128"
                    r="88"
                    fill="none"
                    stroke="#3f3f46"
                    strokeWidth="20"
                  />
                  <circle
                    cx="128"
                    cy="128"
                    r="88"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="20"
                    strokeLinecap="round"
                    strokeDasharray="552.9"
                    strokeDashoffset="165.87"
                    className="drop-shadow-lg"
                    style={{ filter: 'drop-shadow(0 0 10px #22c55e)' }}
                  />
                </svg>
                {/* Inner ring - Stand */}
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle
                    cx="128"
                    cy="128"
                    r="64"
                    fill="none"
                    stroke="#3f3f46"
                    strokeWidth="20"
                  />
                  <circle
                    cx="128"
                    cy="128"
                    r="64"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="20"
                    strokeLinecap="round"
                    strokeDasharray="402.1"
                    strokeDashoffset="80.42"
                    className="drop-shadow-lg"
                    style={{ filter: 'drop-shadow(0 0 10px #3b82f6)' }}
                  />
                </svg>
                
                {/* Center text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-white">420</span>
                  <span className="text-gray-400 text-sm">CAL</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="grid grid-cols-3 gap-6 mt-16">
          <div className="text-center p-6 rounded-2xl" style={{ background: 'rgba(239, 68, 68, 0.1)' }}>
            <div className="text-3xl font-bold text-red-500 mb-2">420/500</div>
            <div className="text-gray-400">Move Goal</div>
          </div>
          <div className="text-center p-6 rounded-2xl" style={{ background: 'rgba(34, 197, 94, 0.1)' }}>
            <div className="text-3xl font-bold text-green-500 mb-2">32/30</div>
            <div className="text-gray-400">Exercise Minutes</div>
          </div>
          <div className="text-center p-6 rounded-2xl" style={{ background: 'rgba(59, 130, 246, 0.1)' }}>
            <div className="text-3xl font-bold text-blue-500 mb-2">10/12</div>
            <div className="text-gray-400">Stand Hours</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WatchHealth
