import React from 'react'
import Aurora from '../Components/Aurora'
import GooeyNav from '../Components/GooeyNav'
import { items } from '../Components/NavItem'

function Home() {
  return (
    <div>
        <div style={{ height: '600px', position: 'relative' }}>
          <GooeyNav 
            items={items}
            animationTime={600}
            pCount={15}
            minDistance={20}
            maxDistance={42}
            maxRotate={75}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            timeVariance={300}
          />
        </div>
        <Aurora
          colorStops={["#A694FF", "#A694FF", "#00d8ff"]}
          blend={0.2}
          amplitude={1.0}
          speed={0.5}
        />
    </div>
  )
}

export default Home