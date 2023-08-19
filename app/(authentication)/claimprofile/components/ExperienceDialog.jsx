"use client";
import Checkbox from "@/components/ui/buttons/Checkbox";
import React, { useState } from "react";
import Button from "@/components/ui/buttons/PrimaryButton";
import Image from "next/image";

const experienceCheckboxes = [
  { label: "I don't currently play but would liek to start" },
  { label: "Social/Recreational Tennis (i.e tennis with friends casual hits" },
  { label: "Club Organized Leagues" },
  { label: "Adult Tournaments" },
  { label: "Adult Leagues (i.e Seasonal Leagues, FLex Leagues)" },
  { label: "Junior Tournaments" },
  { label: "High School" },
  { label: "College- Other" },
  { label: "College- D3" },
  { label: "College- D2" },
  { label: "College- D1" },
  { label: "Pro(ATP/WTA/PTT/ITF)" },
];

const playFrequencyRadio = [
  { label: "I'm not currently playing but would like to start" },
  { label: "A few times a year" },
  { label: "A few times a month" },
];
const matchesWithSetsPlayed = [
  { label: "I don't play matches" },
  { label: "1-5" },
  { label: "5-25" },
  { label: "26+" },
];

const ExperienceDialog = () => {
  const [checkboxValue, setCheckboxValue] = useState([]);

  const handleCheckBox = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCheckboxValue((prev) => [...prev, value]);
    } else {
      setCheckboxValue((pre) => {
        return [...pre.filter((skill) => skill !== value)];
      });
    }
  };

  return (
    <div className=" rounded-md bg-white pl-[30px] pr-[20px] sm:pr-[130px] my-[50px] py-[25px]">
      <p className="text-[#f0b536] uppercase fw700">GET STARTED</p>
      <h3 className="h3 mb-[35px] mt-[10px]">
        Tell us about your tennis experience
      </h3>
      <div>
        <p className="text-[#05192C] f16 fw700">
          What type or level of tennis have you played? (Select all that apply)
          *
        </p>
        <div className="mt-[20px]">
          {experienceCheckboxes.map(({ label }, index) => {
            return (
              <div key={index} className="py-[2px]">
                <Checkbox value={label} handleCheckboxChange={handleCheckBox} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-[30px]">
        <p className="text-[#05192C] f16 fw700 mb-[20px]">
          How often do you play? *
        </p>
        {playFrequencyRadio.map(({ label }, i) => {
          return (
            <div key={i} className="flex items-center mb-4">
              <input
                className="w-6 h-6 text-purple bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600"
                type="radio"
                name="flexRadioDefault"
                id={`radioDefault${i}`}
              />
              <label
                className=" ml-2 text-[14px] text-[#05192C]"
                htmlFor={`radioDefault${i}`}
              >
                {label}
              </label>
            </div>
          );
        })}
      </div>

      <div className="mt-[30px]">
        <p className="text-[#05192C] f16 fw700">
          Approximately how many matches of 2 or more sets have you played in
          your lifetime? Please include practice matches *
        </p>
        <div className="mt-[20px]">
          {matchesWithSetsPlayed.map(({ label }, i) => {
            return (
              <div key={i} className="flex items-center mb-4">
                <input
                  className="w-6 h-6 text-purple bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600"
                  type="radio"
                  name="setRadio"
                  id={`setRadio${i}`}
                />
                <label
                  className="ml-2 text-[14px]  text-[#05192C]"
                  htmlFor={`setRadio${i}`}
                >
                  {label}
                </label>
              </div>
            );
          })}
        </div>
      </div>

      {/* Age dropdown */}
      <div className="py-[10px] px-[10px]">
        <div className="bg-[#fafbff] rounded-xl">
          <label
            htmlFor="age"
            className="pb-[5px] pt-[13px] relative block mb-2 text-sm font-medium text-gray-900 "
          >
            <p className="text-[#828282] f13 pl-[20px]">
              What age did you start playing tennis? *
            </p>
            <select
              id="age"
              className="pl-[22px] lh18 cursor-pointer focus:ring-0 focus:outline-none  bg-none bg-[#fafbff]  outline-none  text-[#05192C] text-sm rounded-xl border-0 block w-full"
            >
              <option className="text-[#05192C]" value="14">
                14
              </option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
            </select>
            <div className="absolute sm:top-5 top-9 right-3 sm:right-6">
              <Image
                src="/dropdown.svg"
                width={24}
                height={24}
                alt="dropdown age"
              />
            </div>
          </label>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <Button>Next</Button>
      </div>
    </div>
  );
};

export default ExperienceDialog;
