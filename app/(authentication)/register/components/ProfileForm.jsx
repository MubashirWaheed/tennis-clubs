"use client";
import DropDown from "@/components/ui/inputFields/DropDown";
import { dates, months, years } from "@/lib/utils/dataData";
import { CldUploadWidget } from "next-cloudinary";
import axios from "axios";
import AutoComplete from "@/components/ui/inputFields/AutoComplete";
import RadioGroup from "@/components/ui/inputFields/RadioGroup";
import TextField from "@/components/ui/inputFields/TextField";
import Continue from "@/components/ui/buttons/PrimaryButton";
import Image from "next/image";
import React, { useState } from "react";
import { useUserStore } from "@/hooks/useUser";

const ProfileForm = () => {
  const [profileImage, setProfileImage] = useState();
  const [personalInfo, setPersonalInfo] = useState({
    profilePicture: {},
    firstname: "",
    lastname: "",
    month: "",
    day: "",
    year: "",
    phoneNumber: "",
    location: "",
    gender: "",
  });

  const [profilePicPreview, setProfilePicPreview] = useState("");
  const { user } = useUserStore();

  console.log("this user is from the zustand store and profile form:", user);

  const submitPersonalInfo = async (e) => {
    e.preventDefault();
    const data = "";
    const response = await axios.post("/api/profile", { data });
  };

  const handleUpload = (result) => {
    setProfileImage(result?.info?.secure_url);
  };

  return (
    <div>
      <form
        onSubmit={submitPersonalInfo}
        className="lg:w-[507px] flex flex-col gap-[20px] mt-[20px]"
      >
        <div className="flex items-center w-full justify-center">
          <label htmlFor="profilePicture" className={styles.imageUploadLabel}>
            {profilePicPreview ? (
              <Image
                width={92}
                height={92}
                alt="Profile Image"
                className={styles.imagePreview}
                src={profilePicPreview}
              />
            ) : (
              // <div className={styles.imagePreviewFallback}>
              //   <h4 className="h5 text-[#027333]">
              //     Upload <br /> Profile{" "}
              //   </h4>
              // </div>

              <CldUploadWidget
                onUpload={handleUpload}
                uploadPreset="blgqlrqz"
                options={{
                  maxFiles: 1,
                  cropping: true,
                }}
              >
                {({ open }) => {
                  return (
                    <>
                      {/* <div onClick={() => open?.()}>Upload</div> */}
                      <input
                        id="profilePicture"
                        accept="image/*"
                        // type="file"
                        className={styles.hiddenImageInput}
                        onClick={() => open?.()}
                      />
                    </>
                  );
                }}
              </CldUploadWidget>
            )}

            {/* <input
              className={styles.hiddenImageInput}
              id="profilePicture"
              accept="image/*"
              type="file"
              onChange={imageUploadEvent}
            /> */}
          </label>
        </div>

        <div className="flex flex-col md:flex-row gap-[20px] items-center">
          <TextField
            type="text"
            label="First name"
            id="firstname"
            value={personalInfo.firstname}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, firstname: e.target.value })
            }
          />
          <TextField
            type="text"
            label="Last name"
            id="lastname"
            value={personalInfo.lastname}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, lastname: e.target.value })
            }
          />
        </div>

        <div className="flex flex-col gap-[15px] ">
          <p className="text-[#13013c] f14 fw700 lh22">Birthday</p>
          <div className="flex gap-[0px] sm:gap-[5px]">
            <DropDown label="Month" options={months} />
            <DropDown label="Day" options={dates} />
            <DropDown label="Year" options={years} />
          </div>
        </div>

        <div className="flex flex-col gap-[20px]">
          <TextField
            type="tel"
            label="Phone Number"
            id="phoneNumber"
            value={personalInfo.phoneNumber}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, phoneNumber: e.target.value })
            }
          />
          <TextField
            type="text"
            label="Location"
            id="location"
            value={personalInfo.location}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, location: e.target.value })
            }
          />
        </div>
        <RadioGroup
          label="Gender"
          direction="row"
          options={[
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
          ]}
          onChange={(option) =>
            setPersonalInfo({ ...personalInfo, gender: option })
          }
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
        <Continue typ="ubmit">Continue</Continue>
      </form>
    </div>
  );
};

export default ProfileForm;

const styles = {
  imageUploadLabel: "relative h-[92px] w-[92px] rounded-full bg-red-500",
  imagePreviewFallback:
    "relative h-[92px] w-[92px] flex items-center justify-center rounded-full border-dashed border-2 border-[#027333] bg-gray-200",
  imagePreview: "object-cover rounded-full object-cover h-[92px] w-[92px]",
  hiddenImageInput: "hidden absolute inset-x-0 inset-y-0",
};
