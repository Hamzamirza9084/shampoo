import { useState } from 'react'
import "./App.css"
import DarkVeil from './component/DarkVeil'
import CircularGallery from './component/CircularGallery'
import Header from './component/Header' 
import Footer from './component/Footer' 
import Login from './Login/Login'

function App() {
  return (
    <>
      {/* 1. Background Layer: Fixed to the viewport and placed behind everything */}
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
          noiseIntensity={0.02} 
          scanlineIntensity={0.1}
          speed={1.3}
          scanlineFrequency={2}
          warpAmount={0.1}
        />
      </div>

      {/* 2. Navigation Layer: Stays on top of the background */}
      <Header />

      {/* 3. Content Layer: Centered main gallery area */}
      <main style={{ 
        height: '100vh', 
        width: '100vw', 
        position: 'relative', 
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        <div style={{ height: '500px', width: '100%', position: 'relative' }}>
          <CircularGallery 
            bend={3} 
            textColor="#ffffff" 
            borderRadius={0.05} 
            scrollEase={0.02} 
          />
        </div>
      </main>
      
      {/* 4. Information Layer: Persistent footer */}
      <Footer />
      
    </>
  )
}

export default App