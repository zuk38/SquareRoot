import React from "react";
import "../../styles/Customize.css";
import Title from "../../components/Title";
import ProjectPlantsModal from "../../components/user/ProjectPlantsModal";

export default function Customize(props) {
  const conceptName = props.match.params.conceptName;
  let plantsNumber;
  props.plants ? plantsNumber = props.plants.length : plantsNumber = 0;

  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <div className="customize">
      <a href={`/concepts/${conceptName}`} class="btn-back btn-white">
        <i class="fas fa-chevron-left" />
        Tilbake til {conceptName}
      </a>
      <h5 className="customize-header">Tilpass {conceptName}</h5>

      <button className="btn-orders" onClick={() => setModalOpen(true)}>
          <i className="fas fa-tasks fa-2x"/>
          <div className="order-items">
            {plantsNumber}
            <i className="fas fa-chevron-left" />
          </div>
        </button>
        <ProjectPlantsModal modalOpen={modalOpen} setModalOpen={setModalOpen} name={conceptName} />
    </div>
  );
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
