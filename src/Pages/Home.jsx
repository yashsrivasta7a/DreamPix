import React from "react";
import GooeyNav from "../Components/GooeyNav";
import Aurora from "../Components/Aurora";
import { cn } from "../lib/lib";
import { navitems, items } from "../Components/DataFile";
import { BentoGrid, BentoGridItem } from "../Components/BentoGrid";
import TrueFocus from "../Components/TrueFocus";
import GetStarted from "../Pages/GetStarted"
import { Link } from "react-router";
import About from "./About";
import Authentication from "../Components/Authentication";

function Home() {

  return (
    <div >
      
      <div className="absolute top-0 z-0 w-full">
        <Aurora
          colorStops={["#A694FF", "#A694FF", "#311D79"]}
          blend={0.5}
          amplitude={8.0}
          speed={0.9}
        />
      </div>
      <div></div>
      <div className="bg-[#09091e] border-full rounded-3xl flex flex-col md:flex-row items-center justify-center min-h-screen gap-8 pr-4 md:pr-36 z-30 p-4 md:p-0">
        <BentoGrid className="max-w-full md:max-w-4xl mx-auto md:auto-rows-[20rem] z-10 pt-15">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              image={item.image}
              className={`${item.className} hover:scale-105 transition-transform duration-300 shadow-blue-400`}
            />
          ))}
        </BentoGrid>

        <TrueFocus
          sentence="Dream Pix"
          manualMode={false}
          blurAmount={5}
          borderColor="white"
          animationDuration={2}
          pauseBetweenAnimations={1}
        />


{/* 
<Link to="/image-generator" className="bg-blue-600 mt-4 md:mt-0 md:relative md:top-30 md:right-52 p-2 rounded text-">
          Generate Your Dream Pic
        </Link> */}
      
      </div>
< About />
      
      < GetStarted/>
    </div>
  );
}

export default Home;
