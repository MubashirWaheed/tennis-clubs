import AutoComplete from "@/components/ui/inputFields/AutoComplete";
import DropDown from "@/components/ui/inputFields/DropDown";
import TextField from "@/components/ui/inputFields/TextField";

const dummyOptions = ["dummy1", "dummy2"];
const PreferredGearEditor = () => {
  return (
    <section className="mt-[30px]">
      <h3 className="h3 text-[#13013c]">Preferred Gear</h3>
      <div className="border border-[#828282]/30 mt-[20px] "></div>

      <div className="flex flex-col gap-[20px] mt-[36px]">
        <div className="flex items-center justify-center flex-col lg:flex-row gap-[16px]">
          <TextField label="Racket Brand" id="racketBrand" />
          {/* <AutoComplete label="Racket Type" /> */}
          <DropDown
            id="racketType"
            label="Racket Type"
            options={dummyOptions}
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-[16px]">
          {/* <AutoComplete label="Ball" />
          <AutoComplete label="Apparel Brand" /> */}
          <DropDown id="ball" label="Ball" options={dummyOptions} />
          <DropDown
            id="apparelBrand"
            label="Apparel Brand"
            options={dummyOptions}
          />
        </div>
        <div className="flex items-center justify-center flex-col lg:flex-row gap-[16px]">
          {/* <AutoComplete label="Shoes Brand" /> */}
          <DropDown
            id="shoesBrand"
            label="Shoes Brand"
            options={dummyOptions}
          />
          <TextField label="Shoes Type" id="shoesType" />
        </div>
      </div>
    </section>
  );
};

export default PreferredGearEditor;
