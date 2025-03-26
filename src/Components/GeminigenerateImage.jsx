import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
<<<<<<< HEAD
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_NERATIVE_AI_KEY || "");
=======
const genAI = new GoogleGenerativeAI(process.env.VITE_NERATIVE_AI_KEY || "");
>>>>>>> bafe77d6a7bdb4f4f64e09c8edb84d30ad4e6d13
import { PlaceholdersAndVanishInput } from "./placeholders-and-vanish-input"

async function generateImage(contents, setImg, setLoading) {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp-image-generation",
    generationConfig: {
      responseModalities: ["Text", "Image"],
    },
  });

  try {
    setLoading(true);
    const response = await model.generateContent(
      "can you create best image of HD art of size" + contents
    );
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
  const [prompt, setPrompt] = useState("");
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);

  const placeholders = [
    "Imagine a futuristic cyberpunk city with neon lights",
    "Describe a majestic dragon soaring over a castle",
    "Create an ultra-realistic portrait of a medieval warrior",
    "Visualize a dreamlike floating island with waterfalls",
    "Design a sci-fi spaceship exploring a distant galaxy",
  ];
  

  const handleSubmit = (e) => {
    e.preventDefault();
    generateImage(prompt, setImg, setLoading);
  };

  return (
    <div className="text-center mt-12 bg-[#09091e] pt-28">
      <div className="flex items-center justify-center flex-row">
        <div className="flex items-center justify-center pb-5 ">
        {loading && <p className="text-amber-50 font-bold p-60 bg-[#051d3d] rounded-4xl ">Loading...</p>}
          {!loading && img && (
            <img
              src={img}
              alt="Generated AI Image"
              className="w-md h-xl rounded-4xl shadow-md shadow-blue-600" 
            />
          )}
        </div>
        <div className="p-11">  
        <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={(e) => setPrompt(e.target.value)}
        onSubmit={handleSubmit}
      />
          {/* <form onSubmit={handleSubmit} className="mb-5">
            <input
              type="text"
              placeholder="Enter your prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="p-3 w-72 border border-gray-700 rounded text-[#3b495b]"
            />
            <button
              type="submit"
              className="p-3 ml-2 bg-blue-600 text-blue-950 rounded hover:bg-blue-800 hover:text-amber-100"
            >
              Generate Image
            </button>
          </form> */}
        </div>
      </div>
       
    </div>
  );
}

export default Start;
