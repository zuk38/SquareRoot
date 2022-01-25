import React, { useEffect } from "react";
import useForm from "../../components/hooks/useForm";
import validate from "../../components/utility/CreateProjectValidation";
import ProjectForm from "../../components/user/ProjectForm";
import Modal from "react-modal";
import { withProjectConsumer } from "../../context/projects";

function CreateProjectModal(props) {
  const { isOpen, setModal } = props;
  const { projects, fetchProjects, createProject } = props.context;

  const { values, errors, handleChange, handleSubmit, setProjectExistsErrors } =
    useForm(callback, validate, createNewProject);

  /*useEffect(() => {
    if (!values.zip || values.zip === "") return;
    if (values.zip.length == 4) {
      findCityFromZip(values.zip).then((response) => {
        setCity(response);
      });
    }
  }, [values.zip]);*/

  useEffect(() => {
    if (!values.name || values.name === "" || !projects.length) return;
    let found = projects.find((project) => project.name === values.name);
    setProjectExistsErrors(found);
  }, [values.name]);

  async function callback() {
    fetchProjects();
    setModal(false);
  }

  async function createNewProject() {
    //form validated
    await createProject(values);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setModal(false)}
      className={"modal-project"}
    >
      <button
        onClick={() => setModal(false)}
        className="btn-modal-close"
        alt="Lukk"
      >
        <i className="fas fa-times fa-lg" />
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
  );
}

export default withProjectConsumer(CreateProjectModal);
