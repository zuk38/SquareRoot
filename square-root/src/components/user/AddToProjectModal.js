import React, { useState } from 'react';
import Modal from 'react-modal';
import { withProjectConsumer } from '../../context/projects';
import { AiOutlinePlus } from 'react-icons/ai';
import CreateProjectModal from './CreateProjectModal';

function AddToProjectModal(props) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hover, setHover] = useState(false);
  const [addNewProject, setAddNewProject] = useState(false);
  const buttons = document.getElementsByClassName('btn-group-button');

  const { projects } = props.context;

  const removeSelectedButtons = () => {
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('selected');
    }
  };

  const setNewProjectModal = (state) => {
    setAddNewProject(state);
    setSelectedProject(null);
    removeSelectedButtons();
  };

  const setProject = (project) => {
    setSelectedProject(project);
    removeSelectedButtons();
    var p = document.getElementById(project.id);
    p.classList.add('selected');
  };

  const setIconHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        className='add-to-project-modal'
        contentLabel='Add To Project Modal'
        closeTimeoutMS={500}
      >
        <button
          onClick={props.closeModal}
          className='btn-plant-modal-close'
          alt='Lukk'
        >
          <i className='fas fa-times fa-lg' />
        </button>

        <h1>Select Project</h1>
        <div className='btn-group'>
          <button
            onMouseEnter={setIconHover}
            onMouseLeave={setIconHover}
            onClick={() => setNewProjectModal(true)}
          >
            {hover && <AiOutlinePlus />} Add new project
          </button>
          {projects.map((project) => (
            <button
              id={project.id}
              key={project.id}
              onClick={() => setProject(project)}
              className='btn-group-button'
            >
              {project.name}
              {', '}
              {project.address} {project.city}
            </button>
          ))}
        </div>
        <button className='btn-continue'>Continue</button>
      </Modal>
      {addNewProject && (
        <CreateProjectModal
          isOpen={addNewProject}
          setModal={setNewProjectModal}
        />
      )}
    </>
  );
}

export default withProjectConsumer(AddToProjectModal);
