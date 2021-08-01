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
    onRemoveCompletely
  } = props;

  const onAdd = (...args) => {
    props.onAdd(...args);
  };

  const onRemove = (...args) => {
    props.onRemove(...args);
  };

  const handleQuantityInput = (...args) => {
    props.handleQuantityInput(...args);
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
              <div className="buttons">
                <span className="delete-btn">
                  <DeleteIcon onClick={() => onRemoveCompletely(plant)} />
                </span>
              </div>
              <div className="plant-img">
                <img src={plant.image} alt={plant.norwegian_name} />
              </div>
              <div className="description">
                <span>{plant.norwegian_name}</span>
                <span>{plant.latin_name}</span>
                {/*plant.categories.map((c) => (
                  <span>{c}</span>
                ))*/}
              </div>
              <ModifyPlantsQuantity
                onAdd={() => onAdd(plant)}
                onRemove={() => onRemove(plant)}
                id={plant.latin_name}
                quantity={plant.quantity}
                handleQuantityInput={(e) => handleQuantityInput(e, plant)}
              />
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
