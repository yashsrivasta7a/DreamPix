import React from 'react'
import Aurora from '../Components/Aurora'

function Home() {
  return (
    <div>
        <Aurora
  colorStops={["#00d8ff", "#7cff67", "#00d8ff"]}
  blend={0.2}
  amplitude={1.0}
  speed={0.5}
/>
        
    </div>
  )
}

export default Home