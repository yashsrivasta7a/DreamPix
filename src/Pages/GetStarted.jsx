import React from "react";
import { PlaceholdersAndVanishInput } from "../Components/placeholders-and-vanish-input";
import { useNavigate } from "react-router";

function GetStarted() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/about");
  };

  const placeholders = [
    "Imagine a futuristic cyberpunk city with neon lights",
    "Describe a majestic dragon soaring over a castle",
    "Create an ultra-realistic portrait of a medieval warrior",
    "Visualize a dreamlike floating island with waterfalls",
    "Design a sci-fi spaceship exploring a distant galaxy",
  ];

  return (
    <div className="flex items-center justify-center gap-20 bg-[#09091e] p-56">
      <div>
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onclick={handleSubmit}
        />
      </div>
      <div>
        <h1 className="text-4xl font-bold">
          <span className="text-white">Let's Get</span>{" "}
          <span className="text-blue-500"> Started ?</span> 
        </h1>
      </div>
    </div>
  );
}

export default GetStarted;
