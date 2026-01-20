import { PresentationControls } from '@react-three/drei'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { Model as IPhone17Pro } from '../models/Iphone17'
import { Model as IPhone17ProMax } from '../models/IphneModel'

const ANIMATION_DURATION = 0.8
const OFFSET_DISTANCE = 5

const fadeMeshes = (group, opacity) => {
  if (!group) return

  group.traverse((child) => {
    if (child.isMesh) {
      child.material.transparent = true
      gsap.to(child.material, { opacity, duration: ANIMATION_DURATION })
    }
  })
}

const moveGroup = (group, x) => {
  if (!group) return

  gsap.to(group.position, { x, duration: ANIMATION_DURATION })
}

gsap.registerPlugin(useGSAP)

const IPhoneModelSwitcher = ({ model, isMobile }) => {
  const proRef = useRef()
  const maxRef = useRef()

  const showMax = model === 'max'

  useGSAP(() => {
    if (showMax) {
      fadeMeshes(proRef.current, 0)
      fadeMeshes(maxRef.current, 1)

      moveGroup(proRef.current, -OFFSET_DISTANCE)
      moveGroup(maxRef.current, 0)
    } else {
      fadeMeshes(proRef.current, 1)
      fadeMeshes(maxRef.current, 0)

      moveGroup(proRef.current, 0)
      moveGroup(maxRef.current, OFFSET_DISTANCE)
    }
  }, [showMax])

  const controlsConfig = {
    snap: true,
    speed: 4,
    zoom: 1,
    azimuth: [-Infinity, Infinity],
    global: true,
    config: { mass: 1, tension: 0, friction: 20 },
  }

  const proScale = isMobile ? 0.96 : 1.2
  const maxScale = isMobile ? 0.78 : 1.0

  return (
    <>
      <PresentationControls {...controlsConfig}>
        <group ref={proRef}>
          <IPhone17Pro 
            scale={proScale} 
            position={[0, -0.8, 0]} 
            rotation={[0.1, -0.3, 0]} 
          />
        </group>
      </PresentationControls>
      <PresentationControls {...controlsConfig}>
        <group ref={maxRef}>
          <IPhone17ProMax 
            scale={maxScale} 
            position={[0, -2.0, 0]} 
            rotation={[0, -0.3, 0]} 
          />
        </group>
      </PresentationControls>
    </>
  )
}

export default IPhoneModelSwitcher
