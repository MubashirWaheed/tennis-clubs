import React from "react";
import dayjs from "dayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Controller, useFormContext } from "react-hook-form";
import utc from "dayjs/plugin/utc";

const DateInput = ({ name }) => {
  const { watch, control } = useFormContext();
  const watchedFormData = watch();

  // console.log("Form data while typing:", watchedFormData);

  const getDeateIgnoreTimezone = (date) =>
    date && date.getUTCHours() !== 0
      ? ((theDate) =>
          new Date(
            theDate.getTime() - theDate.getTimezoneOffset() * 60 * 1000
          ))(new Date(date))
      : date;

  return (
    <div>
      <div className="relative bg-[#fafbff] cursor-pointer  rounded-xl w-auto">
        <p className="absolute top-[10px] left-[7px]  text-grey fw700 f12 pl-[14px]">
          Date
        </p>
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDatePicker
                defaultValue={dayjs()}
                onChange={onChange}
                sx={styles}
              />
            </LocalizationProvider>
          )}
        />
      </div>
    </div>
  );
};

const styles = {
  "& .MuiInputBase-root": {
    marginTop: "5px",
    paddingTop: "25px",
    paddingBottom: "10px",
    paddingLeft: "10px",
    borderRadius: "12px",
    backgroundcolor: "green",
    cursor: "pointer",
  },
  "& .MuiInputBase-input": {
    paddingTop: "0px",
    outline: "none",
    backgroundColor: "#fafbff",
  },
};

export default DateInput;
