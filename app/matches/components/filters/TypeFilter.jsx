import { useState } from "react";
import ApplyButton from "@/components/ui/buttons/PrimaryButton";

const TypeFilter = () => {
  // State to track checkbox values
  const [isTournament, setTournament] =useState(false);
  const [isCamp, setCamp] =useState(false);
  const [isClinic, setClinic] = useState(false);
  const [isMatchPlay, setMatchPlay] =useState(false);
  const [isdualMatch, setdualMatch] = useState(false);
  const [isnonTennisEventOther, setnonTennisEventOther] = useState(false);
  const [isutrFlexLeague, setutrFlexLeague] = useState(false);
  const [isutrTeamTennis, setutrTeamTennis] = useState(false);
  const [isteamMatch, setteamMatch] = useState(false);
  const [ispaidHit, setpaidHit] = useState(false);
  const [isplayerCreatedPlay, setplayerCreatedPlay] = useState(false);

  const options = [
    {
      label: "Tournament",
      value: "tournament",
      isChecked: isTournament,
    },
    {
      label: "Camp",
      value: "camp",
      isChecked: isCamp,
    },
    {
      label: "Clinic",
      value: "clinic",
      isChecked: isClinic,
    },
    {
      label: "Match Play",
      value: "matchPlay",
      isChecked: isMatchPlay,
    },
    {
      label: "Dual Match",
      value: "dualMatch",
      isChecked: isdualMatch,
    },
    {
      label: "Non-tennis Event/Other",
      value: "nonTennisEventOther",
      isChecked: isnonTennisEventOther,
    },
    {
      label: "UTR Flex League",
      value: "utrFlexLeague",
      isChecked: isutrFlexLeague,
    },
    {
      label: "UTR Team Tennis",
      value: "utrTeamTennis",
      isChecked: isutrTeamTennis,
    },
    {
      label: "Team Match",
      value: "teamMatch",
      isChecked: isteamMatch,
    },
    {
      label: "Paid Hit",
      value: "paidHit",
      isChecked: ispaidHit,
    },
    {
      label: "Player Created Play",
      value: "playerCreatedPlay",
      isChecked: isplayerCreatedPlay,
    },
  ];
  // Handler for checkbox changes
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    switch (name) {
      case "tournament":
        setTournament(checked);
        break;
      case "camp":
        setCamp(checked);
        break;
      case "clinic":
        setClinic(checked);
        break;
      case "matchPlay":
        setMatchPlay(checked);
        break;
      case "dualMatch":
        setdualMatch(checked);
        break;
      case "nonTennisEventOther":
        setnonTennisEventOther(checked);
        break;
      case "utrFlexLeague":
        setutrFlexLeague(checked);
        break;
      case "utrTeamTennis":
        setutrTeamTennis(checked);
        break;
      case "utrProTennisTour":
        setUtrProTennisTourSelected(checked);
        break;
      case "teamMatch":
        setteamMatch(checked);
        break;
      case "paidHit":
        setpaidHit(checked);
        break;
      case "playerCreatedPlay":
        setplayerCreatedPlay(checked);
        break;
      default:
        break;
    }
  };

  // Handler for the Apply button
  const handleApplyClick = (event) => {
    event.preventDefault()
  };

  // Handler for the Clear button
  const handleClearClick = () => {
    setTournament(false);
    setCamp(false);
    setClinic(false);
    setMatchPlay(false);
    setdualMatch(false);
    setnonTennisEventOther(false);
    setutrFlexLeague(false);
    setutrTeamTennis(false);
    setteamMatch(false);
    setpaidHit(false);
    setplayerCreatedPlay(false);
  };

  return (
    <div className="w-[300px] lg:w-[400px] flex flex-col items-stretch gap-[20px]">
      <div className="w-full flex items-center justify-between">
        <h5 className="h5 text-[#13013C]">Type</h5>
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

export default TypeFilter;
