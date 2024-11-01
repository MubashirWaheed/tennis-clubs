"use client";
import EmailField from "@/components/ui/inputFields/EmailField";
import MobileField from "@/components/ui/inputFields/MobileField";
import OTPField from "@/components/ui/inputFields/OTPField";
import TextArea from "@/components/ui/inputFields/TextArea";
import TextField from "@/components/ui/inputFields/TextField";
import CreateButton from "@/components/ui/buttons/PrimaryButton";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

const Editor = () => {
  const [formData, setFormData] = useState({
    clubName: "",
    clubLocation: "",
    phoneNumber: "",
    otp: "",
    email: "",
    about: "",
    clubWebsite: "",
  });
  const methods = useForm({
    defaultValues: {
      clubName: "",
      phoneNumber: "",
      clubLocation: "",
      about: "",
      email: "",
      clubWebiste: "",
    },
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="lg:mb-[196px]">
      <FormProvider {...methods}>
        <form
          className="w-full md:w-[90%] lg:w-[70%] mx-auto flex flex-col gap-[25px]"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col w-full gap-[20px]">
            <TextField
              id="clubName"
              label="Club Name"
              value={formData.clubName}
              onChange={handleChange}
            />

            <TextField
              id="clubLocation"
              label="Club Location"
              value={formData.clubLocation}
              onChange={handleChange}
            />

            <div className="flex flex-col lg:flex-row gap-[20px]">
              <MobileField
                id="phoneNumber"
                label="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              <OTPField
                id="otp"
                label="OTP"
                value={formData.otp}
                onChange={handleChange}
              />
            </div>

            <EmailField
              id="email"
              label="Email"
              value={formData.email}
              onChange={handleChange}
            />

            <TextArea
              id="about"
              label="About"
              maxLength="true"
              value={formData.about}
              onChange={handleChange}
            />

            <TextField
              id="clubWebsite"
              label="Club Website"
              value={formData.clubWebsite}
              onChange={handleChange}
            />

            {/* Button */}
            <div className="flex flex-row justify-end w-full py-20">
              <CreateButton type="submit">Create Club</CreateButton>
            </div>
          </div>
        </form>
      </FormProvider>
    </section>
  );
};

export default Editor;
