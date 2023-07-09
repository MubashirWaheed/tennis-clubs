import React from "react";
import blueHeaderLine from "../../assets/blueHeaderLine.svg";
import Image from "next/image";
import College1 from "../../assets/College1.png";
import College2 from "../../assets/College2.png";
import College3 from "../../assets/College3.png";
import ViewAll from "@/components/ui/buttons/PrimaryButton";
import homeData from "../../homeData.json";

const CollegesNearYou = () => {
  const collegeLogos = {
    0: College1,
    1: College2,
    2: College3,
  };

  return (
    <section className="h-[680px] w-[full]">
      <div className="h-full w-full flex flex-col gap-[50px] items-center justify-center">
        <div className="flex flex-col items-center gap-[15px]">
          <h2 className="text-[#13013C] h2 ">Colleges Near You</h2>
          <Image
            src={blueHeaderLine}
            alt="blueHeaderLine"
            className="w-[full]"
          />
        </div>

        <div className="flex flex-row gap-[14px]">
          {homeData.collegesNearYou.map((college, index) => (
            <article
              key={index}
              className="p-[25px] bg-[#fff] rounded-[10px] shadow-lg"
            >
              <div className="flex items-center gap-[61px] mb-[13px]">
                <div className="flex flex-col gap-[6px]">
                  <p className="f28 text-[#13013c] w-[200px] font-sans fw700 lh28">
                    {college.universityName}
                  </p>
                  <p className="text-[#828282] f14 fw400 font-sans">
                    {college.location}
                  </p>
                </div>
                <Image
                  src={collegeLogos[index]}
                  alt="College1"
                  className="w-[70px] rounded-full"
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
