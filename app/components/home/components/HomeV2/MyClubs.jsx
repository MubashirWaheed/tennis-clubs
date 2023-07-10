import React from "react";

const MyClubs = () => {
  return (
    <section className="w-[full] py-[90px]">
      <div className=" h-full w-full flex flex-col  items-center justify-center">
        <div className="flex flex-row items-center justify-between w-full">
          <h2 className="text-[#13013c] h2 "> My clubs, teams and groups</h2>
          <button className="text-[#027333] fw700 f16 lh24">View All</button>
        </div>
        <div className="border border-[#828282]/20 mt-[20px] w-full"></div>
      </div>
    </section>
  );
};

export default MyClubs;
