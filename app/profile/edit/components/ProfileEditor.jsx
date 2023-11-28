import AutoComplete from "@/components/ui/inputFields/AutoComplete";
import TextField from "@/components/ui/inputFields/TextField";
import Image from "next/image";
import DropDown from "@/components/ui/inputFields/DropDown";
import Checkbox from "@/components/ui/buttons/Checkbox";

const homeCourtOptions = [
  "Ushuaia, Tierra del Fuego Province, Argentina",
  "Ushuaia, Brazil",
];
const ProfileEditor = () => {
  return (
    <section>
      <h3 className="h3 text-[#13013c]">Profile</h3>
      <div className="border border-[#828282]/30 mt-[20px] "></div>

      <div className="flex flex-col items-center lg:flex-row gap-[15px] mt-[40px]">
        <div className="flex flex-col lg:flex-row gap-[15px] flex-1">
          <TextField label="First name" id="firstName" />
          <TextField label="Last name" id="lastName" />
        </div>
        <div className="flex-1">
          <DropDown
            id="homeCourt"
            label="Home Court"
            options={homeCourtOptions}
          />
        </div>
      </div>

      <div>
        <p className="f16 fw700 lh24 text-[#13013c]">Your ratings</p>
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-[24px] mt-[16px]">
          <div className="flex items-center gap-[5px]">
            <Checkbox value="Display my MPR (tennis)" />
            <Checkbox value="Display my MPR (pickleball)" />
          </div>
        </div>
      </div>

      <div className="mt-[20px] flex flex-col gap-[20px]">
        <div className="flex flex-col lg:flex-row gap-[16px]">
          <DropDown
            id="displayRating"
            label="Select the rating you'd like to display"
            options={homeCourtOptions}
          />
          <DropDown
            id="residence"
            label="Residence"
            options={homeCourtOptions}
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-[16px]">
          <DropDown id="region" label="Region" options={homeCourtOptions} />
          <DropDown
            id="nationality"
            label="Nationality"
            options={homeCourtOptions}
          />
        </div>
      </div>
    </section>
  );
};

export default ProfileEditor;
