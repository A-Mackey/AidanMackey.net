import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei'
import { useEffect, useState } from 'react';

export default function Space() {
    const [timeLoaded, setTimeLoaded] = useState(-1);

    useEffect(() => {
        function resetCanvas() {
            var canvas = document.getElementById("canvasID");
    
            canvas.style.minHeight = "100vh";
            canvas.style.minWidth = 'calc(100vw - 7px)'
        }

        window.addEventListener('resize', resetCanvas)
        resetCanvas();

        let currentDate = new Date();
        // setTimeLoaded(currentDate.getTime());
        console.log(currentDate.getTime())
    })
    return  (
        <Canvas id='canvasID'>
            <PerspectiveCamera rotation={[Math.PI / 2, 0, 0]}>
            <Stars  />
            </PerspectiveCamera>
        </Canvas>
    );
}