import NameField from "@/components/ui/inputFields/TextField";
import LocationField from "@/components/ui/inputFields/TextField";
import NextButton from "@/components/ui/buttons/PrimaryButton";
import Image from "next/image";

const BasicInfo2 = ({ onNext }) => {
  return (
    <div className="mt-[40px]">
      <div className="flex flex-col gap-3 mt-[20px]">
        <NameField label="Event Name" value="" />
        <LocationField label="Event Location" value="" />
      </div>

      <div className="mt-[30px]">
        <Image
          className="w-full"
          src="/eventLocation.png"
          alt="map"
          width={700}
          height={0}
        />
      </div>

      {/* end */}
      <div className="flex place-content-end mb-0 bottom-0 mt-[30px] md:mt-[150px] ">
        <NextButton size="small" onClick={onNext}>
          Next
        </NextButton>
      </div>
    </div>
  );
};

export default BasicInfo2;
