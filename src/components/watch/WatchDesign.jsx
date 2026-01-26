import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import clsx from 'clsx'

const bands = [
  { id: 'sport', name: 'Sport Band', color: '#1a1a1a', accent: '#f97316' },
  { id: 'braided', name: 'Braided Solo Loop', color: '#3b82f6', accent: '#60a5fa' },
  { id: 'leather', name: 'Leather Link', color: '#92400e', accent: '#d97706' },
  { id: 'milanese', name: 'Milanese Loop', color: '#a1a1aa', accent: '#e4e4e7' },
  { id: 'ocean', name: 'Ocean Band', color: '#0891b2', accent: '#22d3ee' },
  { id: 'alpine', name: 'Alpine Loop', color: '#f97316', accent: '#fb923c' }
]

const materials = [
  { id: 'aluminum', name: 'Aluminum', description: 'Light. Bright. Ready for action.', price: 'From $399' },
  { id: 'titanium', name: 'Titanium', description: 'Strong. Light. Corrosion resistant.', price: 'From $699' },
  { id: 'ceramic', name: 'Ceramic', description: 'Scratch resistant. Elegantly beautiful.', price: 'From $999' }
]

const WatchDesign = () => {
  const sectionRef = useRef(null)
  const [selectedBand, setSelectedBand] = useState('sport')
  const [selectedMaterial, setSelectedMaterial] = useState('titanium')

  useGSAP(() => {
    gsap.from('.design-title', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power2.out'
    })

    gsap.from('.band-option', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 60%',
      },
      opacity: 0,
      scale: 0.8,
      stagger: 0.1,
      duration: 0.6,
      ease: 'back.out(1.7)'
    })

    gsap.from('.material-card', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 50%',
      },
      opacity: 0,
      y: 40,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power2.out'
    })
  }, { scope: sectionRef })

  const currentBand = bands.find(b => b.id === selectedBand)

  return (
    <section ref={sectionRef} className="py-24 px-5 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="design-title text-4xl lg:text-6xl font-bold text-white mb-4">
            Make it yours.
          </h2>
          <p className="design-title text-xl text-gray-400 max-w-2xl mx-auto">
            Mix and match cases and bands to create a look that's uniquely you.
          </p>
        </div>

        {/* Band Preview */}
        <div className="flex justify-center mb-12">
          <div 
            className="relative w-40 h-64 rounded-[32px] transition-all duration-500"
            style={{ 
              background: `linear-gradient(145deg, ${currentBand.accent}, ${currentBand.color})`,
              boxShadow: `0 20px 60px ${currentBand.color}40`
            }}
          >
            {/* Watch face overlay */}
            <div 
              className="absolute top-8 left-1/2 -translate-x-1/2 w-32 h-40 rounded-[24px]"
              style={{ 
                background: 'linear-gradient(145deg, #2a2a2a, #1a1a1a)',
                boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.5)'
              }}
            >
              <div className="w-full h-full rounded-[20px] p-3 flex flex-col items-center justify-center"
                style={{ background: 'linear-gradient(180deg, #1a1a2e, #0f0f1a)' }}
              >
                <span className="text-2xl font-light text-white">10:09</span>
                <span className="text-xs text-gray-500 mt-1">MONDAY</span>
              </div>
            </div>
            {/* Crown */}
            <div 
              className="absolute -right-1 top-12 w-2 h-6 rounded-full"
              style={{ background: 'linear-gradient(90deg, #4a4a4a, #2a2a2a)' }}
            />
          </div>
        </div>

        {/* Band Selector */}
        <div className="mb-16">
          <p className="text-center text-gray-400 mb-6">Choose your band</p>
          <div className="flex flex-wrap justify-center gap-4">
            {bands.map((band) => (
              <button
                key={band.id}
                onClick={() => setSelectedBand(band.id)}
                className={clsx(
                  'band-option flex flex-col items-center gap-2 p-4 rounded-2xl transition-all duration-300',
                  selectedBand === band.id 
                    ? 'bg-white/10 scale-105' 
                    : 'bg-transparent hover:bg-white/5'
                )}
              >
                <div 
                  className={clsx(
                    'w-12 h-12 rounded-full transition-all duration-300',
                    selectedBand === band.id && 'ring-2 ring-white ring-offset-2 ring-offset-black'
                  )}
                  style={{ background: `linear-gradient(145deg, ${band.accent}, ${band.color})` }}
                />
                <span className="text-sm text-gray-300">{band.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Material Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {materials.map((material) => (
            <div
              key={material.id}
              onClick={() => setSelectedMaterial(material.id)}
              className={clsx(
                'material-card p-8 rounded-3xl cursor-pointer transition-all duration-300',
                selectedMaterial === material.id 
                  ? 'ring-2 ring-orange-500 bg-white/10' 
                  : 'bg-white/5 hover:bg-white/10'
              )}
            >
              <h3 className="text-2xl font-bold text-white mb-2">{material.name}</h3>
              <p className="text-gray-400 mb-4">{material.description}</p>
              <p className="text-orange-500 font-semibold">{material.price}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a 
            href="#" 
            className="inline-block px-8 py-4 rounded-full font-semibold text-lg bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300"
          >
            Create your style in Apple Watch Studio
          </a>
        </div>
      </div>
    </section>
  )
}

export default WatchDesign
