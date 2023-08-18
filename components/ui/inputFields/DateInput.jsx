import React from "react";
import dayjs from "dayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const DateInput = () => {
  return (
    <div>
      <div className="relative bg-[#fafbff] cursor-pointer  rounded-xl w-auto">
        <p className="absolute top-[10px] left-[7px]  text-grey fw700 f12 pl-[14px]">
          Date
        </p>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileDatePicker
            sx={styles}
            // slotProps={{ textField: { variant: "standard" } }}
            defaultValue={dayjs("2022-04-17")}
          />
        </LocalizationProvider>
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
