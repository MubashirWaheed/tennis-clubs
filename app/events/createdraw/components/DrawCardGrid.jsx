import React from "react";
import DrawCard from "./DrawCard";
import { FormProvider, useForm } from "react-hook-form";

const DrawCardGrid = ({ drawArray }) => {
  console.log("drawArray in draw grid : ", drawArray);
  const methods = useForm();
  const column1 = drawArray?.slice(0, Math.ceil(drawArray.length / 2));
  const column2 = drawArray?.slice(Math.ceil(drawArray.length / 2));
  return (
    <>
      <FormProvider {...methods}>
        {/* Column 1 */}
        <div className="grow basis-1/3 bg-[#FAFBFF]">
          <div className="flex flex-col text-center my-[10px]">
            <p className="text-grey fw700 underline lh24">Set Location</p>
            <p className="text-grey fw700 underline lh24">Set Date & Time</p>
          </div>
          {column1?.map((player, index) => (
            <DrawCard key={`player-${index}`} player={player} />
          ))}
          {/* <DrawCard id="playername1" />
          <DrawCard id="playername2" /> */}
        </div>
        {/* Column 2 */}
        <div className="grow basis-1/3 bg-[#FAFBFF]">
          <div className="flex flex-col text-center my-[10px]">
            <p className="text-grey fw700 underline lh24">Set Location</p>
            <p className="text-grey fw700 underline lh24">Set Date & Time</p>
          </div>
          <div>
            {column2?.map((player, index) => (
              <DrawCard
                key={`player-${index + column1.length}`}
                player={player}
              />
            ))}
            {/* <DrawCard id="playername3" />
            <DrawCard id="playername4" /> */}
          </div>
        </div>
      </FormProvider>
    </>
  );
};

export default DrawCardGrid;
