import React, { Component, useState, useContext, useEffect } from "react";
import "../../styles/Customize.css";
import Title from "../../components/Title";
import ProjectPlantsModal from "../../components/user/ProjectPlantsModal";
import PlantsContainer from "../../components/PlantsContainer";
import { ConceptContext, ConceptProvider } from "../../context/concepts";
import { Link } from "react-router-dom";

export default function Customize(props) {
  const conceptName = props.match.params.conceptName;
  const context = useContext(ConceptContext);
  const { getConcept } = context;
  const concept = getConcept(conceptName);
  const [modalOpen, setModalOpen] = useState(false);
  const [plantsNumber, setPlantsNumber] = useState(0);
  const [conceptPlants, setConceptPlants] = useState([]);

  useEffect(() => {
    if (concept) {
      const { plants } = concept;
      if (plants) {
        setPlantsNumber(plants.length);
        setConceptPlants(plants);
      }
    }
  }, [concept]);

  useEffect(() => {
    setPlantsNumber(conceptPlants.length)
  }, [conceptPlants])

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

  const handleChangeInPlants = (plant) => {
    console.log(plant);
    console.log(conceptPlants)
    
    if (!conceptPlants.some(p => p.norwegian_name === plant.norwegian_name)) {
      console.log("Add")
      setConceptPlants(oldArray => [...oldArray, plant]);
      
    } else {
      console.log("Remove")
      let newArray = [...conceptPlants];
      newArray.splice(newArray.findIndex(p => p.norwegian_name === plant.norwegian_name), 1);
      setConceptPlants(newArray);
    }
    console.log(conceptPlants)
  };

  return (
    <ConceptProvider>
      <>
        <div className="customize-header">
          <div>
            <a href={`/concepts/${conceptName}`} className="btn-back btn-white">
              <i className="fas fa-chevron-left" />
              Tilbake til {conceptName}
            </a>
          </div>
          <div>
            <h5>Tilpass {conceptName}</h5>
          </div>
          <div>
            <button className="btn-orders" onClick={() => setModalOpen(true)}>
              <i className="fas fa-tasks fa-2x" />
              <div className="order-items">
                {plantsNumber}
                <i className="fas fa-chevron-left" />
              </div>
            </button>
          </div>
        </div>

        <ProjectPlantsModal
          modalOpen={modalOpen}
          setModalOpen={(value) => setModalOpen(value)}
          name={conceptName}
          plants={conceptPlants}
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
        <PlantsContainer conceptPlants={conceptPlants} handleChangeInPlants={handleChangeInPlants}/>
      </>
    </ConceptProvider>
  );
}

/*export default class Customize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      conceptName: this.props.match.params.conceptName,
      conceptPlants: [],
      plantsNumber: 0,
    };
  }

  static contextType = ConceptContext;

  setConceptPlants(plants) {
    this.setState({
      conceptPlants: plants,
      plantsNumber: plants.length
    })
  }

  handleChangeInPlants(plant) {
    if (!this.state.conceptPlants.includes(plant)) {
      this.setState({
        conceptPlants: this.state.conceptPlants.concat([plant]),
        plantsNumber: this.state.plantsNumber + 1
      }, () => console.log(this.state))
    } else {
      let newArray = [...this.state.conceptPlants]
      newArray.splice(newArray.indexOf(plant), 1);
      this.setState({
        conceptPlants: newArray,
        plantsNumber: newArray.length
      })
    }
  }

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
    plants && this.setConceptPlants(plants)

    return (
      <>
        <div className="customize-header">
          <div>
            <a
              href={`/concepts/${this.state.conceptName}`}
              className="btn-back btn-white"
            >
              <i className="fas fa-chevron-left" />
              Tilbake til {this.state.conceptName}
            </a>
          </div>
          <div>
            <h5>Tilpass {this.state.conceptName}</h5>
          </div>
          <div>
            <button
              className="btn-orders"
              onClick={() => this.setState({ modalOpen: true })}
            >
              <i className="fas fa-tasks fa-2x" />
              <div className="order-items">
                {this.plantsNumber}
                <i className="fas fa-chevron-left" />
              </div>
            </button>
          </div>
        </div>

        <ProjectPlantsModal
          modalOpen={this.state.modalOpen}
          setModalOpen={(value) => this.setState({ modalOpen: value })}
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
        <PlantsContainer
          conceptPlants={this.state.conceptPlants}
          handleChange={(plant) => this.handleChangeInPlants(plant)}
        />
      </>
    );
  }
}*/

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
