import React, { Component } from "react";
import "../../styles/Customize.css";
import Title from "../../components/Title";
import ProjectPlantsModal from "../../components/user/ProjectPlantsModal";
import PlantsContainer from "../../components/PlantsContainer";
import { ConceptContext } from "../../context/concepts";
import { Link } from "react-router-dom";

export default class Customize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      conceptName: this.props.match.params.conceptName,
    };
  }

  static contextType = ConceptContext;

  render() {
    const { getConcept } = this.context;
    const concept = getConcept(this.state.conceptName);

    if (!concept) {
      return (
        <div className="error">
          <h3> no such concept could be found...</h3>
          <Link to="/" className="btn-primary">
            back home
          </Link>
        </div>
      );
    }

    const { plants } = concept;

    let plantsNumber;
    plants ? (plantsNumber = plants.length) : (plantsNumber = 0);

    return (
      <>
        <div className="customize-header">
          <div>
            <a href={`/concepts/${this.state.conceptName}`} className="btn-back btn-white">
              <i className="fas fa-chevron-left" />
              Tilbake til {this.state.conceptName}
            </a>
          </div>
          <div>
            <h5>Tilpass {this.state.conceptName}</h5>
          </div>
          <div>
            <button className="btn-orders" onClick={() => this.setState({modalOpen: true})}>
              <i className="fas fa-tasks fa-2x" />
              <div className="order-items">
                {plantsNumber}
                <i className="fas fa-chevron-left" />
              </div>
            </button>
          </div>
        </div>
  
        <ProjectPlantsModal
          modalOpen={this.state.modalOpen}
          setModalOpen={(value) => this.setState({modalOpen: value})}
          name={this.state.conceptName}
          plants={plants}
        />
        <div className="cust-concept-title">
          <Title
            title="Oslo"
            subtitle="I Oslo anbefales det med biologisk mangfoldige planter og
                temperaturregulerende planter. Vi kan skrive mer her for å gi mer
                informasjon."
            style="plants-title"
          />
        </div>
        <PlantsContainer conceptPlants={plants} />
      </>
    );
  }
}

/*function PlantPage() {  

  const [modalOpen, setModalOpen] = React.useState(false);


  return (
    <>
      <div className="customize">
        <a href="/Rooftop" class="btn-back btn-white">
          <i class="fas fa-chevron-left" />
          Tilbake til Takterrasse
        </a>

        <h5 className="customize-header">Tilpass Takterasse</h5>

        {/*BUTTON OPEN MODAL

        <button className="btn-orders" onClick={() => setModalOpen(true)}>
          <i className="fas fa-tasks fa-2x"></i>
          <div className="order-items">
            12{/*GET NUMBER OF ITEMS
            <i className="fas fa-chevron-left" />
          </div>
        </button>
      </div>

      {/*MODAL
      <ProjectPlantsModal modalOpen={modalOpen} setModalOpen={setModalOpen} />

      <div className="customize-content">
        <div className="cust-concept-title">
        <Title
        title="Oslo"
        subtitle="I Oslo anbefales det med biologisk mangfoldige planter og
              temperaturregulerende planter. Vi kan skrive mer her for å gi mer
              informasjon."
        style="plants-title"
      />
        </div>
        <div className="filters">
          {Object.keys(plantFilters).map((pf) => {
            return (
              <div>
                <b className="pf">{pf}</b>
                {plantFilters[pf].map((pfAlternative) => {
                  return (
                    <label>
                      <input
                        type="checkbox"
                        key={pfAlternative}
                        value={pfAlternative}
                        onClick={(event) =>
                          handleFilterChange(event, pf, pfAlternative)
                        }
                      />{" "}
                      {pfAlternative}{" "}
                    </label>
                  );
                })}
                <br />
              </div>
            );
          })}{" "}
        </div>

        <div className="pn">
          {filteredPlants.map((plant) => {
            return (
              <div className="plants">
                <label className="checkbox-container-float-right">
                  <input type="checkbox" />
                  <span class="checkmark-is-round"></span>
                </label>
                <img className="plant" src={plant.img} />

                <h3 className="name">{plant.name}</h3>
              </div>
            );
          })}{" "}
        </div>
      </div>
    </>
  );
}

export default PlantPage;*/
