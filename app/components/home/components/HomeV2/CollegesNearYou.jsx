import React from "react";
import Image from "next/image";
import homeData from "../../homeData.json";

const CollegesNearYou = () => {
  const collegeLogos = {
    0: "/college1.png",
    1: "/college2.png",
    2: "/college3.png",
  };

  return (
    <section className="py-[40px] lg:py-[90px] w-[full] bg-[#fff]">
      <div className=" h-full w-full flex flex-col items-center justify-center">
        <div className="flex flex-col gap-2 lg:flex-row lg:gap-0 items-center justify-between w-full">
          <h2 className="text-[#13013c] h2 text-center lg:text-left">
            Colleges Near You
          </h2>

          <button className="text-[#027333] fw700 f16 lh24">View All</button>
        </div>
        <div className="border border-[#828282]/20 mt-[20px] w-full"></div>

        <div className="flex flex-col lg:flex-row gap-[14px] mt-[47px]">
          {homeData.collegesNearYou.map((college, index) => (
            <article
              key={index}
              className="p-[22px] bg-[#fff] rounded-[10px] shadow-lg"
            >
              <div className="flex items-center justify-center gap-[40px] mb-[13px]">
                <div className="flex flex-col gap-[6px]">
                  <p className="f28 text-[#13013c] w-[200px] font-sans fw700 lh28">
                    {college.universityName}
                  </p>
                  <p className="text-[#828282] f14 fw400 font-sans">
                    {college.location}
                  </p>
                </div>
                <div className="w-[70px] px-[7px] py-[10px]">
                  <Image
                    width={70}
                    height={70}
                    src={collegeLogos[index]}
                    alt=""
                    className="rounded-full"
                  />
                </div>
              </div>

              <div className="border border-[#828282]/20 w-full mt-[18px] mb-[28px]"></div>

              <div className="flex  items-center gap-[14px]">
                <div className="w-[100px] h-[55px] flex flex-col">
                  <p className="f14 fw400 text-[#828282] lh24">
                    {college.Power6}
                  </p>
                  <p className="f14 fw700 text-[#13013c] lh24">
                    {college.dash}
                  </p>
                </div>
                <div className="w-[100px] h-[55px] flex flex-col">
                  <p className="f14 fw400 text-[#828282] lh24">
                    {college.Division}
                  </p>
                  <p className="f14 fw700 text-[#13013c] lh24">{college.D1}</p>
                </div>
                <div className="w-[100px] h-[55px] flex flex-col">
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
      </div>
    </section>
  );
};

export default CollegesNearYou;
