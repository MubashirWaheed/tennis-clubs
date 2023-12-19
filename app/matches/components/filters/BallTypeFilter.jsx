"use client ";
import ApplyButton from "@/components/ui/buttons/PrimaryButton";
import { useState } from "react";

export default function BallTypeFilter() {
  const [isYellowBallChecked, setYellowBallChecked] = useState(false);
  const [isGreenBallChecked, setGreenBallChecked] = useState(false);
  const [isOrangeBallChecked, setOrangeBallChecked] = useState(false);
  const [isRedBallChecked, setRedBallChecked] = useState(false);
  const options = [
    {
      label: "Yellow Ball",
      value: "yellowBall",
      isChecked: isYellowBallChecked,
    },
    {
      label: "Green Ball",
      value: "greenBall",
      isChecked: isGreenBallChecked,
    },
    {
      label: "Orange Ball",
      value: "orangeBall",
      isChecked: isOrangeBallChecked,
    },
    {
      label: "Red Ball",
      value: "redBall",
      isChecked: isRedBallChecked,
    },
  ];

  // Handler for checkbox changes
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    switch (name) {
      case "yellowBall":
        setYellowBallChecked(checked);
        break;
      case "greenBall":
        setGreenBallChecked(checked);
        break;
      case "orangeBall":
        setOrangeBallChecked(checked);
        break;
      case "redBall":
        setRedBallChecked(checked);
        break;
      default:
        break;
    }
  };

  // Handler for the Apply button
  const handleApplyClick = (event) => {
    event.preventDefault();
  };

  // Handler for the Clear button
  const handleClearClick = () => {
    setYellowBallChecked(false);
    setGreenBallChecked(false);
    setOrangeBallChecked(false);
    setRedBallChecked(false);
  };
  return (
    <div className="w-[300px] lg:w-[400px] flex flex-col items-stretch gap-[20px]">
      <div className="w-full flex items-center justify-between">
        <h5 className="h5 text-[#13013C]">Ball Type</h5>
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
            <label
              key={index}
              className="f14 lh22 fw400 text-[#05192C] flex item-center gap-2"
            >
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
