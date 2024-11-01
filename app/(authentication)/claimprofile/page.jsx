"use client";
import Modal from "@/components/ui/Modal/Modal";
import Image from "next/image";
import React, { useState } from "react";
import ClaimDialog from "./components/ClaimDialog";
import ExperienceDialog from "./components/ExperienceDialog";
import ErrorDialog from "./components/ErrorDialog";
import RatingDialog from "./components/RatingDialog";
import AccountDelete from "@/app/components/Modals/AccountDelete";
import CopyPlayers from "@/app/components/Modals/CopyPlayers";
import ChangeRound from "@/app/components/Modals/ChangeRound";
import PayementSuccess from "@/app/components/Modals/PayementSuccess";
import InformationPurpose from "@/app/components/Modals/InformationPurpose";
import GetRating from "@/app/components/Modals/GetRating";

const ClaimProfile = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    // h-[600px]
    <div className=" min-h-[500px] relative flex items-center justify-center bg-[#57258c] w-full ">
      <div className="hidden lg:block">
        <Image
          className=" absolute bottom-0 left-0 opacity-20 lg:w-[150px] lg-[200px] xl:left-[-20px] xl:w-[200px] xl:h-[450px]"
          src="/objects.svg"
          width={250}
          height={250}
          alt="background"
        />
        <Image
          className="absolute bottom-60 left-36 opacity-70"
          src="/Ellipse16.svg"
          width={30}
          height={30}
          alt="background image"
        />
        <Image
          className="absolute top-0 right-4 z-0"
          src="/waveElement.svg"
          width={800}
          height={400}
          alt="background image"
        />
      </div>
      <div className="z-10">
        {currentStep === 1 && <ClaimDialog onNext={handleNext} />}
        {currentStep === 2 && <ExperienceDialog onNext={handleNext} />}
        {currentStep === 3 && <RatingDialog />}
        {/* <ErrorDialog /> */}
        {/* <PayementSuccess /> */}
        {/* <InformationPurpose /> */}
        {/* <GetRating /> */}
      </div>
    </div>
  );
};

export default ClaimProfile;
