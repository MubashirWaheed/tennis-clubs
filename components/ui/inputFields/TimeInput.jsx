import React from "react";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const TimeInput = () => {
  return (
    <div className=" bg-[#fafbff] relative">
      <p className="text-grey fw700 f12 absolute top-[10px] left-[20px]">
        Time
      </p>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MobileTimePicker
          sx={styles}
          defaultValue={dayjs("2022-04-17T15:30")}
        />
      </LocalizationProvider>
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
