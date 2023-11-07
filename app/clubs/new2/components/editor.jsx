"use client";
import EmailField from "@/components/ui/inputFields/EmailField";
import MobileField from "@/components/ui/inputFields/MobileField";
import OTPField from "@/components/ui/inputFields/OTPField";
import TextArea from "@/components/ui/inputFields/TextArea";
import TextField from "@/components/ui/inputFields/TextField";
import CreateButton from "@/components/ui/buttons/PrimaryButton";

import { FormProvider, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

const Editor = () => {
  const { push } = useRouter();
  const methods = useForm({
    defaultValues: {
      clubName: "",
      phoneNumber: "",
      clubLocation: "",
      about: "",
      email: "",
      clubWebsite: "",
    },
  });

  const handleSubmit = async (data) => {
    // make post request to the backend api
    const response = await axios.post("/api/club", { data });
    push("/");
  };

  return (
    <section className="lg:mb-[196px]">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(handleSubmit)}
          className="w-full md:w-[90%] lg:w-[70%]  mx-auto flex flex-col gap-[25px]"
          //   onSubmit={handleSubmit}
        >
          <div className="flex flex-col w-full gap-[20px]">
            <TextField id="clubName" label="Club Name" />

            <TextField id="clubLocation" label="Club Location" />

            <div className="flex flex-col lg:flex-row gap-[20px]">
              <MobileField id="phoneNumber" label="Phone Number" />
              <OTPField id="otp" label="OTP" />
            </div>

            <EmailField id="email" label="Email" />

            <TextArea id="about" label="About" maxLength />

            <TextField id="clubWebsite" label="Club Website" />

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
