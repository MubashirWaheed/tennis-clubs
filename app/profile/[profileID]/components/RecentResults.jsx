"use client";
import Image from "next/image";
import profileData from "../profileData.json";
import { useProfileStore } from "@/hooks/useProfileStore";

export default function RecentResults() {
  const { profile } = useProfileStore();
  return (
    <div className="flex flex-col items-center lg:items-start">
      <h3 className="h3 text-[#13013c]">Recent Results</h3>

      <div className="flex flex-col gap-[10px] lg:flex-row lg:gap-[22px]">
        <div className="flex flex-col gap-[12px] lg:gap-[14px] lg:flex-row mt-[6px]">
          {profileData.overview.recentResults.map((result, index) => (
            <article
              key={index}
              className="w-[350px] p-[10px] lg:py-[27px] lg:px-[24px] shadow-lg relative"
            >
              <p className="f16 fw400 lh22 text-[#828282] mb-[16px]">
                {result.dateAndTime}
              </p>

              <div className="w-full flex items-center justify-between">
                <div className="flex flex-col flex-1">
                  <div className="flex items-center gap-2">
                    <Image
                      width={20}
                      height={15}
                      src="/France.svg"
                      alt="France"
                      className="w-[20px] h-[15px]"
                    />
                    <p className="flex-1 f18 fw700 lh30 text-[#13013c]">
                      {result.team1.player1}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      width={20}
                      height={15}
                      src="/France.svg"
                      alt="France"
                      className="w-[20px] h-[15px]"
                    />
                    <p className="f18 fw700 lh30 text-[#13013c]">
                      {result.team1.player2}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-[2px]">
                  <p className="f20 fw700 lh30 text-[#828282]">2</p>
                  <Image
                    width={11}
                    height={20}
                    src="/Arrow.svg"
                    alt="Arrow"
                    className="absolute right-0 w-[11px] h-[20px]"
                  />
                </div>
              </div>
              <div className="border border-[#828282]/20 mt-[16px] mb-[6px]"></div>
              <div className="w-full flex items-center justify-between">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <Image
                      width={20}
                      height={15}
                      src="/France.svg"
                      alt="France"
                      className="w-[20px] h-[15px]"
                    />
                    <p className="flex-1 f18 fw700 lh30 text-[#13013c]">
                      {result.team1.player1}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image
                      width={20}
                      height={15}
                      src="/France.svg"
                      alt="France"
                      className="w-[20px] h-[15px]"
                    />
                    <p className="f18 fw700 lh30 text-[#13013c]">
                      {result.team1.player2}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-[2px] ">
                  <p className="f20 fw700 lh30 text-[#828282]">2</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-[14px]">
                <p className="f16 lh22 fw700 text-[#828282]">Doubles</p>
                <Image
                  width={23}
                  height={20}
                  src="/Logo.svg"
                  alt="Logo"
                  className="w-[23px] h-[20px]"
                />
              </div>
            </article>
          ))}
        </div>

        {/* Update age */}
        <div className="bg-[#fff] rounded-[15px] shadow-lg px-[27px] py-[31px] relative w-[380px] h-[110px]">
          <p className="f20 fw400 lh30 text-[#3B2273]">About</p>
          <p className="f16 fw700 lh28 text-[#828282]">Age : 20</p>
          <Image
            width={74}
            height={74}
            src="/age.svg"
            alt="Age"
            className="absolute bottom-0 right-0 h-[74px] w-[74px]"
          />
        </div>
      </div>
    </div>
  );
}
