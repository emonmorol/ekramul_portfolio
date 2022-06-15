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
      <div className="p-20 pt-36 relative">
        <button
          onClick={closeModal}
          class="btn btn-circle absolute right-28 top-44"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-2 h-2 lg:h-6 lg:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <img src={openedImage} alt="" />
      </div>
    </Modal>
  );
};

export default ScreenShotModal;
