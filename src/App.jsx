import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import Authentication from './Firebase/Authentication'

function App() {
  return (
    <div>
      <Authentication />
  <Home />
  <About />
    </div>
  )
}

export default App