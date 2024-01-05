import React from "react";
import PublishModal from "./PublishModal";
import EditPlayersModal from "./EditPlayersModal";
import MessagePlayersModal from "./MessagePlayersModal";
import CreateDrawModal from "./CreateDrawModal";
import AddToDrawModal from "./AddToDrawModal";

const DrawModalManager = ({ activeModal, MODAL_TYPES, closeModal }) => {
  // get the list of players that are stored int the hook
  return (
    <section>
      {activeModal === MODAL_TYPES.PUBLISH && (
        <PublishModal closeModal={closeModal} />
      )}

      {activeModal === MODAL_TYPES.EDIT && (
        <EditPlayersModal closeModal={closeModal} />
      )}

      {activeModal === MODAL_TYPES.MESSAGE && (
        <MessagePlayersModal closeModal={closeModal} />
      )}

      {activeModal === MODAL_TYPES.CREATE_DRAW && (
        <CreateDrawModal closeModal={closeModal} />
      )}

      {activeModal === MODAL_TYPES.ADD_TO_DRAW && (
        <AddToDrawModal closeModal={closeModal} />
      )}
    </section>
  );
};

export default DrawModalManager;
