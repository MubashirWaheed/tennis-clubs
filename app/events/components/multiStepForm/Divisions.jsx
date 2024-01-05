"use client";
import InputField from "@/components/ui/inputFields/TextField";
import DropDownInput from "@/components/ui/inputFields/AutoComplete";
import NextButton from "@/components/ui/buttons/PrimaryButton";
import { useState } from "react";
import { Slider } from "@mui/material";
import Image from "next/image";

import { useFormContext } from "react-hook-form";
import DivisionDetails from "../../createevent/components/DivisionDetails";
import DivisionOptions from "../../createevent/components/DivisionOptions";
import { useFieldArray } from "react-hook-form";

const Divisions = ({ onNext }) => {
  const { getValues, control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "divisions",
  });

  // const [divisions, setDivisions] = useState(1);
  const [value, setValue] = useState([20, 37]);

  const [rangeValues, setRangeValues] = useState({
    range1Value: "",
    range2Value: "",
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleRangeChange = (event) => {
    const { id, value } = event.target;
    setRangeValues((prevRangeValues) => ({
      ...prevRangeValues,
      [id]: parseInt(value),
    }));
  };

  return (
    <section className="mt-[50px]">
      {fields.map((field, index) => {
        return (
          <div key={field.id}>
            <DivisionDetails
              id={`divisions.${index}.divisionName`}
              format={`divisions.${index}.format`}
              gender={`divisions.${index}.gender`}
              entryFee={`divisions.${index}.entryFee`}
            />
            <DivisionOptions
              maxPlayers={`divisions.${index}.maxPlayers`}
              officals={`divisions.${index}.officals`}
              coaching={`divisions.${index}.coaching`}
              drawType={`divisions.${index}.drawType`}
              formatType={`divisions.${index}.formatType`}
              value={value}
            />
          </div>
        );
      })}

      <div className="  flex gap-3 items-center justify-start">
        <button
          type="button"
          onClick={() =>
            append({
              divisionName: "",
              format: "",
              gender: "",
              entryFee: "",
            })
          }
          className="cursor-pointer flex items-center gap-[5px] py-[5px] pr-[5px]"
        >
          <div
            className=" flex items-center gap-[10px] border-green border-[1px]  p-[5px] rounded-md ml-[5px]"
            src="/add-icon.svg"
          >
            <Image
              src="/add-icon-green.svg"
              alt="add icon"
              width={20}
              height={20}
            />
          </div>
          <p className="text-darkPurple fw700">Add More Divisions</p>
        </button>
      </div>

      <div className="flex place-content-end">
        <NextButton size="small" onClick={onNext}>
          Next
        </NextButton>
      </div>
    </section>
  );
};
export default Divisions;
