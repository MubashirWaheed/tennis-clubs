import React from "react";
import Image from "next/image";

import ViewAll from "@/components/ui/buttons/PrimaryButton";
import homeData from "../../homeData.json";

const CollegesNearYou = () => {
  
  const collegeLogos = {
    0: "/college1.png",
    1: "/college2.png",
    2: "/college3.png",
  };

  return (
    <section className="w-[full]">
      <div className="py-[20px] md:py-[40px] lg:py-[90px] px-2 lg:px-0 w-full max-w-[1170px] mx-auto flex flex-col gap-[50px] items-center justify-center">
        <div className="flex flex-col items-center gap-[15px]">
          <h2 className="text-[#13013C] h2 ">Colleges Near You</h2>
          <Image
            width={119}
            height={20}
            src="/blueHeaderLine.svg"
            alt="blueHeaderLine"
            className="w-[119px] h-[20px]"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-[14px]">
          {homeData.collegesNearYou.map((college, index) => (
            <article
              key={index}
              className="p-[10px] lg:p-[25px] bg-[#fff] rounded-[10px] shadow-lg"
            >
              <div className="flex items-center lg:gap-[61px] mb-[13px]">
                <div className="flex flex-col gap-[6px]">
                  <p className="f28 text-[#13013c] lg:w-[200px] font-sans fw700 lh28">
                    {college.universityName}
                  </p>
                  <p className="text-[#828282] f14 fw400 font-sans">
                    {college.location}
                  </p>
                </div>
                <Image
                  width={70}
                  height={70}
                  src={collegeLogos[index]}
                  alt="College1"
                  className="w-[70px] h-[70px] rounded-full"
                />
              </div>

              <div className="border border-[#828282]/20 w-full mt-[18px] mb-[28px]"></div>

              <div className="flex  items-center gap-[14px]">
                <div className="w-[110px] h-[55px] flex flex-col">
                  <p className="f14 fw400 text-[#828282] lh24">
                    {college.Power6}
                  </p>
                  <p className="f14 fw700 text-[#13013c] lh24">
                    {college.dash}
                  </p>
                </div>
                <div className="w-[110px] h-[55px] flex flex-col">
                  <p className="f14 fw400 text-[#828282] lh24">
                    {college.Division}
                  </p>
                  <p className="f14 fw700 text-[#13013c] lh24">{college.D1}</p>
                </div>
                <div className="w-[110px] h-[55px] flex flex-col">
                  <p className="f14 fw400 text-[#828282] lh24">
                    {college.League}
                  </p>
                  <p className="f14 fw700 text-[#13013c] lh24">
                    {college.Pac12}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <ViewAll>View All</ViewAll>
      </div>
    </section>
  );
};

export default CollegesNearYou;
