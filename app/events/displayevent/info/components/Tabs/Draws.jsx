"use client";
import RadioGroup from "@/components/ui/inputFields/RadioGroup";
import ApplyButton from "@/components/ui/buttons/PrimaryButton";
import InfoConfig from "../../InfoConfig";
import Image from "next/image";
import { useState } from "react";
import Standings from "../Standings";
import Round16 from "../Round16";
import UnpublishedDrawsView from "../UnpublishedDrawsView";

const options = [
  { label: "single-elimination draw", value: "single-elimination draw" },
  { label: "round-robin draw", value: "round-robin draw" },
  { label: "Round-robin draw", value: "Round-robin draw" },
  { label: "Compass draw", value: "Compass draw" },
  { label: "Olympic draw", value: "Olympic draw" },
  { label: "Qualifying draw", value: "Qualifying draw" },
];
const buttons = [
  "Standings",
  "Round of 32",
  "Round of 16",
  "Quarterfinals",
  "Semifinals",
];
const Draws = () => {
  const [selectedRound, setSelectedRound] = useState("Standings");
  const [drawAvailable, setDrawAvailable] = useState(false);

  const Filters = InfoConfig();

  const handleRoundClick = (round) => {
    setSelectedRound(round);
  };

  const handleApplyClick = (event) => {
    event.preventDefault();
  };

  const renderContent = () => {
    if (selectedRound && selectedRound == "Standings") {
      return <Standings />;
    } else if (selectedRound && selectedRound == "Round of 32") {
      return <div>Round of 32</div>;
    } else if (selectedRound && selectedRound == "Round of 16") {
      return drawAvailable ? <Round16 /> : <UnpublishedDrawsView />;
    } else if (selectedRound && selectedRound == "Quarterfinals") {
      return <div>Quaterfinal</div>;
    }
  };

  return (
    <>
      <div>
        {/* Filters */}
        <div className=" flex justify-between items-center">
          <div className="flex gap-4 basis-1.5/2 md:basis-1.1/2 items-center justify-center w-full ">
            {Filters?.map((filter, i) => {
              return (
                <div key={i} className="relative w-full">
                  <button
                    onClick={filter.openFilter}
                    className=" f16 md:f24 px-[5px] md:px-[10px]  flex items-center justify-between w-full text-base text-[#3B2273] cursor-pointer font-semibold border border-[#3B2273]  bg-white rounded-lg  py-2"
                  >
                    {filter.filterTitle}
                    <Image
                      className=" "
                      alt="dropdown"
                      src="/dropdown.svg"
                      width={25}
                      height={25}
                    />
                  </button>
                  {filter.isFilterOpen && (
                    <>
                      <div className="ml-[20px] z-10 absolute lg:top-[70px] top-[58px] -left-[20px] lg:p-[30px] p-[5px] bg-white shadow-xl border-t-[3px] border-[#3B2273] rounded-[10px]">
                        {filter.filterTitle === "Draw Type" && (
                          <div className=" w-[150px] md:w-[200px] lg:w-[300px]">
                            <form className="flex w-full flex-col">
                              <RadioGroup
                                direction="column"
                                options={options}
                              />
                              <ApplyButton
                                size="small"
                                className="mt-[50px]"
                                onClick={handleApplyClick}
                              >
                                Apply
                              </ApplyButton>
                            </form>
                          </div>
                        )}
                      </div>
                      <Image
                        src="/pointer.svg"
                        height={21}
                        width={18}
                        alt="Pointer Icon"
                        className="absolute lg:top-[53px] top-[40px] z-10 left-7 w-[18px] h-[21px]"
                      />
                    </>
                  )}
                </div>
              );
            })}
            <div className="w-full">
              <button className="px-[10px] w-full flex items-center justify-between text-base text-[#3B2273] cursor-pointer font-semibold border border-[#3B2273]  bg-white rounded-lg  py-2">
                scoring
                <Image
                  className=" "
                  alt="dropdown"
                  src="/dropdown.svg"
                  width={25}
                  height={25}
                />
              </button>
            </div>
          </div>
          <div className="flex basis-1/2  place-content-end">
            <button className="bg-[#3B2273] px-[20px] flex gap-2 text-white rounded-lg items-center py-[10px]">
              <Image
                src="/printer.svg"
                width={20}
                height={20}
                alt="print button"
              />
              Print
            </button>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex flex-col">
          <div className="flex gap-3 mt-8 flex-wrap items-center justify-center md:justify-start">
            {buttons.map((round, i) => {
              return (
                <div key={i}>
                  <button
                    onClick={() => handleRoundClick(round)}
                    className="fw700 border-purple border-2 rounded-lg px-4 md:px-6 py-2 my-1 bg-white text-purple focus:bg-purple focus:text-white"
                  >
                    {round}
                  </button>
                </div>
              );
            })}
          </div>
          {renderContent()}
        </div>
      </div>
    </>
  );
};

export default Draws;
