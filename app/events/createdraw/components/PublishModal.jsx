import Modal from "@/components/ui/Modal/Modal";
import React, { useEffect } from "react";
import Button from "@/components/ui/buttons/PrimaryButton";
import { FormProvider, useForm } from "react-hook-form";

const PublishModal = ({ setActiveModal }) => {
  const methods = useForm();

  useEffect(() => {
    console.log("Component rendered or updated");

    return () => {
      console.log("Component will unmount");
    };
  });
  return (
    <div className="block">
      <FormProvider {...methods}>
        <Modal heading="Publish Draws" closeModal={() => setActiveModal(null)}>
          <div className="flex flex-col">
            <p className="text-grey my-[15px]">
              Select draws to publish and display publicly on the event profile
              page. If you unselect a draw and click Publish, that draw will be
              unpublished from the event profile page.
            </p>
            <div className="flex flex-col gap-2 my-[20px]">
              <label className="text-[#05192C] fw700 inline-flex items-center">
                <input
                  type="checkbox"
                  className="w-[25px] h-[25px] mr-[10px] cursor-pointer text-purple border-1 border-purple rounded-md focus:ring-0"
                  //   checked
                />
                Doubles
              </label>
              <label className="text-[#05192C] fw700 inline-flex items-center ">
                <input
                  type="checkbox"
                  className="w-[25px] h-[25px] mr-[10px]  text-purple  cursor-pointer border-1 border-purple rounded-md focus:ring-0"
                  //   checked
                />
                Levels Based Play Singles
              </label>
            </div>
            <div>
              <Button size="small">Publish</Button>
            </div>
          </div>
        </Modal>
      </FormProvider>
    </div>
  );
};

export default PublishModal;
