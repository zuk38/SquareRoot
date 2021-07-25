import React, { useEffect, useState } from "react";
import "./projects.css";
import icon from "../../images/proj_icon.png";
import Modal from "react-modal";
import { findCityFromZip } from "../../functions/apiCalls";
import ProjectsContainer from "../../components/user/ProjectsContainer";
import { withProjectConsumer } from "../../context/projects";
import useForm from "../../components/hooks/useForm";
import validate from "../../components/utility/CreateProjectValidation";
import ProjectForm from "../../components/user/ProjectForm";

function AllProjects(props) {
  useEffect(() => {
    if (props.location.state && props.location.state.modalOpen)
      setModalOpen(true);
    Modal.setAppElement("body");
  }, []);

  const { fetchProjects, createProject, projects, loading } = props.context;
  const [modalOpen, setModalOpen] = useState(false);
  const { values, errors, handleChange, handleSubmit, setCity, setProjectExistsErrors } = useForm(
    callback,
    validate,
    createNewProject
  );

  useEffect(() => {
    if (!values.zip || values.zip === "") return;
    if (values.zip.length == 4) {
      findCityFromZip(values.zip).then((response) => {
        setCity(response);
      });
    }
  }, [values.zip]);

  useEffect(() => {
    if (!values.name || values.name === "" || !projects.length) return;
    let found = projects.find((project) => project.name === values.name);
    setProjectExistsErrors(found)
  }, [values.name]);

  async function callback() {
    fetchProjects();
    setModalOpen(false);
  }

  async function createNewProject() {
    //form validated
    await createProject(values);
  }

  return (
    <>
      <div className="projects-title">
        <img className="p-icon-main" src={icon} alt="Prosjektikon" />
        <h1 className="p-h1">PROSJEKTER</h1>
        <button className="btn-new-project" onClick={() => setModalOpen(true)}>
          <i className="fas fa-plus" />
          NYTT PROSJEKT
        </button>
        <Modal
          isOpen={modalOpen}
          onRequestClose={() => setModalOpen(false)}
          className={"modal-project"}
        >
          <button
            onClick={() => setModalOpen(false)}
            className="btn-modal-close"
            alt="Lukk"
          >
            <i className="fas fa-times fa-lg"></i>
          </button>
          <div className="p-modal-content">
            <h1 className="p-h1">La oss lage et økosystem</h1>
            <br />
            <h2 className="p-h2">Fortell oss litt mer om prosjektet</h2>
            <ProjectForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              values={values}
              errors={errors}
            />
          </div>
        </Modal>
        <br></br>
        <h2 className="p-h2">
          Velg et prosjekt for å legge til eller endre et grøntområde, eller
          opprett et nytt prosjekt.
        </h2>

        <ProjectsContainer {...props} projects={projects} loading={loading}/>
      </div>
    </>
  );
}

export default withProjectConsumer(AllProjects);
