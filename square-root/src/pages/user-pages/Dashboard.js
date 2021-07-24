import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./projects.css";
import "../../styles/Customize.css";
import icon from "../../images/proj_icon.png";
import LeftMenu from "../../components/user/LeftMenu";
import ProjectPlantsModal from "../../components/user/ProjectPlantsModal";
import { ProjectContext } from "../../context/projects";
import GreenspaceMiniature from "../../components/user/GreenspaceMiniature";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      projectName: this.props.match.params.name,
    };
  }

  setModalOpen = (state) => {
    this.setState({ modalOpen: state });
  };

  static contextType = ProjectContext;

  render() {
    const { getProject } = this.context;
    const currentMember = this.context.currentMember;
    const project = getProject(this.state.projectName);
    console.log(project);

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

    const { name, greenspaces } = project;

    return (
      <div className="p-row">
        <LeftMenu {...this.props} />
        <div className=".p-column right">
          <div className="title-container-greenspace">
            <div className="p-title">
              <img className="project-icon" src={icon} alt="Prosjektikon" />
              <h1 className="p-h1">{name}</h1>
            </div>
            <br />
            <h2 className="p-h2">Rolle: {currentMember.role}</h2>
            {/* --- REMOVING "ADD GREENSPACE" BUTTON ---
B/c: The user should understand that in order to add greenspace/plant, 
they should navigate through the menu, rather than us setting up another route for them to take.
           
<button className="btn-new-greenspace">
                <i class="fas fa-plus"></i>Legg til grøntområde
            </button>
    </div>*/}
          </div>
          <br />
          {greenspaces.map((greenspace) => (
            <>
              <GreenspaceMiniature
                greenspace={greenspace}
                openModal={() => this.setModalOpen(true)}
              />
              <ProjectPlantsModal
                modalOpen={this.state.modalOpen}
                setModalOpen={(value) => this.setModalOpen(value)}
                className="modal-dashboard"
                name={greenspace.name}
              />
            </>
          ))}
        </div>
      </div>
    );
  }
}