"use client";
import AutoComplete from "@/components/ui/inputFields/AutoComplete";
import RadioGroup from "@/components/ui/inputFields/RadioGroup";
import TextField from "@/components/ui/inputFields/TextField";
import Continue from "@/components/ui/buttons/PrimaryButton";
import { useState } from "react";
import Image from "next/image";

const ProfileInfo = () => {
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

  const submitPersonalInfo = (e) => {
    e.preventDefault();
    console.log(personalInfo);
  };

  const imageUploadEvent = (e) => {
    const profilePic = e.target.files[0];
    setProfilePicPreview(URL.createObjectURL(profilePic));
    setPersonalInfo({ ...personalInfo, profilePicture: profilePic });
  }

  return (
    <section className="p-[10px] md:p-[20px] lg:p-[38px] bg-white rounded-[10px] z-20">
      <h3 className="h3 text-[#13013C]">Personal information.</h3>

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
              <div className={styles.imagePreviewFallback}>
                <h4 className="h5 text-[#027333]">
                  Upload <br /> Profile{" "}
                </h4>
                
              </div>
            )}
            <input
              className={styles.hiddenImageInput}
              id="profilePicture"
              accept="image/*"
              type="file"
              onChange={imageUploadEvent}
            />
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
          <div className="flex gap-[15px]">
            <div>
              <AutoComplete label="Month" />
            </div>
            <div className="flex gap-[15px]">
              <AutoComplete label="Day" />
              <AutoComplete label="Year" />
            </div>
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
          <span className="text-[#13013c] hover:underline hover:font-semibold cursor-pointer">
            Click here.
          </span>
        </p>
        <Continue typ="ubmit">Continue</Continue>
      </form>
    </section>
  );
};

const styles = {
  imageUploadLabel: "relative h-[92px] w-[92px] rounded-full bg-red-500",
  imagePreviewFallback:
    "relative h-[92px] w-[92px] flex items-center justify-center rounded-full border-dashed border-2 border-[#027333] bg-gray-200",
  imagePreview: "object-cover rounded-full object-cover h-[92px] w-[92px]",
  hiddenImageInput: "hidden absolute inset-x-0 inset-y-0",
};
export default ProfileInfo;
