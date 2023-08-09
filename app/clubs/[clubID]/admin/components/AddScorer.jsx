import Modal from "@/components/ui/Modal/Modal";
import React from "react";
import InputField from "@/components/ui/inputFields/TextField";
import EmailField from "@/components/ui/inputFields/EmailField";
import MobileField from "@/components/ui/inputFields/MobileField";
import OTPField from "@/components/ui/inputFields/OTPField";
import AddButton from "@/components/ui/buttons/PrimaryButton";
const AddScorer = ({ showAddScorer, handleModal }) => {
  return (
    <div className={`${showAddScorer ? "block" : "hidden"} `}>
      <Modal heading="Add Scorer" closeModal={handleModal}>
        <p className="text-darkPurple fw700 my-[5px]">Draw Option (Optional)</p>
        <form className="flex flex-col gap-2">
          <div className="flex gap-2">
            <InputField label="Name" />
            <EmailField label="Email" />
          </div>
          <MobileField label="Mobile Number" />
          <OTPField lable="OTP" />
          <InputField label="URL" />
          <div className="mt-[15px]">
            <AddButton size="small">Add</AddButton>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddScorer;
