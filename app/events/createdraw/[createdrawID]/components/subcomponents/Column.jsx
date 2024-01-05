"use client";

import { FormProvider, useForm } from "react-hook-form";
import DrawCard from "../DrawCard";
import { useEffect } from "react";

const Column = ({ secondRoundPlayers }) => {
  const methods = useForm();
  const watchedValuesColumn2 = methods.watch();
  // useEffect(() => {
  //   const testFunc = () => {
  //     // console.log("VALUES IN THE FORM: ", methods.getValues());
  //   };
  //   // testFunc();
  // }, [watchedValuesColumn2]);

  return (
    <div>
      <FormProvider {...methods}>
        <DrawCard
          id="1"
          showDefaultOption={false}
          playerOptions={secondRoundPlayers}
        />
        <DrawCard
          id="2"
          showDefaultOption={false}
          playerOptions={secondRoundPlayers}
        />
      </FormProvider>
    </div>
  );
};

export default Column;
