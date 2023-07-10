import AutoComplete from "@/components/ui/inputFields/AutoComplete";
import TextField from "@/components/ui/inputFields/TextField";
import Image from "next/image";

const ProfileEditor = () => {
  return (
    <section>
      <h3 className="h3 text-[#13013c]">Profile</h3>
      <div className="border border-[#828282]/30 mt-[20px] "></div>

      <div className="flex gap-[15px] mt-[40px]">
        <div className="flex gap-[15px] flex-1">
          <TextField label="First name" />
          <TextField label="Last name" />
        </div>
        <div className="flex-1">
          <AutoComplete label="Home Court" />
        </div>
      </div>

      <div>
        <p className="f16 fw700 lh24 text-[#13013c]">Your ratings</p>
        <div className="flex items-center gap-[24px] mt-[16px]">
          <div className="flex items-center gap-[5px]">
            <Image
              width={20}
              height={20}
              src="/Checkbox.svg"
              alt="Checkbox"
              className="w-[20px] h-[20px]"
            />
            <p className="text-[#05192C] f14 fw400 lh22">
              Display my MPR (tennis)
            </p>
          </div>
          <div className="flex items-center gap-[5px]">
            <Image
             width={20}
             height={20}
              src="/DefaultCheckbox.svg"
              alt="DefaultChecbox"
              className="w-[20px] h-[20px]"
            />
            <p className="text-[#05192C] f14 fw400 lh22">
              Display my MPRP (pickleball)
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[20px] flex flex-col gap-[20px]">
        <div className="flex gap-[16px]">
          <AutoComplete label="Select the rating you'd like to display" />
          <AutoComplete label="Residence" />
        </div>
        <div className="flex gap-[16px]">
          <AutoComplete label="Region" />
          <AutoComplete label="Nationality" />
        </div>
      </div>
    </section>
  );
};

export default ProfileEditor;
