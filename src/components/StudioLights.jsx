import React from 'react'
import { Lightformer } from '@react-three/drei'
import { Environment } from '@react-three/drei'

const StudioLights = () => {
  return (
    <group name='lights'>
        <Environment resolution={256}>
            <group>
                <Lightformer 
                    form='circle' 
                    position={[-10, 5, -5]} 
                    intensity={10} 
                    scale={10} 
                    rotation-y={Math.PI / 2}
                />
                <Lightformer 
                    form='rect' 
                    position={[10, 0, 1]} 
                    intensity={10} 
                    scale={10} 
                    rotation-y={Math.PI * 0.2}
                />
            </group>

        </Environment>

        <spotLight 
            position={[-2, 10, 5]}
            intensity={Math.PI * 0.2} 
            angle={0.15}
            decay={0} 
            penumbra={1}
        />
        <spotLight 
            position={[2, 10, 5]}
            intensity={Math.PI * 0.2} 
            angle={0.15}
            decay={0} 
            penumbra={1}
            color='red'
        />
        <spotLight 
            position={[0, 10, -5]}
            intensity={Math.PI * 0.2} 
            angle={0.15}
            decay={0} 
            penumbra={1}
            color='blue'
        />
    </group>
  )
}

export default StudioLights