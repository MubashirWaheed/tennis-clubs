import Image from "next/image";
import React from "react";

const Overlay = ({ children }) => {
  return (
    <div className=" bg-purple fixed z-100 bg-opacity-70 top-0 right-0 left-0 bottom-0">
      <div className="overflow-y-auto py-[30px] px-[20px] absolute right-0 bottom-0 bg-white h-full w-[360px] lg:w-[400px] lg:px-[40px]    z-50 opacity-[100%]">
        {children}
      </div>
    </div>
  );
};

export default Overlay;
