import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const features = [
  {
    icon: '🖥️',
    title: 'Brightest Display Ever',
    description: 'Up to 3000 nits peak brightness. Readable in any light.',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    icon: '🔋',
    title: '72-Hour Battery',
    description: 'Go days without charging in Low Power Mode.',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: '📡',
    title: 'Precision GPS',
    description: 'Dual-frequency GPS for accurate tracking anywhere.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: '🏊',
    title: '100m Water Resistant',
    description: 'Dive into the deep. Built for extreme water sports.',
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    icon: '🆘',
    title: 'Emergency SOS',
    description: 'Satellite connectivity when you need help most.',
    gradient: 'from-red-500 to-pink-500'
  },
  {
    icon: '⚡',
    title: 'S10 Chip',
    description: 'Our fastest chip yet. More power, more possibilities.',
    gradient: 'from-purple-500 to-violet-500'
  }
]

const WatchFeatures = () => {
  const sectionRef = useRef(null)

  useGSAP(() => {
    gsap.from('.feature-card', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
      },
      opacity: 0,
      y: 50,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power2.out'
    })
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="py-24 px-5 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl lg:text-6xl font-bold text-white text-center mb-4">
          Built for the extraordinary.
        </h2>
        <p className="text-xl text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Every feature designed to push limits. Yours and ours.
        </p>

        {/* YouTube Video Embed */}
        <div className="mb-16">
          <div 
            className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden"
            style={{ 
              aspectRatio: '16/9',
              boxShadow: '0 20px 60px rgba(249, 115, 22, 0.2)'
            }}
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/Pz-cnlNVVEI?rel=0&modestbranding=1"
              title="Apple Watch Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card group p-8 rounded-3xl transition-all duration-500 hover:scale-105"
              style={{ 
                background: 'linear-gradient(145deg, #1a1a1a, #0f0f0f)',
                boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
              }}
            >
              <div 
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <span className="text-3xl">{feature.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WatchFeatures
