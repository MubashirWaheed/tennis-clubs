"use client";
import { useRef } from "react";
import matchesData from "./findMatches.json";
import Image from "next/image";
import FilterIcon from './assets/filter-icon.svg';
// MetaData for the SEO for this page...
export const metadata = {
  title: "All Matches . MPR",
  description: "This page consists of 9 filters and a list of matches.",
};

const ListedMatches = () => {
  const filterRef = useRef();

  const handleClickOnFilter = () => {};
  return (
    <section className="relative -top-[40px] flex flex-col gap-[50px] max-w-[1200px] mx-auto">
      <div className="bg-white rounded-lg shadow-lg h-[80px] w-full px-6 py-5 flex items-center gap-2">
        <div className="flex items-center justify-between flex-1">
          {matchesData?.filters?.map((filter, index) => (
            <button
              key={index}
              onClick={handleClickOnFilter}
              ref={filterRef}
              className="text-base text-[#3B2273] cursor-pointer font-semibold border border-[#3B2273] focus:bg-[#3B2273] focus:text-white bg-white rounded-lg px-3 py-2"
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="flex gap-[5px] items-center">
          <Image src={FilterIcon} alt="" />
          <button className="text-[#3B2273] text-base font-semibold cursor-pointer">Reset Filters</button>
        </div>
      </div>
      <div className="flex flex-col gap-[15px]"></div>
    </section>
  );
};

export default ListedMatches;
