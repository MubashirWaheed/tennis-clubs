import Modal from "@/components/ui/Modal/Modal";
import React from "react";
import Button from "@/components/ui/buttons/PrimaryButton";
import InputField from "@/components/ui/inputFields/TextField";
import AutoComplete from "@/components/ui/inputFields/AutoComplete";
import { FormProvider, useForm } from "react-hook-form";

const EditPlayersModal = ({ setActiveModal }) => {
  const methods = useForm();
  return (
    <div className="block">
      <FormProvider {...methods}>
        <Modal heading="Edit Draws" closeModal={() => setActiveModal(null)}>
          <div className="my-[20px] flex flex-col gap-2">
            <InputField label="Draw Name" />
            <AutoComplete label="Draw Size" />
          </div>
          <Button size="small">Update</Button>
        </Modal>
      </FormProvider>
    </div>
  );
};

export default EditPlayersModal;
