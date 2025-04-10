import React from "react";
import GooeyNav from "./GooeyNav";
import { navitems } from "./DataFile";
import Authentication from "./Authentication";

function Navbar() {
  return (
    <div className="z-50 relative ">
      <div className="fixed w-full p-1 md:p-6 flex justify-center items-center z-10 bg-[rgba(3,7,18,0.5)] transition-colors duration-300">
        <GooeyNav
          items={navitems}
          animationTime={300}
          pCount={50}
          minDistance={20}
          maxDistance={42}
          maxRotate={75}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          timeVariance={300}
        />
        <Authentication />
      </div>
    </div>
  );
}

export default Navbar;
