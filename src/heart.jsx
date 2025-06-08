import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Text } from '@react-three/drei'

const HeartWithName = () => {
  const groupRef = useRef()

  // Create heart shape
  const heartShape = new THREE.Shape()
  const x = 0, y = 0
heartShape.moveTo(x + 0.25, y - 0.25)  // Changed y to negative
  heartShape.bezierCurveTo(x + 0.25, y - 0.25, x + 0.2, y, x, y)
  heartShape.bezierCurveTo(x - 0.6, y, x - 0.6, y - 0.7, x - 0.6, y - 0.7)  // Changed y to negative
  heartShape.bezierCurveTo(x - 0.6, y - 1.1, x - 0.3, y - 1.54, x + 0.25, y - 1.9)  // Changed y to negative
  heartShape.bezierCurveTo(x + 0.8, y - 1.54, x + 1.1, y - 1.1, x + 1.1, y - 0.7)  // Changed y to negative
  heartShape.bezierCurveTo(x + 1.1, y - 0.7, x + 1.1, y, x + 0.5, y)
  heartShape.bezierCurveTo(x + 0.35, y, x + 0.25, y - 0.25, x + 0.25, y - 0.25)  // Changed y to negative

  // Animation loop
  useFrame(({ clock }) => {
    groupRef.current.rotation.y = clock.getElapsedTime() * 0.5
    groupRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.1
  })

  return (
    <group ref={groupRef}>
      <group position={[0, 0, 0]} scale={[0.5, 0.5, 0.5]}>
        <mesh>
          <extrudeGeometry 
            args={[
              heartShape, 
              {
                steps: 2,
                depth: 0.5,
                bevelEnabled: true,
                bevelThickness: 0.1,
                bevelSize: 0.1,
                bevelOffset: 0,
                bevelSegments: 5
              }
            ]}
          />
          <meshStandardMaterial 
            color="#ff3366" 
            emissive="#ff0000" 
            emissiveIntensity={0.2}
            roughness={0.1}
            metalness={0.3}
          />
        </mesh>
      </group>
      
      {/* Name text below the heart */}
      <Text
        position={[0, -2, 0]}
        color="#ff3366"
        fontSize={0.5}
        maxWidth={5}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="center"
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
        anchorY="middle"
      >
        Thao Vy Ngoccc
      </Text>
    </group>
  )
}

export default HeartWithName
