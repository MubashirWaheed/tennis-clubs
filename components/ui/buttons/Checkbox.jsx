"use client";
import React, { useState } from "react";

const Checkbox = ({ value, handleCheckBox }) => {
  return (
    <label class="text-[#05192C] text-[14px] fw400 inline-flex items-center">
      <input
        type="checkbox"
        class={`w-[25px] h-[25px] mr-[10px] cursor-pointer text-purple border-1 border-purple rounded-md focus:ring-0`}
        //   checked
        name={value}
        value={value}
        onChange={handleCheckBox}
      />
      {value}
    </label>
  );
};

export default Checkbox;
