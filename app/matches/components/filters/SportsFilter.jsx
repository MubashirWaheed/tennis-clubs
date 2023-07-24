import ApplyButton from "@/components/ui/buttons/PrimaryButton";
import { useState } from "react";

export default function SportsFilter() {
  
  const [isTennisSelected, setTennisSelected] = useState(false);
  const [isBadmintonSelected, setBadmintonSelected] = useState(false);

  const options = [
    {
      label: "Tennis",
      value: "tennis",
      isChecked: isTennisSelected,
    },
    {
      label: "Badminton",
      value: "badminton",
      isChecked: isBadmintonSelected,
    },
  ];

  // Handler for checkbox changes
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    if (name === "tennis") {
      setTennisSelected(checked);
    } else if (name === "badminton") {
      setBadmintonSelected(checked);
    }
  };

  // Handler for the Apply button
  const handleApplyClick = (event) => {
        event.preventDefault();
  };

  // Handler for the Clear button
  const handleClearClick = () => {
    setTennisSelected(false);
    setBadmintonSelected(false);
  };
    return (
      <div className="w-[300px] lg:w-[400px] flex flex-col items-stretch gap-[20px]">
        <div className="w-full flex items-center justify-between">
          <h5 className="h5 text-[#13013C]">Sport</h5>
          <button
            onClick={handleClearClick}
            className="f14 fw700 lh30 text-[#13013C]"
          >
            Clear
          </button>
        </div>

        <form className="flex flex-col items-stretch gap-[40px]">
          <div className="flex flex-col items-stretch gap-[10px]">
            {options.map((option, index) => (
              <label key={index} className="f14 lh22 fw400 text-[#05192C] flex item-center gap-2">
                <input
                  type="checkbox"
                  name={option.value}
                  style={{ accentColor: "#3B2273" }}
                  checked={option.isChecked}
                  onChange={handleCheckboxChange}
                />
                {option.label}
              </label>
            ))}
          </div>
          <ApplyButton onClick={handleApplyClick}>Apply</ApplyButton>
        </form>
      </div>
    );
}