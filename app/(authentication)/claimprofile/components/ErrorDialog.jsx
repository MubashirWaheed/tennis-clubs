import Image from "next/image";
import React from "react";
import Button from "@/components/ui/buttons/PrimaryButton";

const ErrorDialog = () => {
  return (
    <div className="py-[25px] px-[30px] rounded-xl max-w-[650px] flex flex-col justify-center items-center bg-white border-t-2 border-[#f0b536] ">
      <Image src="/support.svg" width={100} height={100} alt="support svg" />
      <h2 className="h3 py-[15px]">Error posting onboarding data</h2>
      <Image src="/Header Line.svg" width={150} height={40} alt="line" />
      <p className="text-grey text-center">
        There was an issue processing the request. Please try again or contact
        our Support Team for assistance.
      </p>

      <div className="mt-[20px] cursor-pointer">
        <Button className="cursor-pointer">Got It</Button>
      </div>
    </div>
  );
};

export default ErrorDialog;
