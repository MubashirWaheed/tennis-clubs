"use client";
import DropDown from "@/components/ui/inputFields/DropDown";
import { dates, months, years } from "@/lib/utils/dataData";
import axios from "axios";
import AutoComplete from "@/components/ui/inputFields/AutoComplete";
import RadioGroup from "@/components/ui/inputFields/RadioGroup";
import TextField from "@/components/ui/inputFields/TextField";
import Continue from "@/components/ui/buttons/PrimaryButton";
import Image from "next/image";
import React, { useState } from "react";
import { useUserStore } from "@/hooks/useUser";
import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useProfileStore } from "@/hooks/useProfileStore";

const ProfileForm = () => {
  const [disable, setDisable] = useState(false);
  const { storeProfile } = useProfileStore();

  const { user } = useUserStore();
  const router = useRouter();

  const methods = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      profileURL: null,
      month: "",
      day: "",
      year: "",
      gender: "male",
      phoneNumber: "",
      location: "",
    },
  });

  const [profileImage, setProfileImage] = useState();

  const submitPersonalInfo = async (data) => {
    setDisable(true);
    // store profile in db
    const response = await axios.post("/api/profile", { data });
    storeProfile(response.data);
    setDisable(false);
    router.push("/claimprofile");
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(submitPersonalInfo)}
          className="lg:w-[507px] flex flex-col gap-[20px] mt-[20px]"
        >
          <div className="flex items-center w-full justify-center">
            {/* <label htmlFor="profilePicture" className={styles.imageUploadLabel}> */}
            <label
              htmlFor="profilePicture"
              className={`relative h-[92px] w-[92px] rounded-full ${"bg-red-500"}`}
            >
              <div className="w-[92px] h-[92px] rounded-full">
                {profileImage && (
                  <Image
                    src={profileImage}
                    height={92}
                    width={92}
                    alt="uploaded image"
                    className="rounded-full h-[92px] cursor-pointer"
                  />
                )}
              </div>
            </label>
          </div>

          <div className="flex flex-col md:flex-row gap-[20px] items-center">
            <TextField type="text" label="First name" id="firstname" />
            <TextField type="text" label="Last name" id="lastname" />
          </div>

          <div className="flex flex-col gap-[15px] ">
            <p className="text-[#13013c] f14 fw700 lh22">Birthday</p>
            <div className="flex gap-[0px] sm:gap-[5px]">
              <DropDown id="month" label="Month" options={months} />
              <DropDown id="day" label="Day" options={dates} />
              <DropDown id="year" label="Year" options={years} />
            </div>
          </div>

          <div className="flex flex-col gap-[20px]">
            <TextField type="tel" label="Phone Number" id="phoneNumber" />
            <TextField type="text" label="Location" id="location" />
          </div>

          <RadioGroup
            label="gender"
            direction="row"
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
            ]}
          />
          <p className="f14 fw400 lh22 text-[#828282]">
            Are you a parent signing up for a child?{" "}
            <span
              onClick={() => setModal(!modal)}
              className="text-purple fw500 hover:underline hover:font-semibold cursor-pointer"
            >
              Click here.
            </span>
          </p>
          {/* it should send data to backend */}
          <Continue disabled={disable} typ="submit">
            Continue
          </Continue>
        </form>
      </FormProvider>
    </div>
  );
};

export default ProfileForm;
const styles = {
  imageUploadLabel: `relative h-[92px] w-[92px] rounded-full `,
  imagePreviewFallback:
    "relative h-[92px] w-[92px] flex items-center justify-center rounded-full border-dashed border-2 border-[#027333] bg-gray-200",
  imagePreview: "object-cover rounded-full object-cover h-[92px] w-[92px]",
  hiddenImageInput: "hidden absolute inset-x-0 inset-y-0",
};
