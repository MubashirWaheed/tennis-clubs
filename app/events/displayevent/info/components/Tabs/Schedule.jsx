"use client";
import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import Image from "next/image";
import dayjs from "dayjs";
import { DatePicker, MobileDatePicker } from "@mui/x-date-pickers";

const buttons = ["All Facilities", "All Draws"];

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
        <div className="relative cursor-pointer">
          <Image
            className="absolute top-2 right-2 z-20"
            src="/dropdown.svg"
            width={20}
            height={20}
            alt="dropdown"
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDatePicker sx={styles} defaultValue={dayjs("2022-04-17")} />
          </LocalizationProvider>
        </div>
        {buttons.map((item, i) => {
          return (
            <button
              key={i}
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
    </div>
  );
};
const styles = {
  "& .MuiInputBase-root": {
    width: "170px",
    cursor: "pointer",
    color: "#3B2273",
    border: "none",
    outline: "none",
  },
  "& .MuiInputBase-input": {
    cursor: "pointer",
    borderRadius: "10px",
    border: "1px solid #3B2273",
    paddingTop: "7px",
    paddingBottom: "7px",
    outline: "none",
    backgroundColor: "white",
  },
};

export default Schedule;
