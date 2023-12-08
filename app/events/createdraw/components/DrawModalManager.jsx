import React from "react";
import PublishModal from "./PublishModal";
import EditPlayersModal from "./EditPlayersModal";
import MessagePlayersModal from "./MessagePlayersModal";
import CreateDrawModal from "./CreateDrawModal";

const DrawModalManager = ({
  activeModal,
  MODAL_TYPES,
  setActiveModal,
  closeModal,
}) => {
  return (
    <section>
      {activeModal === MODAL_TYPES.PUBLISH && (
        <PublishModal setActiveModal={setActiveModal} />
      )}

      {activeModal === MODAL_TYPES.EDIT && (
        <EditPlayersModal setActiveModal={setActiveModal} />
      )}

      {activeModal === MODAL_TYPES.MESSAGE && (
        <MessagePlayersModal handleMessageModal={closeModal} />
      )}

      {activeModal === MODAL_TYPES.CREATE_DRAW && (
        <CreateDrawModal setActiveModal={setActiveModal} />
      )}
    </section>
  );
};

export default DrawModalManager;
