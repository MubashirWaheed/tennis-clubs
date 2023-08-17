"use client";
import AutoComplete from "@/components/ui/inputFields/AutoComplete";
import RadioGroup from "@/components/ui/inputFields/RadioGroup";
import TextField from "@/components/ui/inputFields/TextField";
import Continue from "@/components/ui/buttons/PrimaryButton";
import { useState } from "react";
import Image from "next/image";
import Modal from "@/components/ui/Modal/Modal";
import profileJson from "./profile.json";
import DropDown from "@/components/ui/inputFields/DropDown";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const dates = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const year = [
  "1997",
  "1998",
  "1999",
  "2000",
  "2001",
  "2002",
  "2003",
  "2004",
  "2005",
  "2006",
  "2007",
  "2008",
  "2009",
];

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

  const [modal, setModal] = useState(false);

  const [profilePicPreview, setProfilePicPreview] = useState("");

  const submitPersonalInfo = (e) => {
    e.preventDefault();
    console.log(personalInfo);
  };

  const imageUploadEvent = (e) => {
    const profilePic = e.target.files[0];
    setProfilePicPreview(URL.createObjectURL(profilePic));
    setPersonalInfo({ ...personalInfo, profilePicture: profilePic });
  };

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
          <div className="flex gap-[0px] sm:gap-[5px]">
            <DropDown label="Month" options={months} />
            <DropDown label="Day" options={dates} />
            <DropDown label="Year" options={year} />
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
      {/* Modal */}
      <div className={` ${modal ? "block " : "hidden"} `}>
        <Modal
          className=""
          heading="For parents signing up for a child"
          closeModal={() => setModal(!modal)}
        >
          <ul className="text-grey f14 list-disc ">
            <li className="mt-[25px]">{profileJson[0].point1}</li>
            <li className="mt-[25px]">{profileJson[0].point2}</li>
            <li className="mt-[25px]">
              {profileJson[0].point3}{" "}
              <span className="text-purple fw500">Support Team.</span>
            </li>
          </ul>
        </Modal>
      </div>
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
