import React from "react";
import Modal from "react-modal";
import "./PorjectDetails.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#21242850",
    zIndex: "1000",
  },
};
Modal.setAppElement("#root");
const ScreenShotModal = ({ setIsOpen, openedImage, modalIsOpen }) => {
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <Modal
      data-aos="zoom-in"
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="lg:p-20 lg:pt-36 w-full relative">
        <button
          onClick={closeModal}
          class="absolute right-2 top-2 lg:right-28 lg:top-44 font-mono bg-primary px-2 text-white rounded-full"
        >
          x
        </button>
        <img className="w-full" src={openedImage} alt="" />
      </div>
    </Modal>
  );
};

export default ScreenShotModal;
