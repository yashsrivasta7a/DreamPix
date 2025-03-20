import React, { useState } from 'react'
import { generateImage } from '../utils/generateImage' 

function Start() {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    generateImage(prompt);
  }

  return (
    <div>
        <form action="type" onSubmit={handleSubmit}>    
            <input 
              type="text" 
              placeholder="Enter text here" 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <button type="submit">Generate Image</button>
        </form>
    </div>
  )
}

export default Start