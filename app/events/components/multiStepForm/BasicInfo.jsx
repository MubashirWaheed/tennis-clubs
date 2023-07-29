import Stepper from "../Stepper";
import NameField from "@/components/ui/inputFields/TextField";
import LocationField from "@/components/ui/inputFields/TextField";
import NextButton from "@/components/ui/buttons/PrimaryButton";

const BasicInfo = ({ onNext }) => {
  return (
    <div>
      <NameField label="Event Name" value="" />
      <LocationField label="Event Location" value="" />
      <div className="flex place-content-end mb-0 bottom-0 mt-[150px] ">
        <NextButton size="small">Next</NextButton>
      </div>
    </div>
  );
};

export default BasicInfo;
