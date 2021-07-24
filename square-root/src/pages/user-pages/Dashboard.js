import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./projects.css";
import "../../styles/Customize.css";
import LeftMenu from "../../components/user/LeftMenu";
import ProjectPlantsModal from "../../components/user/ProjectPlantsModal";
import { ProjectContext } from "../../context/projects";
import GreenspaceMiniature from "../../components/user/GreenspaceMiniature";
import icon from "../../images/proj_icon.png";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      projectName: this.props.match.params.name,
      currentPage: "/dashboard",
    };
  }

  setModalOpen = (state) => {
    this.setState({ modalOpen: state });
  };

  setCurrentPage = (page) => {
    this.setState({ currentPage: page });
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

    const { name, greenspaces, members } = project;

    return (
      <div className="p-row">
        <LeftMenu
          {...this.props}
          currentPage={this.state.currentPage}
          setCurrentPage={this.setCurrentPage}
        />
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
          {
            {
              "/dashboard": greenspaces.map((greenspace) => (
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
              )),
              "/members": (
                <>
                  <div className="p-container">
                    <button className="btn-p-invite">
                      <i className="fas fa-user-plus"></i>Inviter medlemmer
                    </button>
                  </div>
                  <table className="p-table">
                    <tbody>
                      {members.map((member) => (
                        <tr>
                          <td className="p-td">{member.name}</td>
                          <td className="p-td">{member.role}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </>
              ),
              "/settings": (
                <div className="settings-container">
                  <form>
                    <fieldset>
                      <label className="settings-lbl">
                        <p className="settings-p">Prosjektnavn</p>
                        <input
                          name="project_name"
                          type="text"
                          className="p-text-input"
                          placeholder="Navn..."
                        />
                      </label>
                      <label className="settings-lbl">
                        <p className="settings-p">Adresse</p>
                        <input
                          name="project_name"
                          type="text"
                          placeholder="Gatenavn..."
                          className="p-text-input"
                        />
                      </label>

                      <div className="p-flex">
                        <div className="p-classFlex">
                          <label className="settings-lbl">
                            <p className="settings-p">Postnr</p>
                            <input
                              placeholder="Postnr..."
                              type="text"
                              className="p-input-inline p-text-input"
                              pattern="[0-4]*"
                            />
                          </label>
                        </div>
                        <div className="p-classFlex">
                          <label className="settings-lbl">
                            <p className="settings-p">Poststed</p>
                            <input
                              placeholder="Poststed..."
                              type="text"
                              className="p-input-inline p-text-input"
                            />
                          </label>
                        </div>
                      </div>
                    </fieldset>
                    <button type="submit">Lagre endringer</button>
                  </form>
                </div>
              ),
            }[this.state.currentPage]
          }
        </div>
      </div>
    );
  }
}
