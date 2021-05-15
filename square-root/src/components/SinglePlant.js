import React, { useRef, useEffect, useCallback } from "react";
import "./SinglePlant.css";
import Modal from "react-modal";
import Title from "./Title";
import { useSpring, animated } from "react-spring";
import { MdClose } from "react-icons/md";
import Backdrop from "./Backdrop";

Modal.setAppElement("body");

export default function SinglePlant({ plant, showModal, setShowPlantModal }) {
  const {
    name,
    img,
    norwegian_nursery,
    pollinator_friendly,
    edible,
    pet_kids_friendly,
    air_puryfying,
    sun_seeker,
    native,
  } = plant;

  return (
    <div>
      <Modal
        isOpen={showModal}
        onRequestClose={setShowPlantModal}
        className="plant-modal"
        contentLabel="Plant Modal"
      >
        <button
          onClick={setShowPlantModal}
          className="btn-plant-modal-close"
          alt="Lukk"
        >
          <i class="fas fa-times fa-lg"></i>
        </button>

        <div className="plant-modal-content">
          <Title
            title={name.toUpperCase()}
            subtitle={name.toUpperCase()}
            style="plant-modal-title"
          />
        </div>
      </Modal>
      )
    </div>
  );
}
