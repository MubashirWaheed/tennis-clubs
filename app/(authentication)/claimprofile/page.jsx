import Modal from "@/components/ui/Modal/Modal";
import Image from "next/image";
import React from "react";
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
import UpgradeToPower from "@/app/components/paymentWorkflow/UpgradeToPower";
import SelectDivision from "@/app/components/paymentWorkflow/SelectDivision";
import DivisionInfo from "@/app/components/paymentWorkflow/DivisionInfo";
import DvisionInfo2 from "@/app/components/paymentWorkflow/DvisionInfo2";

const ClaimProfile = () => {
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
          className="absolute top-0 right-4"
          src="/waveElement.svg"
          width={800}
          height={400}
          alt="background image"
        />
      </div>
      <div>
        <ClaimDialog />
        {/* <ExperienceDialog /> */}
        {/* <ErrorDialog /> */}
        {/* <RatingDialog /> */}
        {/* <PayementSuccess /> */}
        {/* <InformationPurpose /> */}
        {/* <GetRating /> */}
        {/* <UpgradeToPower /> */}
        {/* <SelectDivision /> */}
        {/* <DivisionInfo /> */}
        {/* <DvisionInfo2 /> */}
      </div>
    </div>
  );
};

export default ClaimProfile;
