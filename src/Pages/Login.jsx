import React from "react";
import Authentication from "../Components/Authentication";
import Aurora from "../Components/Aurora";
import Lightning from '../Components/lightning'
function Login() {
  return (
    <div className="bg-[#09091e]">
      <div className="flex justify-center items-center h-dvh relative flex-col">
        <div className="z-50 relative">
          <Authentication/>
        </div>
        <div className="w-full h-full z-0 absolute opacity-50 ">
          <Aurora colorStops={["#A694FF", "#A694FF", "#311D79"]}
          blend={0.5}
          amplitude={8.0}
          speed={0.9} />
        </div>
      </div>
    </div>
  );
}

export default Login;
