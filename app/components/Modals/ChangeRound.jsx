import React from "react";
import Modal from "@/components/ui/Modal/Modal";
import Button from "@/components/ui/buttons/PrimaryButton";
import Input from "@/components/ui/inputFields/TextField";
import LocationInput from "@/components/ui/inputFields/TextField";
import Checkbox from "@/components/ui/buttons/Checkbox";

const ChangeRound = () => {
  return (
    <div>
      <Modal heading="Change Round #04">
        <div className="flex flex-col gap-3">
          <p className="text-[#13013C] f14 fw700">Draw Option (Optional)</p>
          <div className="flex gap-2">
            <Input label="Date" value="12/19/2023" />
            <Input label="Time" value="08:00AM" />
          </div>
          <LocationInput
            label="Default location"
            value="1074 Oliver Street Dallas, TX 75204"
          />
          <div className="my-[10px]">
            <Checkbox value="Overwrite all existing date and location in round #4" />
          </div>
          <div>
            <Button>Ok</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ChangeRound;
