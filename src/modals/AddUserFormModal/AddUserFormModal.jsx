import React from "react";
import * as FaIcons from "react-icons/fa";
import AddUserFormModalContent from "./AddUserFormModalContent";
import Modal from "react-modal";

const AddUserFormModal = ({ isModalOpen, closeModal, handleSubmit }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      className="modal"
      overlayClassName="modal-overlay"
    >
      <div className="modal-content">
        <AddUserFormModalContent handleSubmit={handleSubmit} />
      </div>

      <button className="modal-close" onClick={closeModal}>
        <FaIcons.FaTimes />
      </button>
    </Modal>
  );
};

export default AddUserFormModal;
