import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the GoogleGenerativeAI instance with your API key
const genAI = new GoogleGenerativeAI("AIzaSyBI1_GMBh9kZGXrq5OSRMGkhFXP_V2Uy");

async function generateImage(contents, setImg, setLoading) {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp-image-generation",
    generationConfig: {
      responseModalities: ["Text", "Image"],
    },
  });

  try {
    setLoading(true);
    const response = await model.generateContent('can you create best image of HD art of ' + contents);
    const parts = response.response.candidates[0]?.content?.parts;
    
    if (parts) {
      for (const part of parts) {
        if (part.text) {
          console.log(part.text);
        } else if (part.inlineData) {
          const imageData = part.inlineData.data;
          const imgSrc = `data:image/png;base64,${imageData}`;
          setImg(imgSrc);
        }
      }
    } else {
      console.error("No parts found in the response.");
    }
  } catch (error) {
    console.error("Error generating content:", error);
  } finally {
    setLoading(false);
  }
}

function Start() {
  const [prompt, setPrompt] = useState('');
  const [img, setImg] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    generateImage(prompt, setImg, setLoading);
  };

  return (
    <div className="text-center mt-12 bg-white">
      <form onSubmit={handleSubmit} className="mb-5">
        <input
          type="text"
          placeholder="Enter your prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="p-2 w-72 border border-gray-300 rounded"
        />
        <button 
          type="submit" 
          className="p-2 ml-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Generate Image
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {img && <img src={img} alt="Generated AI Image" className="max-w-3xl h-auto flex " />}
    </div>
  );
}

export default Start;
