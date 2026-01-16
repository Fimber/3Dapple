import { PresentationControls } from '@react-three/drei';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import MacbookModel16 from '../models/Macbook-16';
import MacbookModel14 from '../models/Macbook-14';

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;

const fadeMeshes = (group, opacity) => {
    if(!group) return;

    group.traverse((child) => {
        if(child.isMesh) {
            child.material.transparent = true;
            gsap.to(child.material, {opacity, duration: ANIMATION_DURATION});
        }
    })
}

const moveGroup = (group, x) => {
    if(!group) return;

    gsap.to(group.position, {x, duration: ANIMATION_DURATION});
}




gsap.registerPlugin(useGSAP);

const ModelSwitcher = ({ scale, isMobile, showLarge }) => {
    const largeMacbookRef = useRef();
    const smallMacbookRef = useRef();

    useGSAP(() => {
        if(showLarge) {
        fadeMeshes(smallMacbookRef.current, 0);
        fadeMeshes(largeMacbookRef.current, 1);

        moveGroup(smallMacbookRef.current, -OFFSET_DISTANCE);
        moveGroup(largeMacbookRef.current, 0);
    } else {
        fadeMeshes(smallMacbookRef.current, 1);
        fadeMeshes(largeMacbookRef.current, 0);

        moveGroup(smallMacbookRef.current, 0);
        moveGroup(largeMacbookRef.current, OFFSET_DISTANCE);
    }
    }, [showLarge]);

    const controlsConfig = {
        snap: true,
        speed: 2.5,
        zoom: 1,
        azimuth: [-Infinity, Infinity],
        global: true,
        config: { mass: 1, tension: 0, friction: 26 },
    }
    return (
        <>
            <PresentationControls {...controlsConfig}>
                <group ref={largeMacbookRef}>
                    <MacbookModel16 scale={scale} />
                </group>
            </PresentationControls>
            {<PresentationControls {...controlsConfig}>
                <group ref={smallMacbookRef}>
                    <MacbookModel14 scale={isMobile ? 0.03 : 0.06}/>
                </group>
            </PresentationControls>}
        </>
    )
}

export default ModelSwitcher