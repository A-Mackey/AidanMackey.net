import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

// CSS
import '../CSS/Sphere.css'

function Sphere(props) {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (ref.current.rotation.y += 0.0005))
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
      <mesh
        {...props}
        ref={ref}
        >
        <sphereGeometry args={[2.5, 12, 12]} />
        <meshStandardMaterial color={'#777'} wireframe />
      </mesh>
    )
}
  
function Plane(props) {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (ref.current.rotation.z -= 0.0005))
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
      <mesh
            {...props}
            ref={ref}
            rotation={ [Math.PI / -2, 0 , 0]}
        >
        <planeGeometry args={[7,7, 4,4]} />
        <meshStandardMaterial color={'#777'} wireframe/>
      </mesh>
    )
  }

function FlyingSphere() {
  return (
    <Canvas class="sphereCanvas">
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Sphere position={[0, 0.5, -2]} />
        <Plane position={ [0,-2.5, -2] } />
  </Canvas>
  );
}

export default FlyingSphere;
