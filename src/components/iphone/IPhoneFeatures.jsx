import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useMediaQuery } from 'react-responsive'

const IPhoneFeatures = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })

  useGSAP(() => {
    gsap.from(['.iphone-left-column', '.iphone-right-column'], {
      scrollTrigger: {
        trigger: '.iphone-features-section',
        start: isMobile ? 'bottom bottom' : 'top center'
      },
      y: 20,
      opacity: 0,
      stagger: 0.3,
      duration: 1,
      ease: 'power1.inOut'
    })
  })

  return (
    <section className="iphone-features-section container mx-auto lg:py-40 max-lg:px-5">
      <h2 className="text-white font-semibold text-3xl lg:text-7xl text-center max-w-3xl mx-auto">
        Why iPhone 17 Pro
      </h2>
      <h3 className="text-[#F5F5F7] font-semibold text-xl lg:text-3xl text-center mt-10">
        Built different. Think different.
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-20 text-[#F5F5F7]">
        {/* Left Column */}
        <div className="iphone-left-column flex flex-col justify-between gap-5">
          {/* Camera Card with Background */}
          <div 
            className="h-full p-10 2xl:pt-32 lg:pt-20 rounded-3xl relative overflow-hidden"
            style={{ 
              background: 'linear-gradient(145deg, #1a1a2e, #16213e)',
              minHeight: '300px'
            }}
          >
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                background: 'radial-gradient(circle at 70% 30%, #667eea 0%, transparent 50%), radial-gradient(circle at 30% 70%, #764ba2 0%, transparent 50%)'
              }}
            ></div>
            <div className="relative z-10">
              <span className="text-5xl mb-4 block">📸</span>
              <p className="font-semibold text-4xl max-w-2xs">
                64MP Fusion camera with 10x optical zoom.
              </p>
            </div>
          </div>

          {/* Display Card */}
          <div className="bg-[#1D1D1F] p-10 rounded-3xl flex items-center gap-7">
            <span className="text-5xl">✨</span>
            <p className="font-semibold lg:text-2xl 2xl:text-3xl">
              ProMotion display <br />
              with Always-On.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="iphone-right-column flex flex-col justify-between gap-5">
          {/* Apple Intelligence Card with Gradient Border */}
          <div 
            className="p-10 rounded-3xl flex items-center gap-7 relative"
            style={{
              background: '#1d1d1f',
              backgroundClip: 'padding-box',
              border: '3px solid transparent',
            }}
          >
            <div 
              className="absolute inset-0 -z-10 rounded-3xl"
              style={{
                margin: '-3px',
                background: 'linear-gradient(91deg, #0096ff 0%, #bb64ff 42%, #f2416b 74%, #eb7500 100%)',
                borderRadius: '24px',
              }}
            ></div>
            <span className="text-5xl">🧠</span>
            <p className="font-semibold lg:text-2xl 2xl:text-3xl">
              Built for <br />
              <span 
                style={{
                  background: 'linear-gradient(91deg, #0096ff 0%, #bb64ff 42%, #f2416b 74%, #eb7500 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Apple Intelligence 2.0
              </span>
            </p>
          </div>

          {/* Battery Card */}
          <div 
            className="h-full bg-[#1D1D1F] p-10 2xl:pt-32 lg:pt-20 rounded-3xl"
            style={{ minHeight: '250px' }}
          >
            <span className="text-5xl mb-4 block">🔋</span>
            <p className="font-semibold text-4xl max-w-sm">
              Up to
              <span 
                style={{
                  background: 'linear-gradient(90deg, #35a98a 0%, #6dd400 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {' '}30 hours{' '}
              </span>
              battery life.
              <span className="text-[#86868b]">
                {' '}Our longest ever.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="max-w-4xl mx-auto mt-20">
        <div className="aspect-video rounded-3xl overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/rng_yUSwrgU"
            title="iPhone 17 Pro - Watch the film"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default IPhoneFeatures
