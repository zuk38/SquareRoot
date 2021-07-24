import React, { useEffect } from "react";
import Modal from "react-modal";

export default function ProjectPlantsModal({ props, plants }) {

  useEffect(() => {
    Modal.setAppElement("body");
  }, [])

  return (
    <Modal
      isOpen={props.modalOpen}
      onRequestClose={() => props.setModalOpen(false)}
      className={"modal-orders"}
    >
      <div className="o-modal-content">
        <h1 className="o-h1">
          Det er <strong>12</strong> {/*GET ITEM NUMBERS*/}planter i Oslo
          Takterrasse{/*GET GREENSPACE NAME*/}{" "}
        </h1>
        <div className="o-modal-container">
          <table className="modal-list">
            {plants.map((plant) => (
              <tr>
                <td className="o-modal-img">
                  <img src={plant.image} alt={plant.name} />
                </td>
                <td className="o-modal-name">{plant.name}</td>
                <td className="o-modal-remove" alt={plant.name}>
                  <i class="fas fa-times fa-lg" />
                </td>
              </tr>
            ))}
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
