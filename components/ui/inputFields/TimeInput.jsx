import React from "react";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Controller, useFormContext } from "react-hook-form";
import utc from "dayjs/plugin/utc";
import tz from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(tz);

const TimeInput = ({ name }) => {
  const { watch, control } = useFormContext();
  const timeZone = dayjs.tz.guess();

  return (
    <div className=" bg-[#fafbff] relative">
      <p className="text-grey fw700 f12 absolute top-[10px] left-[20px]">
        Time
      </p>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => {
          console.log("Value from React Hook Form:", value);
          return (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileTimePicker
                sx={styles}
                defaultValue={dayjs()}
                onChange={onChange}
              />
            </LocalizationProvider>
          );
        }}
      />
    </div>
  );
};

export default TimeInput;

const styles = {
  "& .MuiInputBase-root": {
    marginTop: "5px",
    paddingTop: "25px",
    paddingBottom: "10px",
    borderRadius: "12px",
    paddingLeft: "10px",
    cursor: "pointer",
  },
  "& .MuiInputBase-input": {
    backgroundColor: "#fafbff",
    paddingTop: "0px",
    // fontSize: "15px",
    // paddingTop: "10px",
  },
};
