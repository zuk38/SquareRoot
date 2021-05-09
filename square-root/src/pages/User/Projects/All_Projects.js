import React, { useEffect, useState } from "react";
import "./projects.css";
import icon from "../../../images/proj_icon.png";
import Modal from "react-modal";
import { findCityFromZip } from "../../../functions/apiCalls";
import ProjectsContainer from "../../../components/user/ProjectsContainer";
import { withProjectConsumer } from "../../../context/projects";
import API, { graphqlOperation } from "@aws-amplify/api";
import { createProject } from "../../../api/mutations";

function All_Projects( {context }) {
  const { fetchProjects } = context;
  const [modalOpen, setModalOpen] = useState(false);
  const [projectDetails, setProjectDetails] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
  });
  const [error, setError] = useState("");
  const [foundZip, setFoundZip] = useState(false);

  useEffect(() => {
    Modal.setAppElement("body");
  }, []);

  useEffect(() => {
    if (!foundZip) {
      console.log("update city");
      findCityFromZip(projectDetails.postalCode).then((response) => {
        if (response) {
          setProjectDetails({ ...projectDetails, city: response });
        } else {
          setProjectDetails({ ...projectDetails, city: "" });
          setError("invalid zip");
        }
        setFoundZip(true);
      });
    }
  }, [projectDetails]);

  const updateModalState = (key, value) => {
    console.log(key);
    console.log(value.length);
    if (key == "postalCode" && value.length == 4) setFoundZip(false);
    setProjectDetails({ ...projectDetails, [key]: value });
    setError("");
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = async (e) => {
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
      console.log(projectDetails)
      await API.graphql(
        graphqlOperation(createProject, { input: projectDetails })
      );
      setProjectDetails({ name: "", city: "", postalCode: "" });
      fetchProjects()
      closeModal();
    } catch (err) {
      console.log("error creating todo:", err);
    }
  };

  return (
    <div className="projects-title">
      <img class="p-icon-main" src={icon} alt="Prosjektikon" />
      <h1 className="p-h1">PROSJEKTER</h1>
      <button className="btn-new-project" onClick={openModal}>
        <i class="fas fa-plus"></i>NYTT PROSJEKT
      </button>
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        className={"modal-project"}
      >
        <button onClick={closeModal} className="btn-modal-close" alt="Lukk">
          <i class="fas fa-times fa-lg"></i>
        </button>
        <div className="p-modal-content">
          <h1 className="p-h1">La oss lage et økosystem</h1>
          <br />
          <h2 className="p-h2">Fortell oss litt mer om prosjektet</h2>
          <form onSubmit={handleSubmit}>
            <div className="p-inputBox">
              <label className="p-lbl">Navn</label>
              <input
                type="text"
                placeholder="Prosjektets navn.."
                className="p-inp-text"
                value={projectDetails.name || ""}
                onChange={(e) => updateModalState("name", e.target.value)}
              />
              <label className="p-lbl">Adresse</label>
              <input
                type="text"
                placeholder="Prosjektets adresse.."
                className="p-inp-text"
                value={projectDetails.address || ""}
                onChange={(e) => updateModalState("address", e.target.value)}
              />
              <div className="p-flex">
                <div className="p-classFlex">
                  <label className="p-lblFlex">PostNr</label>
                  <input
                    type="text"
                    className="p-input-inline"
                    pattern="[0-9]{4}"
                    value={projectDetails.postalCode || ""}
                    onChange={(e) =>
                      updateModalState("postalCode", e.target.value)
                    }
                  />
                  <p className="help is-danger">{error}</p>
                </div>
                <div className="p-classFlex">
                  <label className="p-lblFlex">Poststed</label>
                  <input
                    type="text"
                    className="p-input-inline"
                    value={projectDetails.city || ""}
                    onChange={(e) => updateModalState("city", e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="p-btn-create">
              {/*NEED a button onClick -- save in database*/}
              <button className="btn-modal-create-p">OPPRETT PROSJEKT</button>
            </div>
          </form>
        </div>
      </Modal>
      <br></br>
      <h2 className="p-h2">
        Velg et prosjekt for å legge til eller endre et grøntområde, eller
        opprett et nytt prosjekt.
      </h2>

      <ProjectsContainer />
    </div>
  );
}

export default withProjectConsumer(All_Projects);
