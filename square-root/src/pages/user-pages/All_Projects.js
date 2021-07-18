import React, { useEffect, useState } from "react";
import "./projects.css";
import icon from "../../images/proj_icon.png";
import Modal from "react-modal";
import { findCityFromZip } from "../../functions/apiCalls";
import ProjectsContainer from "../../components/user/ProjectsContainer";
import { withProjectConsumer } from "../../context/projects";
import useForm from "../../components/hooks/useForm";
import validate from "../../components/utility/CreateProjectValidation";

function All_Projects(props) {
  useEffect(() => {
    if (props.location.state && props.location.state.modalOpen)
      setModalOpen(true);
    Modal.setAppElement("body");
  }, []);

  const { fetchProjects, createProject } = props.context;
  const [modalOpen, setModalOpen] = useState(false);
  const { values, errors, handleChange, handleSubmit, setCity } = useForm(
    callback,
    validate,
    createNewProject
  );

  useEffect(() => {
    if (!values.zip || values.zip === '') return
    if (values.zip.length == 4) {
      findCityFromZip(values.zip).then((response) => {
        setCity(response);
      });
    }
  }, [values.zip]);

  async function callback() {
    fetchProjects();
    setModalOpen(false);
  }

  async function createNewProject() {
    //form validated
    await createProject(values);
  }

  /*const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(projectDetails);
    try {
      if (
        !projectDetails.name ||
        !projectDetails.postalCode ||
        !projectDetails.city ||
        !projectDetails.address
      )
        return;
      console.log(projectDetails);
      await API.graphql(
        graphqlOperation(createProject, { input: projectDetails })
      );
      setProjectDetails({ name: "", city: "", postalCode: "", address: "" });
      fetchProjects();
      closeModal();
    } catch (err) {
      console.log("error creating todo:", err);
    }
  };*/

  return (
    <>
      <div className="projects-title">
        <img class="p-icon-main" src={icon} alt="Prosjektikon" />
        <h1 className="p-h1">PROSJEKTER</h1>
        <button className="btn-new-project" onClick={() => setModalOpen(true)}>
          <i class="fas fa-plus" />
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
            <i class="fas fa-times fa-lg"></i>
          </button>
          <div className="p-modal-content">
            <h1 className="p-h1">La oss lage et økosystem</h1>
            <br />
            <h2 className="p-h2">Fortell oss litt mer om prosjektet</h2>
            <form>
              <div className="p-inputBox">
                <label className="p-lbl">Navn</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Prosjektets navn.."
                  className="p-inp-text p-text-input"
                  value={values.name || ""}
                  onChange={handleChange}
                />
                {errors.name && <p className="help is-danger">{errors.name}</p>}
                <label className="p-lbl">Adresse</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Prosjektets adresse.."
                  className="p-inp-text p-text-input"
                  value={values.address || ""}
                  onChange={handleChange}
                />
                {errors.address && (
                  <p className="help is-danger">{errors.address}</p>
                )}
                <div className="p-flex">
                  <div className="p-classFlex">
                    <label className="p-lblFlex">PostNr</label>
                    <input
                      type="text"
                      name="zip"
                      className="p-input-inline p-text-input"
                      pattern="[0-9]{4}"
                      value={values.zip || ""}
                      onChange={handleChange}
                    />
                    {errors.zip && (
                      <p className="help is-danger">{errors.zip}</p>
                    )}
                  </div>
                  <div className="p-classFlex">
                    <label className="p-lblFlex">Poststed</label>
                    <input
                      type="text"
                      className="p-input-inline p-text-input"
                      value={values.city || ""}
                      disabled
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="p-btn-create">
                <button
                  type="button"
                  className="btn-modal-create-p"
                  onClick={handleSubmit}
                >
                  OPPRETT PROSJEKT
                </button>
              </div>
            </form>
          </div>
        </Modal>
        <br></br>
        <h2 className="p-h2">
          Velg et prosjekt for å legge til eller endre et grøntområde, eller
          opprett et nytt prosjekt.
        </h2>

        <ProjectsContainer {...props} />
      </div>
    </>
  );
}

export default withProjectConsumer(All_Projects);
