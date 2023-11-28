"use client";
import Modal from "@/components/ui/Modal/Modal";
import React from "react";
import Button from "@/components/ui/buttons/PrimaryButton";
import InputField from "@/components/ui/inputFields/TextField";
import AutoComplete from "@/components/ui/inputFields/AutoComplete";
import DropDown from "@/components/ui/inputFields/DropDown";
import { FormProvider, useForm } from "react-hook-form";
import axios from "axios";
import { usePathname, useSearchParams } from "next/navigation";

const approvalOptions = ["Yes", "No"];
const drawTypes = [
  "Single Elimination",
  "Round Robin",
  "Compass",
  "First Match Backdraw",
];
const genderOptions = ["Male", "Female"];
const formatOptions = ["Singles", "Doubles"];
const scoringOptions = [
  "Best of 3 Sets",
  "Two Sets w/Match Tiebreaker",
  "Single Set",
];
const drawsizeOptions = [
  "4",
  "8",
  "24",
  "16",
  "32",
  "48",
  "64",
  "80",
  "96",
  "112",
  "128",
];

const CreateDrawModal = ({ createDrawModal, handleCreateDrawModal }) => {
  // lets store this
  const methods = useForm();
  const searchParams = useSearchParams();

  const eventId = searchParams.get("eventId");

  // handle form submisison
  const onSubmit = async () => {
    const formData = methods.getValues();

    const result = await axios.post("/api/event/createDraw", {
      formData,
      eventId,
    });
  };

  return (
    <div className={`${createDrawModal ? "block" : "hidden"}`}>
      <Modal
        className="py-[20px]"
        heading="Create Draws"
        closeModal={handleCreateDrawModal}
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
            <Button type="submit">Create</Button>
          </form>
        </FormProvider>
      </Modal>
    </div>
  );
};

export default CreateDrawModal;
