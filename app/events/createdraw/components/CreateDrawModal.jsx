"use client";
import Modal from "@/components/ui/Modal/Modal";
import React, { useState } from "react";
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
  drawsizeOptions,
} from "../constants.js";

const CreateDrawModal = ({ setActiveModal }) => {
  const { mutate } = useSWRConfig();
  // lets store this
  const methods = useForm();
  const searchParams = useSearchParams();
  const [disable, setDisable] = useState(false);

  let eventId = null;
  eventId = searchParams.get("eventId");

  // handle form submisison
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
        setActiveModal(null);
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

  console.log("drawTypes in the : ", drawTypes);
  return (
    <div className={`block`}>
      <Modal
        className="py-[20px]"
        heading="Create Draws"
        closeModal={() => setActiveModal(null)}
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
                  options={drawsizeOptions}
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
