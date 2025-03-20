import React from "react";
import GooeyNav from "../Components/GooeyNav";
import Aurora from "../Components/Aurora";
import { cn } from "../lib/lib";
import { navitems, items } from "../Components/DataFile";
import { BentoGrid, BentoGridItem } from "../Components/BentoGrid";
import TrueFocus from "../Components/TrueFocus";

function Home() {
  return (
    <div>
      <div
  style={{
    height: "100px",
    width: "100vw",  
    position: "fixed",
    top: 0,           
    left: 0,          
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "100",
    padding: "1rem",
  }}
>
        <GooeyNav 
          items={navitems}
          animationTime={600}
          pCount={15}
          minDistance={20}
          maxDistance={42}
          maxRotate={75}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          timeVariance={300}
        />
      </div>
      <div className="absolute top-0 z-0 w-full">
        <Aurora
          colorStops={["#A694FF", "#A694FF", "#311D79"]}
          blend={0.5}
          amplitude={8.0}
          speed={0.9}
        />
      </div>
      <div></div>
      <div className="flex flex-row items-center justify-center min-h-screen gap-8 pl-36">
        <TrueFocus
          sentence="Dream Pix"
          manualMode={false}
          blurAmount={5}
          borderColor="white"
          animationDuration={2}
          pauseBetweenAnimations={1}
        />

        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] z-10 pt-15">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              image={item.image}
              className={item.className}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}

export default Home;
