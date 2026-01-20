import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const chipStats = [
  { value: '8-core', label: 'CPU', subtext: '4 performance + 4 efficiency' },
  { value: '8-core', label: 'GPU', subtext: 'Advanced ray tracing' },
  { value: '20-core', label: 'Neural Engine', subtext: '45 trillion ops/sec' }
]

const IPhoneChip = () => {
  const sectionRef = useRef(null)

  useGSAP(() => {
    gsap.from('.chip-content > *', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
      },
      opacity: 0,
      y: 40,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power2.out'
    })
  }, { scope: sectionRef })

  return (
    <section 
      ref={sectionRef} 
      className="py-24 px-5"
      style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #000 100%)' }}
    >
      <div className="chip-content text-center max-w-3xl mx-auto mb-16">
        <span 
          className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-6 text-white"
          style={{ background: 'linear-gradient(90deg, #667eea, #764ba2)' }}
        >
          A19 Pro chip
        </span>
        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">Speed reimagined.</h2>
        <p className="text-xl text-gray-400">
          The A19 Pro chip delivers groundbreaking performance for Apple Intelligence 2.0, 
          with a revolutionary Neural Engine, 8-core CPU and GPU, and 50% more memory bandwidth. 
          The most advanced chip ever in a smartphone.
        </p>
      </div>

      <div className="flex justify-center items-center mb-16 relative">
        <div className="relative w-40 h-40 lg:w-56 lg:h-56" style={{ perspective: '1000px' }}>
          <div 
            className="absolute w-full h-full rounded-2xl flex items-center justify-center text-white font-bold text-xl"
            style={{ 
              background: 'linear-gradient(145deg, #667eea, #764ba2)',
              transform: 'translateZ(20px)',
              boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)'
            }}
          >
            <span style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}>A19 Pro</span>
          </div>
        </div>
        <div 
          className="absolute w-64 h-64 rounded-full"
          style={{ 
            background: 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)',
            filter: 'blur(40px)'
          }}
        ></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
        {chipStats.map((stat, index) => (
          <div 
            key={index} 
            className="text-center p-6 rounded-2xl"
            style={{ background: 'linear-gradient(145deg, #1a1a2e, #0f0f1a)' }}
          >
            <span className="block text-2xl lg:text-3xl font-bold text-white mb-1">{stat.value}</span>
            <span className="block text-lg text-gray-300 mb-1">{stat.label}</span>
            <span className="text-sm text-gray-500">{stat.subtext}</span>
          </div>
        ))}
      </div>

      <div className="max-w-2xl mx-auto">
        <h3 className="text-xl font-semibold text-white mb-6 text-center">Compared to iPhone 16 Pro</h3>
        <div className="space-y-6">
          <div>
            <span className="block text-gray-400 mb-2">CPU Performance</span>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden mb-1">
              <div 
                className="h-full rounded-full"
                style={{ width: '90%', background: 'linear-gradient(90deg, #667eea, #764ba2)' }}
              ></div>
            </div>
            <span className="text-sm text-primary">25% faster</span>
          </div>
          <div>
            <span className="block text-gray-400 mb-2">GPU Performance</span>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden mb-1">
              <div 
                className="h-full rounded-full"
                style={{ width: '95%', background: 'linear-gradient(90deg, #667eea, #764ba2)' }}
              ></div>
            </div>
            <span className="text-sm text-primary">35% faster</span>
          </div>
          <div>
            <span className="block text-gray-400 mb-2">Neural Engine</span>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden mb-1">
              <div 
                className="h-full rounded-full"
                style={{ width: '100%', background: 'linear-gradient(90deg, #667eea, #764ba2)' }}
              ></div>
            </div>
            <span className="text-sm text-primary">2.5x faster</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IPhoneChip
