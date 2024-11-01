"use client";
import Image from "next/image";
import ProfileEditor from "./components/ProfileEditor";
import PlayerInfoEditor from "./components/PlayerInfoEditor";
import PreferredGearEditor from "./components/PreferredGearEditor";
import Save from "@/components/ui/buttons/PrimaryButton";
import Cancel from "@/components/ui/buttons/SecondaryButton";
import { useRouter } from "next/navigation";
import DropDown from "@/components/ui/inputFields/DropDown";
import { FormProvider, useForm } from "react-hook-form";

const EditProfile = () => {
  const router = useRouter();
  const methods = useForm();

  const submitProfileHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <section className="relative px-[10px] py-[15px] lg:px-[57px] lg:py-[25px] -top-[100px] flex flex-col gap-[50px] max-w-[1200px] mx-auto bg-white rounded-[10px]">
      <div className="absolute h-[92px] w-[92px] -top-[46px] right-[50px] p-[2px] rounded-full bg-white">
        <div className="relative h-full w-full ">
          <Image
            width={92}
            height={92}
            src="/human.png"
            alt="Player Profile Image"
            className="rounded-full h-full w-full object-cover"
          />
          <button className="absolute bottom-0 right-0 bg-[#3B2273] h-[20px] w-[20px] rounded-full flex items-center justify-center ">
            <Image
              width={8}
              height={8}
              src="/edit.svg"
              alt={"Edit"}
              className="w-[8px] h-[8px]"
            />
          </button>
        </div>
      </div>
      <FormProvider {...methods}>
        <form
          onSubmit={submitProfileHandler}
          className="flex flex-col gap-[30px]"
        >
          <ProfileEditor />
          <PlayerInfoEditor />
          <PreferredGearEditor />
        </form>
      </FormProvider>

      <div className="flex justify-end gap-[17px]">
        <Cancel onClick={() => router.push("/profile/view")}>Cancel</Cancel>
        <Save>Save</Save>
      </div>
    </section>
  );
};

export default EditProfile;
