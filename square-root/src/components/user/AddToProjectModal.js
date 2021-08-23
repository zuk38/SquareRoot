import React, { useState } from "react";
import Modal from "react-modal";
import { withProjectConsumer } from "../../context/projects";
import { AiOutlinePlus } from "react-icons/ai";

function AddToProjectModal(props) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hover, setHover] = useState(false);

  const setIconHover = () => {
    setHover(!hover);
  };

  const { projects } = props.context;

  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.closeModal}
      className="add-to-project-modal"
      contentLabel="Add To Project Modal"
      closeTimeoutMS={500}
    >
      <button
        onClick={props.closeModal}
        className="btn-plant-modal-close"
        alt="Lukk"
      >
        <i className="fas fa-times fa-lg" />
      </button>

      <h1>Select Project</h1>
      <div className="btn-group">
        <button onMouseEnter={setIconHover} onMouseLeave={setIconHover}>
          {hover && <AiOutlinePlus />} Add new project
        </button>
        {projects.map((project) => (
          <button key={project.id}>{project.name}</button>
        ))}
      </div>
      <button className="btn-continue">Continue</button>
    </Modal>
  );
}

export default withProjectConsumer(AddToProjectModal);
