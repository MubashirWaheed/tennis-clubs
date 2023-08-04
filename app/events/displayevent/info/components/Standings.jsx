import React from "react";

const Standings = () => {
  return (
    <div>
      <div className=" flex bg-yellow-200 ">
        <p className="md:basis-[23%] basis-[15%]  grow bg-red-200">Name</p>
        <p className="md:basis-[15%] basis-[10%] grow">UTR</p>
        <p className="basis-[10%] grow px-[5px]">Matches</p>
        <p className="basis-[10%] grow px-[5px]">Record</p>
        <p className="basis-[10%] grow px-[5px]">Sets</p>
        <p className="basis-[10%] grow">Games</p>
      </div>
    </div>
  );
};

export default Standings;
