import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import HeartWithName from './Heart'
import { Environment, OrbitControls } from '@react-three/drei'

function App() {
  const [showHeart, setShowHeart] = useState(false)

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      {showHeart ? (
        <Canvas shadows camera={{ position: [0, 0, 8], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <Environment preset="sunset" />
          <HeartWithName />
          <OrbitControls enableZoom={true} enablePan={true} />
        </Canvas>
      ) : (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)'
        }}>
          <button 
            onClick={() => setShowHeart(true)}
            style={{
              padding: '15px 30px',
              fontSize: '18px',
              backgroundColor: '#ff3366',
              color: 'white',
              border: 'none',
              borderRadius: '30px',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease',
              ':hover': {
                transform: 'scale(1.05)'
              }
            }}
          >
            Show Heart for Thao Vy
          </button>
          <p style={{ 
            marginTop: '20px', 
            color: '#fff',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            fontSize: '1.2rem'
          }}>
            Made by Tuan Anh chong iuuu 😌
          </p>
        </div>
      )}
    </div>
  )
}

export default App
