import AutoComplete from "@/components/ui/inputFields/AutoComplete";
import profileData from "../profileData.json";
import ResultCard from "./ResultCard";
import Image from "next/image";
import DropDown from "@/components/ui/inputFields/DropDown";

const gameOptions = ["doubles", "singles"];
const filterOption = ["option 1", "option 2"];

const Results = () => {
  return (
    <section>
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="w-[355px] flex flex-col gap-[30px] mb-[40px]">
          <div className="flex flex-col md:flex-row gap-[15px]">
            <DropDown label="Game Type" options={gameOptions} />
            <DropDown label="Filter Type" options={filterOption} />
          </div>
          <div>
            <p className="f16 fw700 lh24 text-[#828282]">W/L 37 - 15</p>
          </div>
        </div>
        <div>
          <div className="bg-[#fff] rounded-[15px] shadow-lg px-[27px] py-[31px] relative w-[380px] h-[110px]">
            <p className="f20 fw400 lh30 text-[#3B2273]">About</p>
            <p className="f16 fw700 lh28 text-[#828282]">Age : 20</p>
            <Image
              width={74}
              height={74}
              src="/age.svg"
              alt="Age"
              className="absolute bottom-0 right-0 w-[74px] h-[74px]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[55px] items-start">
        {profileData?.results?.map((result) => (
          <ResultCard key={result.id} result={result} />
        ))}
      </div>
    </section>
  );
};

export default Results;
