import React from "react";
import blueHeaderLine from "../../assets/blueHeaderLine.svg";
import Image from "next/image";
import ViewAll from "@/components/ui/buttons/PrimaryButton";

const MyClubs = () => {
  return (
    <section className="h-[376px] w-[full] flex flex-col justify-center items-center gap-[70px]">
      <div className="flex flex-col items-center gap-[15px]">
        <h2 className="text-[#13013C] h2 ">My clubs, teams and groups</h2>
        <Image src={blueHeaderLine} alt="blueHeaderLine" className="w-[full]" />
      </div>
      <ViewAll>View All</ViewAll>
    </section>
  );
};

export default MyClubs;
