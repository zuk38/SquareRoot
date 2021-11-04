import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type='button' onClick={handleOpen}>
        react-transition-group
      </button>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id='transition-modal-title'>Transition modal</h2>
            <p id='transition-modal-description'>
              react-transition-group animates me.
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

/*import { TextField } from "@material-ui/core";
import React from "react";
import Modal from "react-modal";
import StepWizard from "react-step-wizard";

export default function AddGreenspaceModal(props) {
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={() => props.setIsOpen(false)}
      className="add-to-project-modal"
      contentLabel="Add To Project Modal"
      closeTimeoutMS={500}
    >
      <div>
        <TextField
          required
          id="filled-required"
          label="Greenspace Name"
          variant="filled"
        />
      </div>
      {/* 
      <button
        onClick={props.closeModal}
        className="btn-plant-modal-close"
        alt="Lukk"
      >
        <i className="fas fa-times fa-lg" />
      </button>

      <h1>Select Project</h1>
      <div className="btn-group">
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
            className="btn-group-button"
          >
            {project.name}
            {", "}
            {project.address} {project.city}
          </button>
        ))}
      </div>
      <button className="btn-continue">Continue</button>
    </Modal>
  );
}

function Step1() {
  return (
    <>
      <TextField
        required
        id="filled-required"
        label="Required"
        defaultValue="Hello World"
        variant="filled"
      />
    </>
  );
}

function Step2() {}*/
