"use client";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import DrawCard from "../DrawCard";

const AutoFillDraw = ({ playerPairs }) => {
  const methods = useForm();
  return (
    <div>
      <FormProvider {...methods}>
        {playerPairs?.map((pair, index) => {
          return (
            <DrawCard
              showDefaultOption={false}
              key={index}
              id={index}
              playerOptions={pair}
            />
          );
        })}
      </FormProvider>
    </div>
  );
};

export default AutoFillDraw;
