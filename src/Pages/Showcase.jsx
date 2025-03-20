import React from "react";
import { items } from "../Components/DataFile";
import { BentoGrid, BentoGridItem } from "../Components/BentoGrid";
import TrueFocus from "../Components/TrueFocus";

function Showcase() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8">
      <TrueFocus
        sentence="Dream Pix"
        manualMode={false}
        blurAmount={5}
        borderColor="white"
        animationDuration={2}
        pauseBetweenAnimations={1}
      />

      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
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
  );
}

export default Showcase;
