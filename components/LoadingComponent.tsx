import React from "react";

const LoadingComponent = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-[#000000e8] z-50
 "
    >
      <div className="text-xl tracking-wide font-bold animate-pulse text-white ">
        DIGO
      </div>
    </div>
  );
};

export default LoadingComponent;
