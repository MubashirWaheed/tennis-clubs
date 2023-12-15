"use client";
import React from "react";

const SortingPanel = () => {
  return (
    <div className="py-[10px] bg-white flex items-center justify-between px-[20px]">
      <div className="flex gap-2 items-center">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="w-5 h-5 cursor-pointer text-purple border-1 border-purple rounded-md focus:ring-0"
            //   checked
          />
          <span className="ml-[7px] text-grey">All</span>
        </label>
      </div>
      <p className="text-grey f14 fw700">Sort By MPR (High To Low)</p>
    </div>
  );
};

export default SortingPanel;
