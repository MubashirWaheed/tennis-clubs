import React from "react";
import Button from "@/components/ui/buttons/PrimaryButton";
import TextArea from "@/components/ui/inputFields/TextArea";
import Modal from "@/components/ui/Modal/Modal";
import { FormProvider, useForm } from "react-hook-form";

const MessagePlayersModal = ({
  messageModal,
  handleMessageModal,
  closeModal,
}) => {
  const methods = useForm();
  return (
    <div className="block">
      <FormProvider {...methods}>
        <Modal
          heading="Message Players In Doubles Draw"
          closeModal={() => closeModal(null)}
        >
          <div className="flex flex-col gap-2">
            <p className="f14 fw700 text-darkPurple">
              Send an email update to all players registered in this draw
            </p>
            <TextArea label="Message" />
            <div className="mt-[15px]">
              <Button size="small">Send Message</Button>
            </div>
          </div>
        </Modal>
      </FormProvider>
    </div>
  );
};

export default MessagePlayersModal;
