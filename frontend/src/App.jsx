import { useState } from 'react'
import "./App.css"
import DarkVeil from './component/DarkVeil'
import CircularGallery from './component/CircularGallery' //

function App() {
  return (
    <>
      {/* 1. Background Layer */}
      <div style={{ 
        width: '100vw', 
        height: '100vh', 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        zIndex: -1 
      }}>
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
        />
      </div>

      {/* 2. Content Layer (Circular Gallery) */}
      <div style={{ 
        height: '100vh', 
        width: '100vw', 
        position: 'relative', 
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ height: '600px', width: '100%', position: 'relative' }}>
          <CircularGallery 
            bend={3} 
            textColor="#ffffff" 
            borderRadius={0.05} 
            scrollEase={0.02} 
          />
        </div>
      </div>
    </>
  )
}

export default App