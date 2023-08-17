import React from "react";
import Modal from "@/components/ui/Modal/Modal";
import Button from "@/components/ui/buttons/PrimaryButton";
import Checkbox from "@/components/ui/buttons/Checkbox";

const CopyPlayers = () => {
  return (
    <div>
      <Modal heading="Copy 2 players(2)...">
        <div className="items-start justify-center flex flex-col">
          <p className="fw700 f16 text-[#13013C]">
            Choose an existing draw or create a new one.
          </p>
          <div className="fw700  cursor-pointer my-[5px] border-b-2 w-full border-opacity-5 py-[15px] text-purple">
            <p>Add to new draw</p>
          </div>
          <div className="my-[20px]">
            <Checkbox value="These players will remain in teh current draw" />
          </div>
          <div>
            <Button size="small">Create New Draw</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CopyPlayers;
