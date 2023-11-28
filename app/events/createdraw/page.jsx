"use client";
import { useEffect, useState } from "react";

// import DrawMenu from "../components/DrawMenu";
// import DrawMenu from "./components/DrawMenu";
import DrawMenu from "./components/DrawMenu";
import { FormProvider, useForm } from "react-hook-form";
import DrawPlacement from "./components/DrawPlacement";
import PublishModal from "./components/PublishModal";
import EditPlayersModal from "./components/EditPlayersModal";
import MessagePlayersModal from "./components/MessagePlayersModal";
import DrawActionBar from "./components/DrawActionBar";
import DrawSearchbar from "./components/DrawSearchbar";
import { useWindowSize } from "@/hooks/useWindowSize";
import CreateDrawModal from "./components/CreateDrawModal";

import { useSearchParams } from "next/navigation";

// For this event id I have to find the registered players
// show those registered players in the draw placement

const registeredPlayers = ["John", "George", "James", "Sara"];

const CreateDraw = () => {
  const searchParams = useSearchParams();

  const search = searchParams.get("eventId");
  console.log("search: ", search);
  const { width } = useWindowSize();

  const methods = useForm();

  const [showDrawMenu, setShowDrawMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [publishModal, setPublishModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [messageModal, setMessageModal] = useState(false);
  const [createDrawModal, setCreateDrawModal] = useState(false);

  const handlePublishModal = () => {
    setPublishModal(!publishModal);
  };

  const handleEditModal = () => setEditModal(!editModal);
  const handleMessageModal = () => setMessageModal(!messageModal);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const handleCreateDrawModal = () => {
    setCreateDrawModal(!createDrawModal);
    setShowDrawMenu(!showDrawMenu);
  };

  return (
    <>
      <div className="w-full bg-[#FAFBFF]">
        <DrawActionBar
          handleEditModal={handleEditModal}
          handleMessageModal={handleMessageModal}
          setPublishModal={setPublishModal}
        />
      </div>
      <section className="bg-[#FAFBFF] w-full flex justify-center flex-col">
        <DrawSearchbar />
        <DrawPlacement
          registeredPlayers={registeredPlayers}
          width={width}
          handleClick={handleClick}
          showMenu={showMenu}
        />

        <DrawMenu
          showDrawMenu={showDrawMenu}
          setShowDrawMenu={setShowDrawMenu}
          handleCreateDrawModal={handleCreateDrawModal}
        />
      </section>
      <section>
        <PublishModal
          publishModal={publishModal}
          handlePublishModal={handlePublishModal}
        />

        <EditPlayersModal
          editModal={editModal}
          handleEditModal={handleEditModal}
        />

        <MessagePlayersModal
          messageModal={messageModal}
          handleMessageModal={handleMessageModal}
        />
        <CreateDrawModal
          createDrawModal={createDrawModal}
          handleCreateDrawModal={handleCreateDrawModal}
        />
      </section>
    </>
  );
};
export default CreateDraw;
