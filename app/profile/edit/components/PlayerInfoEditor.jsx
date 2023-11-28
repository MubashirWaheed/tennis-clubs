import AutoComplete from "@/components/ui/inputFields/AutoComplete";
import DropDown from "@/components/ui/inputFields/DropDown";
import TextArea from "@/components/ui/inputFields/TextArea";
import TextField from "@/components/ui/inputFields/TextField";
import Image from "next/image";

const genderOptions = ["Male", "Female"];
const monthsOptions = [
  "January",
  "Febraury",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dateOptions = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
];
const dummyOptions = ["dummy 1", "dummy 2"];
const handOptions = ["Right", "Left"];

const PlayerInfoEditor = () => {
  return (
    <section className="mt-[30px]">
      <div>
        <h3 className="h3 text-[#13013c]">Player Info</h3>
        <div className="border border-[#828282]/30 mt-[20px] "></div>

        <div className="flex flex-col gap-[20px] mt-[37px]">
          <div className="flex justify-center items-center flex-col lg:flex-row gap-[15px]">
            <DropDown id="gender" label="Gender" options={genderOptions} />
            <TextField label="Height (in inches)" id="height" />
          </div>
          <div>
            <p className="f16 fw700 lh24 text-[#13013c] mb-[10px]">Birthday</p>
            <div className="flex flex-col  lg:flex-row gap-[15px] ">
              <div className="flex gap-[15px] flex-1">
                <DropDown id="month" label="Month" options={monthsOptions} />
              </div>
              <div className="flex justify-center items-center flex-col lg:flex-row gap-[15px] flex-1">
                <DropDown id="day" label="Day" options={dateOptions} />
                <DropDown id="year" label="Year" options={monthsOptions} />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col lg:flex-row gap-[15px]">
            <TextField label="Birth Place" id="birthPlace" />
            <DropDown
              id="dominanthand"
              label="Dominant Hand"
              options={handOptions}
            />
            <DropDown id="backhand" label="Back Hand" options={handOptions} />
          </div>
        </div>

        <div className="flex flex-col gap-[20px] mt-[20px]">
          <p className="text-[#13013c] f16 fw700 lh24">About</p>
          <TextArea
            label="Give a short tennis bio that will appear on your profile."
            id="bio"
          />
          <div className="flex justify-center flex-col lg:flex-row gap-[15px]">
            <DropDown
              id="collegeTennis"
              label="College Tennis Team"
              options={dummyOptions}
            />
            <DropDown
              id="teamPosition"
              label="Team Position"
              options={dummyOptions}
            />
          </div>
        </div>

        <div className="flex items-center gap-[6px] mt-[24px]">
          <Image
            width={20}
            height={20}
            src="/Checkbox.svg"
            alt="Checkbox"
            className="w-[20px] h-[20px]"
          />
          <p className="text-[#828282] f14 fw400 lh22">
            Ranked on the WTA tour (current or historical)
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlayerInfoEditor;
