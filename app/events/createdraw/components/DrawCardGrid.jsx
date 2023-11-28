import React from "react";
import DrawCard from "./DrawCard";
import { FormProvider, useForm } from "react-hook-form";

const DrawCardGrid = () => {
  const methods = useForm();
  return (
    <>
      <FormProvider {...methods}>
        {/* Column 1 */}
        <div className="grow basis-1/3 bg-[#FAFBFF]">
          <div className="flex flex-col text-center my-[10px]">
            <p className="text-grey fw700 underline lh24">Set Location</p>
            <p className="text-grey fw700 underline lh24">Set Date & Time</p>
          </div>
          <DrawCard id="playername1" />
          <DrawCard id="playername2" />
        </div>
        {/* Column 2 */}
        <div className="grow basis-1/3 bg-[#FAFBFF]">
          <div className="flex flex-col text-center my-[10px]">
            <p className="text-grey fw700 underline lh24">Set Location</p>
            <p className="text-grey fw700 underline lh24">Set Date & Time</p>
          </div>
          <div>
            <DrawCard id="playername3" />
            <DrawCard id="playername4" />
          </div>
        </div>
      </FormProvider>
    </>
  );
};

export default DrawCardGrid;
