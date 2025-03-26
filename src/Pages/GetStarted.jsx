import React from "react";
import { PlaceholdersAndVanishInput } from "../Components/placeholders-and-vanish-input";
import { useNavigate } from "react-router";
import ImageGenerator from "./ImageGenerator";

function GetStarted() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    generateImage(prompt, setImg, setLoading);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const placeholders = [
    "Imagine a futuristic cyberpunk city with neon lights",
    "Describe a majestic dragon soaring over a castle",
    "Create an ultra-realistic portrait of a medieval warrior",
    "Visualize a dreamlike floating island with waterfalls",
    "Design a sci-fi spaceship exploring a distant galaxy",
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-[#09091e] pt-16">
      <div>
        <h1 className="text-4xl font-bold">
          <span className="text-white">Let's Get</span>{" "}
          <span className="text-blue-500"> Started ?</span> 
        </h1>
      </div>
      <div className="p-0 m-0">
     <ImageGenerator/>
      </div>
    </div>
  );
}

export default GetStarted;
