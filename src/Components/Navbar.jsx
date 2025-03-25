import React from "react";
import GooeyNav from "./GooeyNav";
import { navitems } from "./DataFile";
import Authentication from "./Authentication";

function Navbar() {
  return (
    <div className="z-50 relative">
      <div
        style={{
          height: "5rem",
          width: "100vw",
          position: "fixed",
          top: 0,
          left: 0,
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          zIndex: "10",
          padding: ".5rem",
          backgroundColor: "rgba(3, 7, 18, 0.5)",
          transition: "background-color 0.3s ease-in-out",
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
      <div className="z-20 top-4 flex justify-end pr-5 fixed right-0">
        <Authentication/>
      </div>
    </div>
  );
}

export default Navbar;
