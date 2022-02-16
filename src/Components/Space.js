import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei'
import { useEffect, useState, useRef } from 'react';

const Rotate = () => {
    const {gl, camera} = useThree();
    const ref = useRef()
    useFrame(() => {
        camera.rotation.x += 0.000175;
        camera.rotation.y += 0.000175;
        camera.rotation.z += 0.000175;
    })
    return (
        <mesh>
            <boxGeometry args={[0,0,0]}/>
        </mesh>
    );
}

export default function Space() {
    useEffect(() => {
        function resetCanvas() {
            var canvas = document.getElementById("canvasID");
    
            canvas.style.minHeight = "100vh";
            canvas.style.minWidth = 'calc(100vw - 7px)'
            canvas.style.position = "fixed"
            canvas.style.zIndex = "0"
        }

        window.addEventListener('resize', resetCanvas)
        resetCanvas();
    })
    return  (
        <Canvas id='canvasID'>
            <PerspectiveCamera rotation={[0, 0, 0]}>
                <Stars />
                <Rotate />
            </PerspectiveCamera>
        </Canvas>
    );
}