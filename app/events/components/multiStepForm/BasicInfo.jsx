import Stepper from "../Stepper";
import NameField from "@/components/ui/inputFields/TextField";
import LocationField from "@/components/ui/inputFields/TextField";
import NextButton from "@/components/ui/buttons/PrimaryButton";

const BasicInfo = ({ onNext }) => {
  return (
    <div>
      <div className="flex flex-col gap-3">
        <NameField label="Event Name" value="" />
        <LocationField label="Event Location" value="" />
      </div>
      <div className="flex place-content-end mb-0 bottom-0 mt-[30px] md:mt-[150px] ">
        <NextButton size="small">Next</NextButton>
      </div>
    </div>
  );
};

export default BasicInfo;
