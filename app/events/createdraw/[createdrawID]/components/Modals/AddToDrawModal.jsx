import Modal from "@/components/ui/Modal/Modal";
import React, { useEffect, useState } from "react";
import useMenuStore from "../../hooks/useSideMenuStore";

import AddButton from "@/components/ui/buttons/PrimaryButton";
import { useSelectedPlayers } from "../../hooks/useSelectedPlayers";
const AddToDrawModal = ({ closeModal }) => {
  const menuDraw = useMenuStore();
  const [addToNewDraw, setAddToNewDraw] = useState(false);
  const [selectedDraw, setSelectedDraw] = useState(null);
  const store = useSelectedPlayers();

  const handleCheckboxChange = () => {
    setAddToNewDraw(!addToNewDraw);
    setSelectedDraw(null); // Unselect the radio button when the checkbox is selected
  };

  const handleRadioChange = (drawName) => {
    setSelectedDraw(drawName);
    setAddToNewDraw(false); // Unselect the checkbox when a radio button is selected
  };

  const handleAddToPlayers = async () => {
    // get the list of players selected using the zustand store
    // get the id of draw in which to add players
    // make api call 
    console.log();
  };
  useEffect(() => {
    console.log("selected draw", selectedDraw);
  }, [selectedDraw]);

  return (
    <div>
      <Modal heading="Add Players..." closeModal={() => closeModal(null)}>
        <div className="min-h-[350px] min-w-[450px]">
          <div className="flex items-center">
            <div className="py-[10px] my-[15px] cursor-pointer flex items-center border-b-[#e6e6e6] border-b-[2px] w-full ">
              <label
                htmlFor="checkbox-all-search"
                className="flex items-center cursor-pointer"
              >
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-5 h-5 text-purple cursor-pointer bg-gray-100 border-gray-300 rounded focus:ring-2 dark:bg-gray-700"
                  checked={addToNewDraw}
                  onChange={handleCheckboxChange}
                />
                <p className="ml-[7px] text-[14px] font-medium text-[#13013c]">
                  Add to new draw
                </p>
              </label>
            </div>
          </div>
          <div>
            <h4 className="text-[16px] font-semibold text-[#13013c]">
              Add To Existing Draws
            </h4>
            {menuDraw.list.map((item, index) => {
              console.log("item in the menu draw", item);
              return (
                <div
                  className="cursor-pointer flex items-center mb-4"
                  key={index}
                >
                  <label className="py-[4px]  cursor-pointer text-[14px] text-[#05192C]">
                    <input
                      className="mr-[5px] w-6 h-6 text-purple bg-gray-100 border-gray-300 "
                      type="radio"
                      name="setRadio"
                      checked={selectedDraw === item}
                      onChange={() => handleRadioChange(item)}
                    />
                    {item.drawName}
                  </label>
                </div>
              );
            })}

            <AddButton
              onClick={() => {
                handleAddToPlayers();
                console.log("make api call to add player to the draw");
              }}
              size="small"
            >
              Add
            </AddButton>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AddToDrawModal;
