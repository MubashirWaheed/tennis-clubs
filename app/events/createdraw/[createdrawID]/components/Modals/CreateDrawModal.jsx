"use client";
import Modal from "@/components/ui/Modal/Modal";
import React, { useEffect, useState } from "react";
import Button from "@/components/ui/buttons/PrimaryButton";
import InputField from "@/components/ui/inputFields/TextField";
import AutoComplete from "@/components/ui/inputFields/AutoComplete";
import DropDown from "@/components/ui/inputFields/DropDown";
import { FormProvider, useForm } from "react-hook-form";
import axios from "axios";
import { usePathname, useSearchParams } from "next/navigation";
import { useSWRConfig } from "swr";

import {
  approvalOptions,
  drawTypes,
  genderOptions,
  formatOptions,
  scoringOptions,
  // drawsizeOptions,
  roundRobinDrawSizeOptions,
  compassDrawSizeOptions,
} from "../../constants/constants.js";

const CreateDrawModal = ({ setActiveModal, closeModal }) => {
  const { mutate } = useSWRConfig();
  const [drawSizeOptions, setDrawSizeOptions] = useState(
    compassDrawSizeOptions
  );
  // lets store this
  const methods = useForm();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const eventId = pathName.split("/")[3];
  const [disable, setDisable] = useState(false);

  const onSubmit = async () => {
    console.log("form submitted");
    const formData = methods.getValues();
    setDisable(true);

    try {
      const result = await axios.post("/api/event/createDraw", {
        formData,
        eventId,
      });

      console.log("RESULT STATUS: ", result.status);
      // Check if the POST request was successful
      if (result.status === 200) {
        closeModal(null);
        // handleCreateDrawModal();
        mutate(`/api/event/createDraw?eventId=${eventId}`);
      } else {
        console.error("API request was not successful");
      }
    } catch (error) {
      console.error("Error during API request:", error);
    } finally {
      setDisable(false);
    }
  };

  console.log("VALUES inteh form ", methods.getValues());
  console.log("methods", methods);

  useEffect(() => {
    console.log("EFFECT RAN");
    // Update drawSizeOptions based on the selected drawType
    const updateDrawSizeOptions = () => {
      console.log("updateDrawSizeOptions ran ", methods.getValues());
      const selectedDrawType = methods.getValues("drawType");
      console.log("selectedDrawType: ", selectedDrawType);
      // You can customize this logic based on your specific requirements
      if (selectedDrawType === "Round Robin") {
        setDrawSizeOptions(roundRobinDrawSizeOptions);
      } else if (selectedDrawType === "Compass") {
        setDrawSizeOptions(compassDrawSizeOptions);
      }
    };

    updateDrawSizeOptions();
  }, [methods.getValues("drawType")]);

  console.log("drawTypes in the : ", drawTypes);

  return (
    <div className={`block`}>
      <Modal
        className="py-[20px]"
        heading="Create Draws"
        closeModal={() => closeModal(null)}
      >
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="my-[20px] flex flex-col gap-2">
              <InputField id="drawName" label="Draw Name" />
              <div className="flex gap-4">
                <DropDown id="format" label="Format" options={formatOptions} />
                <DropDown id="gender" label="Gender" options={genderOptions} />
              </div>

              <div className="flex gap-4">
                <DropDown id="drawType" label="Draw Type" options={drawTypes} />
                <DropDown
                  id="scoring"
                  label="Scoring"
                  options={scoringOptions}
                />
              </div>

              <div className="flex gap-4">
                <DropDown
                  id="drawSize"
                  label="DrawSize"
                  options={drawSizeOptions}
                />
                <DropDown
                  id="coaching"
                  label="Coaching"
                  options={approvalOptions}
                />
                <DropDown
                  id="officals"
                  label="Officals"
                  options={approvalOptions}
                />
              </div>
            </div>
            <Button disabled={disable} type="submit">
              Create
            </Button>
          </form>
        </FormProvider>
      </Modal>
    </div>
  );
};

export default CreateDrawModal;
