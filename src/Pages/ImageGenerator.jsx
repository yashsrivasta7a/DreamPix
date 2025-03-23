import React, { useState } from "react";
import { fal } from "@fal-ai/client";
import { PlaceholdersAndVanishInput } from "../Components/placeholders-and-vanish-input";

fal.config({ credentials: "9911b764-1393-499c-bf8b-6280ddb637c8:8300246ea75936d679202e2ca82b5bb2" });

const placeholders = [
  "Imagine a futuristic cyberpunk city with neon lights",
  "Describe a majestic dragon soaring over a castle",
  "Create an ultra-realistic portrait of a medieval warrior",
  "Visualize a dreamlike floating island with waterfalls",
  "Design a sci-fi spaceship exploring a distant galaxy",
];

const ImageGenerator = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [logs, setLogs] = useState([]);
  const [prompt, setPrompt] = useState("");

  const generateImage = async (userPrompt) => {
    if (!userPrompt.trim()) return;
    setLoading(true);
    setLogs([]);
    setImageUrl(null);

    try {
      const result = await fal.subscribe("fal-ai/minimax-image", {
        input: {
          prompt: userPrompt,
          aspect_ratio: "1:1",
          num_images: 1,
        },
        logs: true,
        onQueueUpdate: (update) => {
          if (update.status === "IN_PROGRESS") {
            setLogs((prevLogs) => [...prevLogs, ...update.logs.map((log) => log.message)]);
          }
        },
      });
 
      const imageUrl = result.data?.images?.[0]?.url;

      if (imageUrl) {
        setImageUrl(imageUrl);
      } else {
        console.error("Error: No image URL returned from API.");
      }
    } catch (error) {
      console.error("Error generating image:", error);
    }
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateImage(prompt);
  };

  return (
    <div className="text-center mt-12 bg-[#09091e] pt-28">
      <div className="flex items-center justify-center flex-row">
        <div className="flex items-center justify-center pb-5">
          {loading && <p className="text-amber-50 font-bold p-60 bg-[#051d3d] rounded-4xl">Loading...</p>}
          {!loading && imageUrl && (
            <img
              key={imageUrl} // Forces React to update the image
              src={imageUrl}
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
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
