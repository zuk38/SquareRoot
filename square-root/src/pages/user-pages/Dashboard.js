import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./projects.css";
import "../../styles/Customize.css";
import LeftMenu from "../../components/user/LeftMenu";
import ProjectPlantsModal from "../../components/user/ProjectPlantsModal";
import GreenspaceMiniature from "../../components/user/GreenspaceMiniature";
import icon from "../../images/proj_icon.png";
import { findCityFromZip } from "../../functions/apiCalls";
import { withProjectConsumer } from "../../context/projects";
import useForm from "../../components/hooks/useForm";
import validate from "../../components/utility/EditAccountValidation";
import ProjectForm from "../../components/user/ProjectForm";
import AuthModal from "../../components/login/AuthModal";

function Dashboard(props) {
  const params = useParams();
  const projectName = params.name;
  const [currentPage, setCurrentPage] = useState("/dashboard");
  const { getProject, updateProject, projects } = props.context;
  const currentMember = props.context.currentMember;
  const project = getProject(projectName);
  const [showModal, setShowModal] = useState(false);
  const [showAddGreenspace, setShowAddGreenspace] = useState(false);
  const [nameChanged, setNameChanged] = useState(false);

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    setCity,
    setProjectExistsErrors,
  } = useForm(callback, validate, update);

  const [editMode, setEditMode] = useState({
    zipMode: false,
    nameMode: false,
    addressMode: false,
  });

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
    setProjectExistsErrors(found);
  }, [values.name]);

  function callback() {
    setShowModal(true);
    if (editMode.nameMode) setNameChanged(true);
    setEditMode({
      zipMode: false,
      nameMode: false,
      addressMode: false,
    });
  }

  async function update() {
    //form validated
    await updateProject(project.id, values);
  }

  const closeModal = () => {
    setShowModal(false);
    console.log(nameChanged);

    if (nameChanged) {
      console.log(values.name);
      window.open("/projects", "_self");
    }
  };

  if (!project || !currentMember) {
    return (
      <div className="error">
        <h3> no such project could be found...</h3>
        <Link to="/projects" className="btn-primary">
          back to projects
        </Link>
      </div>
    );
  }

  const { name, greenspaces, members } = project;

  const renderSwitch = (param) => {
    switch (param) {
      case "/dashboard":
        return (
          <div className="green-container">
            <button onClick={() => setShowAddGreenspace(true)}>
              <i class="fas fa-plus" />
              Legg til grøntområde
            </button>
            {greenspaces.map((greenspace) => (
              <DashboardContent greenspace={greenspace} />
            ))}
            {/*
            <AddGreenspaceModal isOpen={showAddGreenspace} setIsOpen={setShowAddGreenspace}/>*/}
          </div>
        );
      case "/members":
        return <MembersContent members={members} />;
      case "/orders":
        return <div></div>;
      case "/settings":
        return (
          <ProjectForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            values={values}
            errors={errors}
            page="settings"
            editMode={editMode}
            setEditMode={(mode, value) => setEditMode({ [mode]: value })}
            project={project}
          />
        );
      default:
        return greenspaces.map((greenspace) => (
          <DashboardContent greenspace={greenspace} />
        ));
    }
  };

  return (
    <div className="dashboard">
      {showModal && (
        <AuthModal
          title="Project Updated!"
          showModal={() => setShowModal(true)}
          setShowWelcomeModal={() => closeModal()}
        />
      )}
      <LeftMenu
        {...props}
        currentPage={currentPage}
        setCurrentPage={(page) => setCurrentPage(page)}
      />
      <div className="p-main-header">
        <div>
          <img className="project-icon" src={icon} alt="Prosjektikon" />
          <h1 className="p-h1">{name}</h1>
        </div>
        <br />
        <h2 className="p-h2">Rolle: {currentMember.role}</h2>
      </div>

      <div className="d-content">{renderSwitch(currentPage)}</div>
    </div>
  );
}
export default withProjectConsumer(Dashboard);

function DashboardContent(props) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <GreenspaceMiniature
        greenspace={props.greenspace}
        openModal={() => setModalOpen(true)}
      />
      <ProjectPlantsModal
        modalOpen={modalOpen}
        setModalOpen={(value) => setModalOpen(value)}
        className="modal-dashboard"
        name={props.greenspace.name}
      />
    </>
  );
}

function MembersContent(props) {
  return (
    <>
      <button className="btn-p-invite">
        <i className="fas fa-user-plus"></i>Inviter medlemmer
      </button>
      <table className="p-table">
        <tbody>
          {props.members.map((member) => (
            <tr>
              <td className="p-td">{member.name}</td>
              <td className="p-td">{member.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
