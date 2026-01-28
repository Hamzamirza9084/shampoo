import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./app.css"
import DarkVeil from './component/DarkVeil'

function App() {
 

  return (
    <>
     
<div style={{ width: '100%', height: '100%', position: 'relative' }}>
  <DarkVeil
  hueShift={0}
  noiseIntensity={0}
  scanlineIntensity={0}
  speed={0.5}
  scanlineFrequency={0}
  warpAmount={0}
/>
</div>
    </>
  )
}

export default App
