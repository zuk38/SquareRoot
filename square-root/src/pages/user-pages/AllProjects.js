import React, { useEffect, useState } from "react";
import "./projects.css";
import icon from "../../images/proj_icon.png";
import Modal from "react-modal";
import ProjectsContainer from "../../components/user/ProjectsContainer";
import { withProjectConsumer } from "../../context/projects";
import CreateProjectModal from "../../components/user/CreateProjectModal";

function AllProjects(props) {
  useEffect(() => {
    if (props.location.state && props.location.state.modalOpen)
      setModalOpen(true);
    Modal.setAppElement("body");
  }, []);

  const [modalOpen, setModalOpen] = useState(false);

  const setModal = (state) => {
    setModalOpen(state);
  };

  const { projects, loading } = props.context;

  return (
    <>
      <div className="projects-title">
        <img className="p-icon-main" src={icon} alt="Prosjektikon" />
        <h1 className="p-h1">PROSJEKTER</h1>
        <button className="btn-new-project" onClick={() => setModalOpen(true)}>
          <i className="fas fa-plus" />
          NYTT PROSJEKT
        </button>
        <CreateProjectModal isOpen={modalOpen} setModal={setModal} />
        <br></br>
        <h2 className="p-h2">
          Velg et prosjekt for å legge til eller endre et grøntområde, eller
          opprett et nytt prosjekt.
        </h2>

        <ProjectsContainer {...props} projects={projects} loading={loading} />
      </div>
    </>
  );
}

export default withProjectConsumer(AllProjects);
