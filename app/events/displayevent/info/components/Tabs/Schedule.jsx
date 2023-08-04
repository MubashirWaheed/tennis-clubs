"use client";
import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import Image from "next/image";
import dayjs from "dayjs";

const buttons = ["Date", "All Facilities", "All Draws"];

const Schedule = () => {
  const today = dayjs();
  const [date, setDate] = useState(today);
  const [buttonClicked, setButtonClicked] = useState(null);

  const handleButton = (buttonName) => {
    setButtonClicked((prevButton) =>
      prevButton === buttonName ? null : buttonName
    );
  };

  return (
    <div className="relative">
      <div className="flex gap-4 justify-start items-center mb-[50px]">
        {buttons.map((item) => {
          return (
            <button
              onClick={() => handleButton(item)}
              className="flex fw400 f16 justify-between  text-purple border-[1px] rounded-lg border-purple pl-[30px] pr-[10px] py-[5px] "
            >
              {item}
              <Image
                className="ml-[20px]"
                src="/dropdown.svg"
                width={20}
                height={20}
                alt="dropdown"
              />
            </button>
          );
        })}
      </div>
      {buttonClicked && buttonClicked === "Date" && (
        <div className="z-10 bg-white shadow-lg absolute top-[40px] ">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              value={date}
              onChange={(newValue) => setDate(newValue)}
            />
          </LocalizationProvider>
        </div>
      )}
    </div>
  );
};

export default Schedule;
