"use client";
import { useState } from "react";
import ApplyButton from "@/components/ui/buttons/PrimaryButton";

const EventSeriesFilter = () => {
  // State to track checkbox values
  const [isCollegeCampusJuniorsSelected, setCollegeCampusJuniorsSelected] =
    useState(false);
  const [isCollegeCircuitsSelected, setCollegeCircuitsSelected] =
    useState(false);
  const [isJuniorCircuitsSelected, setJuniorCircuitsSelected] = useState(false);
  const [isJuniorRegionalsSelected, setJuniorRegionalsSelected] =
    useState(false);
  const [isPttWildcardEventSelected, setPttWildcardEventSelected] =
    useState(false);
  const [isUtrProTennisTourSelected, setUtrProTennisTourSelected] =
    useState(false);
  const options = [
    {
      label: "College Campus for Juniors",
      value: "collegeCampusJuniors",
      isChecked: isCollegeCampusJuniorsSelected,
    },
    {
      label: "College Circuits",
      value: "collegeCircuits",
      isChecked: isCollegeCircuitsSelected,
    },
    {
      label: "Junior Circuits",
      value: "juniorCircuits",
      isChecked: isJuniorCircuitsSelected,
    },
    {
      label: "Junior Regionals",
      value: "juniorRegionals",
      isChecked: isJuniorRegionalsSelected,
    },
    {
      label: "PTT Wildcard Event",
      value: "pttWildcardEvent",
      isChecked: isPttWildcardEventSelected,
    },
    {
      label: "UTR Pro Tennis Tour",
      value: "utrProTennisTour",
      isChecked: isUtrProTennisTourSelected,
    },
  ];
  // Handler for checkbox changes
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    switch (name) {
      case "collegeCampusJuniors":
        setCollegeCampusJuniorsSelected(checked);
        break;
      case "collegeCircuits":
        setCollegeCircuitsSelected(checked);
        break;
      case "juniorCircuits":
        setJuniorCircuitsSelected(checked);
        break;
      case "juniorRegionals":
        setJuniorRegionalsSelected(checked);
        break;
      case "pttWildcardEvent":
        setPttWildcardEventSelected(checked);
        break;
      case "utrProTennisTour":
        setUtrProTennisTourSelected(checked);
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
    setCollegeCampusJuniorsSelected(false);
    setCollegeCircuitsSelected(false);
    setJuniorCircuitsSelected(false);
    setJuniorRegionalsSelected(false);
    setPttWildcardEventSelected(false);
    setUtrProTennisTourSelected(false);
  };

  return (
    <div className="w-[300px] lg:w-[400px] flex flex-col items-stretch gap-[20px]">
      <div className="w-full flex items-center justify-between">
        <h5 className="h5 text-[#13013C]">Events Series</h5>
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
};

export default EventSeriesFilter;
