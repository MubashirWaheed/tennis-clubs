import AutoComplete from "@/components/ui/inputFields/AutoComplete";
import TextArea from "@/components/ui/inputFields/TextArea";
import TextField from "@/components/ui/inputFields/TextField";
import Image from "next/image";

const PlayerInfoEditor = () => {
  return (
    <section className="mt-[30px]">
      <div>
        <h3 className="h3 text-[#13013c]">Player Info</h3>
        <div className="border border-[#828282]/30 mt-[20px] "></div>

        <div className="flex flex-col gap-[20px] mt-[37px]">
          <div className="flex gap-[15px]">
            <AutoComplete label="Gender"  />
            <TextField label="Height (in inches)" id="height"/>
          </div>
          <div>
            <p className="f16 fw700 lh24 text-[#13013c] mb-[10px]">Birthday</p>
            <div className="flex gap-[15px] ">
              <div className="flex gap-[15px] flex-1">
                <AutoComplete label="Month" />
              </div>
              <div className="flex gap-[15px] flex-1">
                <AutoComplete label="Day" />
                <AutoComplete label="Year" />
              </div>
            </div>
          </div>
          <div className="flex gap-[15px]">
            <TextField label="Birth Place" id="birthPlace"/>
            <AutoComplete label="Dominant Hand" />
            <AutoComplete label="Back Hand" />
          </div>
        </div>

        <div className="flex flex-col gap-[20px] mt-[20px]">
          <p className="text-[#13013c] f16 fw700 lh24">About</p>
          <TextArea label="Give a short tennis bio that will appear on your profile." id="bio"/>
          <div className="flex gap-[15px]">
            <AutoComplete label="College Tennis Team" />
            <AutoComplete label="Team Position" />
          </div>
        </div>

        <div className="flex items-center gap-[6px] mt-[24px]">
          <Image width={20 } height={ 20} src="/Checkbox.svg" alt="Checkbox" className="w-[20px] h-[20px]" />
          <p className="text-[#828282] f14 fw400 lh22">
            Ranked on the WTA tour (current or historical)
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlayerInfoEditor;
