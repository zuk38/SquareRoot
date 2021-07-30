import React, { useEffect } from "react";
import Modal from "react-modal";
import { ReactComponent as DeleteIcon } from "../../icons/delete.svg";
import ModifyPlantsQuantity from "./ModifyPlantsQuantity";

export default function ProjectPlantsModal(props) {
  useEffect(() => {
    Modal.setAppElement("body");
  }, []);

  const {
    plants,
    plantsNumber,
    modalOpen,
    name,
    setModalOpen,
    onAdd,
    onRemove,
    onRemoveCompletely
  } = props;

  const onAddHandler = (...args) => {
    onAdd(...args);
  };

  const onRemoveHandler = (...args) => {
    onRemove(...args);
  };

  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={() => setModalOpen(false)}
      className="project-plants-modal"
    >
      <div className="project-plants-modal-content">
        <h1>
          Det er <strong>{plantsNumber}</strong> planter i {name}
        </h1>
        {plants && plants.length != 0 ? (
          plants.map((plant) => (
            <div className="item" key={plant.norwegian_name}>
              <div class="buttons">
                <span class="delete-btn">
                  <DeleteIcon onClick={() => onRemoveCompletely(plant)}/>
                </span>
              </div>
              <div class="plant-img">
                <img src={plant.image} alt={plant.norwegian_name} />
              </div>
              <div class="description">
                <span>{plant.norwegian_name}</span>
                <span>{plant.latin_name}</span>
                {/*plant.categories.map((c) => (
                  <span>{c}</span>
                ))*/}
              </div>
              <ModifyPlantsQuantity plant={plant} onAdd={onAddHandler} onRemove={onRemoveHandler} />
            </div>
          ))
        ) : (
          <h1>No plants</h1>
        )}
      </div>
      <div className="modal-btns-footer">
        <button
          className="orders-btn-close"
          onClick={() => setModalOpen(false)}
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
      {/*
      <div className="o-modal-content">
        <h1 className="o-h1">
          Det er <strong>{plantsNumber}</strong> planter i {props.name}{" "}
        </h1>
        <div className="o-modal-container">
          <table className="modal-list">
            {props.plants ? 
            props.plants.map((plant, index) => (
              <tbody>
              <tr>
                <td className="o-modal-img" key={index}>
                  <img src={plant.image} alt={plant.norwegian_name} />
                </td>
                <td className="o-modal-name" key={index + 1}>{plant.norwegian_name}</td>
                <td className="o-modal-remove" key={index + 2} alt={plant.norwegian_name}>
                  <i className="fas fa-times fa-lg" />
                </td>
              </tr>
              </tbody>
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
            </div>*/}
    </Modal>
  );
}
