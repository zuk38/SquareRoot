import React, { useEffect } from "react";
import Modal from "react-modal";

export default function ProjectPlantsModal(props) {

  useEffect(() => {
    Modal.setAppElement("body");
  }, [])

  let plantsNumber;

  if (!props.plants || !props.plants.length) plantsNumber = 0
  else plantsNumber = props.plants.length

  return (
    <Modal
      isOpen={props.modalOpen}
      onRequestClose={() => props.setModalOpen(false)}
      className={props.className}
    >
      <div className="o-modal-content">
        <h1 className="o-h1">
          Det er <strong>{plantsNumber}</strong> {/*GET ITEM NUMBERS*/}planter i {props.name}{" "}
        </h1>
        <div className="o-modal-container">
          <table className="modal-list">
            {props.plants ? 
            props.plants.map((plant) => (
              <tr>
                <td className="o-modal-img">
                  <img src={plant.image} alt={plant.name} />
                </td>
                <td className="o-modal-name">{plant.name}</td>
                <td className="o-modal-remove" alt={plant.name}>
                  <i class="fas fa-times fa-lg" />
                </td>
              </tr>
            )) : <td>No plants</td>}
          </table>
        </div>

        <div className="modal-btns-footer">
          <button
            className="orders-btn-close"
            onClick={() => props.setModalOpen(false)}
            alt="Lukk"
          >
            LUKK
          </button>
          <button
            className="orders-btn-save"
            onClick={() => props.setModalOpen(false)}
            alt="Lagre"
          >
            LAGRE
          </button>
        </div>
      </div>
    </Modal>
  );
}
