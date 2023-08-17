import React from "react";
import Modal from "@/components/ui/Modal/Modal";
import Button from "@/components/ui/buttons/PrimaryButton";

const GetRating = () => {
  return (
    <div>
      <Modal heading="Get your MPR rating started">
        <p className="text-grey f14">
          Take a minute to answer a few quick question to receive your estimated
          UTR Rating. It's the first step to enjoying more level-based play.
          Your coach or club will also be able to match you up with players
          close to your level!
        </p>
        <div className="mt-[20px]">
          <Button>Next</Button>
        </div>
      </Modal>
    </div>
  );
};

export default GetRating;
