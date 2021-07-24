import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./projects.css";
import "../../styles/Customize.css";
import icon from "../../images/proj_icon.png";
import LeftMenu from "../../components/user/LeftMenu";
import ProjectPlantsModal from "../../components/user/ProjectPlantsModal";
import { ProjectContext } from "../../context/projects";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      projectName: this.props.match.params.name,
    };
  }

  setModalOpen = (state) => {
    this.setState({ modalOpen: state});
  }

  static contextType = ProjectContext;

  render() {
    const { getProject } = this.context;
    const currentMember = this.context.currentMember;
    console.log(currentMember);
    const project = getProject(this.state.projectName);

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

    const { name } = project;

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
          </div>
        </div>
      </div>
    );
  }
}

/*export default class All_Projects extends Component {
  /*THIS NEEDS TO BE ADJUSTED TO PLANT LIST*/
/*state = {
    modalOpen: false,
    name: "",
    description: "",
    address: "",
    postalCode: "",
    city: "",
    error: "",
  };

  setModalOpen = (state) => {
    this.setState({ modalOpen: state});
  }

  render() {
    const { items } = this.state;
    return (
      <div class="p-row">
        {" "}
        <LeftMenu {...this.props} />​{" "}
        <div class="p-column right">
          {" "}
          <div className="title-container-greenspace">
            <div className="p-title">
              <img className="project-icon" src={icon} alt="Prosjektikon" />{" "}
              <h1 className="p-h1">Sørengkaia</h1>
            </div>
            <br />

            <h2 className="p-h2">Rolle: Eiendomsutvikler</h2>

            {/* --- REMOVING "ADD GREENSPACE" BUTTON ---
B/c: The user should understand that in order to add greenspace/plant, 
they should navigate through the menu, rather than us setting up another route for them to take.
           
<button className="btn-new-greenspace">
                <i class="fas fa-plus"></i>Legg til grøntområde
            </button>
        </div>

        <br/>

        
            <div className="green-container">
              <button onClick={this.openModal} className="btn-dash-greenspace">
                <div className="green-item">
                  <img
                    src={"../../../images/rooftop.png"}
                    className="project_img"
                  />
                  <div className="green-info">
                    <h3 className="p-h3">Oslo Takterrasse</h3>
                    <h4 className="p-h4">Vestre del</h4>
                  </div>
                </div>
              </button>

              <button onClick={this.openModal} className="btn-dash-greenspace">
                <div className="green-item">
                  <img
                    src={"../../../images/greenWall.png"}
                    className="project_img"
                  />
                  <div className="green-info">
                    <h3 className="p-h3">Grønn vegg</h3>
                    <h4 className="p-h4">2. etg</h4>
                  </div>
                </div>
              </button>

              <button onClick={this.openModal} className="btn-dash-greenspace">
                <div className="green-item">
                  <img
                    src={"../../../images/biodiversity.png"}
                    className="project_img"
                  />
                  <div className="green-info">
                    <h3 className="p-h3">Biomangfoldig hage</h3>
                    <h4 className="p-h4">Uteomårde 4. etg</h4>
                  </div>
                </div>
              </button>

              <button onClick={this.openModal} className="btn-dash-greenspace">
                <div className="green-item">
                  <img
                    src={"../../../images/plant-img1.png"}
                    className="project_img"
                  />
                  <div className="green-info">
                    <h3 className="p-h3">Kjøkkenhage</h3>
                    <h4 className="p-h4">2. etg vestover</h4>
                  </div>
                </div>
              </button>

              <button onClick={() => this.setModalOpen(true)} className="btn-dash-greenspace">
                <div className="green-item">
                  <img
                    src={"../../../images/musa.png"}
                    className="project_img"
                  />
                  <div className="green-info">
                    <h3 className="p-h3">Planter</h3>
                    <h4 className="p-h4">Inneplanter</h4>
                  </div>
                </div>
              </button>
              <ProjectPlantsModal modalOpen={this.state.modalOpen} setModalOpen={(value) => this.setModalOpen(value)} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}*/
