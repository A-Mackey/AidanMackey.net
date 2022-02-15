import React, { useRef, useEffect } from 'react'
import { Canvas, useFrame, } from '@react-three/fiber'

// CSS
import '../CSS/Sphere.css'

function Sphere(props) {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()
    // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.y += 0.00075))
  useFrame((state, delta) => (ref.current.rotation.z -= 0))
  useFrame((state, delta) => (ref.current.rotation.z -= Math.PI / 7000))

    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
            position={ props.position }
            ref={ref}
            rotation={ [0, 0 , Math.PI / 6]}

        >
        <sphereGeometry args={[3.5, 12, 12]} />
        <meshStandardMaterial color={props.color} wireframe />
      </mesh>
    )
}

function Cube(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Subscribe this component to the render-loop, rotate the mesh every frame
useFrame((state, delta) => (ref.current.rotation.y += 0.00075))
useFrame((state, delta) => (ref.current.rotation.z -= 0))
useFrame((state, delta) => (ref.current.rotation.z -= Math.PI / 7000))

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
      <mesh
          position={ props.position }
          ref={ref}
          rotation={ [0, 0 , Math.PI / 6]}

      >
      <boxGeometry args={[4, 4, 4, 2, 2 ]} />
      <meshStandardMaterial color={props.color} wireframe />
    </mesh>
  )
}

function Cone(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Subscribe this component to the render-loop, rotate the mesh every frame
useFrame((state, delta) => (ref.current.rotation.y += 0.00075))
useFrame((state, delta) => (ref.current.rotation.z -= 0))
useFrame((state, delta) => (ref.current.rotation.z -= Math.PI / 7000))

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
      <mesh
          position={ props.position }
          ref={ref}
          rotation={ [0, 0 , Math.PI / 6]}

      >
      <coneGeometry args={[3, 3]} />
      <meshStandardMaterial color={props.color} wireframe />
    </mesh>
  )
}
  
function Plane(props) {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (ref.current.rotation.z -= 0.00075/2))
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
      <mesh
            position={props.position}
            ref={ref}
            rotation={ [Math.PI / -2, 0 , 0]}
        >
        <planeGeometry args={[9,9, 4,4]} />
        <meshStandardMaterial color={props.color} wireframe/>
      </mesh>
    )
  }

function FlyingSphere(props) {
    useEffect(() => {
        var canvas = document.getElementById("canvasID");

        canvas.style.minHeight = "80vh";
        canvas.style.height = "max-content";
    })
    
  return (
    <Canvas id="canvasID">
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {
        props.shape == "sphere" ?
          <Sphere position={[0, 0.75, -2]} color={props.color} />
          : 
          <></>
      }

      {
        props.shape == "cube" ?
          <Cube position={[0, 0.75, -2]} color={ props.color}/>
          : 
          <></>
      }

{
        props.shape == "cone" ?
          <Cone position={[0, 0.75, -2]} color={ props.color}/>
          : 
          <></>
      }
        
        <Plane position={[0, -2.75, -2]} color={ props.color}/>
    </Canvas>
  );
}

export default FlyingSphere;
