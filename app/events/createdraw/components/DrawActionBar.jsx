import React from "react";
import Button from "@/components/ui/buttons/PrimaryButton";

const DrawActionBar = ({
  handleEditModal,
  handleMessageModal,
  setPublishModal,
}) => {
  return (
    <>
      <div className="flex flex-wrap justify-center lg:justify-between items-center w-full max-w-[1170px] mx-auto">
        <div>
          <div className="py-[5px] flex flex-col md:flex-row items-center w-full max-w-[1170px] mx-auto">
            <p className="f20 text-darkPurple fw700">
              Level Based Play Singles Main
            </p>
            <div className="flex gap-2 ml-[10px]">
              <p
                onClick={handleEditModal}
                className="cursor-pointer text-green fw700"
              >
                • Edit
              </p>
              <p className="text-green fw700">• Print</p>
              <p
                onClick={handleMessageModal}
                className="cursor-pointer text-green fw700"
              >
                • Message Players
              </p>
            </div>
          </div>
          <p className="text-grey fw700 text-center">
            Singles, Round Robin, Two Sets w/ Match Tiebreaker, 14 Players, Al
            UTR, All Ages.
          </p>
        </div>
        <div className="flex gap-4  items-center justify-center">
          <Button size="small">Save</Button>
          <Button
            onClick={() => setPublishModal((publishModal) => !publishModal)}
            size="small"
          >
            Publish
          </Button>
        </div>
      </div>
    </>
  );
};

export default DrawActionBar;
