import React from 'react'
import clsx from 'clsx'
import useMacbookStore from '../store'
import { Canvas } from '@react-three/fiber'
import MacbookModel14 from './models/Macbook-14'
import StudioLights from './three/StudioLights'

import ModelSwitcher from './three/ModelSwitcher'
import { useMediaQuery } from 'react-responsive'

const ProductViewer = () => {
    const { color, scale, setColor, setScale } = useMacbookStore();

    const isMobile = useMediaQuery({query:'(max-width: 1024px)'});
    const adjustedScale = isMobile ? Math.max(0.02, scale - 0.02) : scale;
    const showLarge = scale >= 0.08;

    return (
        <section id='product-viewer'>
            <h2>Take a closer look</h2>

            <div className='controls'>
                
                <div className='flex-center gap-5 mt-5'>
                    <div className='color-control'>
                        <div onClick={() => setColor('#adb5db')} className={clsx('bg-neutral-300', color === '#adb5db' && 'active')}/>
                        <div onClick={() => setColor('#2e2c2e')} className={clsx('bg-neutral-900', color === '#2e2c2e' && 'active')}/>
                    </div>

                    <div className='size-control'>
                        <div onClick={() => setScale(0.06)} className={clsx(scale === 0.06 ? 'bg-white text-black' : 'bg-transparent text-white')}>14"</div>
                        <div onClick={() => setScale(0.08)} className={clsx(scale === 0.08 ? 'bg-white text-black' : 'bg-transparent text-white')}>16"</div>
                    </div>
                </div>
            </div>

            <Canvas id='canvas' camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}>
                <StudioLights/>
                
                <ModelSwitcher scale={adjustedScale} isMobile={isMobile} showLarge={showLarge}/>
              
            </Canvas>


        </section>
    )
}

export default ProductViewer