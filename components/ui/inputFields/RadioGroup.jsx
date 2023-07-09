"use client";
import {useState} from "react";
import RadioOption from "./RadioOption"

const RadioGroup = ({ direction, options, onChange, value, label }) => {
    
    const [selectedIndex, setSelectedIndex] = useState(value);

    const onSelect = (index) => {
        setSelectedIndex(index);
        onChange && onChange(index);
    }

    return (
        <div className="flex flex-col gap-[3px] w-full">
            <label className="w-full f14 lh22 fw700 text-[#13013C]">{label}</label>

            {/*Options */}
            <div className={`w-full flex ${direction === "column" && "gap-[10px]"}
                            ${direction === "row" && "gap-[15px] items-center"}`}>
                {options.map((option, index) => (
                    <RadioOption key={index} index={index} selectedIndex={selectedIndex} onSelect={(index)=>onSelect(index)}>
                        {option}
                    </RadioOption>
                ))}
            </div>
        </div>
    )
}

export default RadioGroup;