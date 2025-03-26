import React, { useEffect } from "react";
import DecryptedText from "../Components/DecryptedText";

function About() {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const element = document.querySelector(".hover-move");
      const rect = element.getBoundingClientRect();
      const offsetX = (event.clientX - rect.left) / rect.width - 0.5;
      const offsetY = (event.clientY - rect.top) / rect.height - 0.5;
      element.style.transform = `translate(${offsetX * 10}px, ${offsetY * 10}px)`;
    };

    const element = document.querySelector(".hover-move");
    element.addEventListener("mousemove", handleMouseMove);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center pt-36 pb-36 justify-center gap-20 p-4 ">
      <div className="flex flex-col items-center text-end">
        <div className="w-max hover-move">
          <h1 className="text-amber-50 text-3xl font-bold self-end">WHAT</h1>
          <h1 className="text-6xl text-blue-400 font-extrabold self-center">
            DREAM PIX
          </h1>
          <h1 className="text-amber-50 text-3xl font-bold self-end">
            IS ABOUT
          </h1>
        </div>
      </div>
      <div className="text-white w-full md:w-3xl text-left bg-[#051d3d] p-8 rounded-4xl">
        <div style={{fontSize: "1.2rem" , lineHeight: "1.8rem" , fontWeight:"" ,   }}>
          <DecryptedText
            text="UNLEASH YOUR CREATIVITY WITH OUR AI-POWERED IMAGE GENERATOR!, YOU CAN CREATE UNIQUE, HIGH-QUALITY IMAGES FROM SIMPLE TEXT PROMPTS. EASILY STORE YOUR CREATIONS IN THE CLOUD, ORGANIZE THEM INTO COLLECTIONS, AND ACCESS THEM ANYTIME. WHETHER YOU'RE AN ARTIST, DESIGNER, OR JUST EXPLORING AI ART, OUR PLATFORM MAKES GENERATING, SAVING, AND SHARING IMAGES EFFORTLESS ! "
            animateOn="view" 
            revealDirection="center"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
