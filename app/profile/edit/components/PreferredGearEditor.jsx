import AutoComplete from "@/components/ui/inputFields/AutoComplete";
import TextField from "@/components/ui/inputFields/TextField";

const PreferredGearEditor = () => {
  return (
    <section className="mt-[30px]">
      <h3 className="h3 text-[#13013c]">Player Info</h3>
      <div className="border border-[#828282]/30 mt-[20px] "></div>

      <div className="flex flex-col gap-[20px] mt-[36px]">
        <div className="flex gap-[16px]">
          <TextField label="Racket Brand" id="racketBrand"/>
          <AutoComplete label="Racket Type" />
        </div>
        <div className="flex gap-[16px]">
          <AutoComplete label="Ball" />
          <AutoComplete label="Apparel Brand" />
        </div>
        <div className="flex gap-[16px]">
          <AutoComplete label="Shoes Brand" />
          <TextField label="Shoes Type" id="shoesType" />
        </div>
      </div>
    </section>
  );
};

export default PreferredGearEditor;
