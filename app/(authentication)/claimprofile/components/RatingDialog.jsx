import React from "react";
import Button from "@/components/ui/buttons/PrimaryButton";

const RatingDialog = () => {
  return (
    <div className="my-[30px] px-[40px] py-[30px] rounded-xl bg-white max-w-[700px]">
      <span className="f12 fw500 py-[3px] text-white rounded-xl bg-green px-[20px] uppercase">
        Tennis
      </span>
      <div className="text-[#13013C] py-[18px] flex justify-between">
        <h3 className="h3">Your Tennis Ratings</h3>
        <h3 className="h3">1.00 - 3.00</h3>
      </div>
      <p className="text-[#828282]">
        Your provisional UTR rating is 1.00 - 3.00. This rating most closely
        resembles beginner level players. Advance your rating by playing more
        matches. See you on the courts!
      </p>
      <div>
        <h3 className="h3 pt-[15px] text-[#13013C]">Power your profile</h3>
        <p className="my-[15px] text-[#828282]">
          Get more out of Universal Tennis with a Power Subscription. Benefits
          include:
        </p>
        <ul className="list-disc pl-[30px] text-[#828282]">
          <li>See 2 decimal UTR Ratings for everyone</li>
          <li>Play in unlimited Verified events at a discount</li>
          <li>Get detailed metrics and results analysis</li>
          <li>Access priority support</li>
        </ul>
      </div>
      <div className="mt-[20px] flex flex-col  justify-center ">
        <Button className="w-full">Get Power</Button>
      </div>
    </div>
  );
};

export default RatingDialog;
