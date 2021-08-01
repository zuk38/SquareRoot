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
  const { getConcept, saveModifiedConcept } = context;
  const concept = getConcept(conceptName);
  const [modalOpen, setModalOpen] = useState(false);
  const [plantsNumber, setPlantsNumber] = useState(0);
  const [conceptPlants, setConceptPlants] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [currentPlant, setCurrentPlant] = useState(null);

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
    setPlantsNumber(conceptPlants.length);
  }, [conceptPlants]);

  useEffect(() => {
    console.log(quantity)
    if (!currentPlant) return
    const nP = document.getElementById(currentPlant.norwegian_name);
    const lP = document.getElementById(currentPlant.latin_name);

    if (nP) {
      nP.value = quantity;
      console.log("lalala")
    }
    if (lP) lP.value = quantity;
  }, [quantity]);

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

  const onAdd = (plant) => {
    setCurrentPlant(plant)
    const exist = conceptPlants.find(
      (x) => x.norwegian_name === plant.norwegian_name
    );
    if (!exist) {
      setConceptPlants([...conceptPlants, { ...plant, quantity: 1 }]);
      setQuantity(1)
    } else {
      setConceptPlants(
        conceptPlants.map((x) =>
          x.norwegian_name === plant.norwegian_name
            ? { ...exist, quantity: exist.quantity + 1 }
            : x
        )
      );
      setQuantity(exist.quantity + 1)
    }
  };

  const onRemove = (plant) => {
    setCurrentPlant(plant)
    const exist = conceptPlants.find(
      (x) => x.norwegian_name === plant.norwegian_name
    );
    if (exist.quantity === 1) {
      onRemoveCompletely(plant);
      setQuantity(0)
    } else {
      setConceptPlants(
        conceptPlants.map((x) =>
          x.norwegian_name === plant.norwegian_name
            ? { ...exist, quantity: exist.quantity - 1 }
            : x
        )
      );
      setQuantity(exist.quantity - 1)
    }
    
  };

  const onRemoveCompletely = (plant) => {
    setConceptPlants(
      conceptPlants.filter((x) => x.norwegian_name !== plant.norwegian_name)
    );
  };

  const handleQuantityInput = (e, plant) => {
    e.preventDefault();
    setCurrentPlant(plant)
    const exist = conceptPlants.find(
      (x) => x.norwegian_name === plant.norwegian_name
    );
    let value = parseInt(e.target.value);
    console.log(value)
    if (value === 0 || !Number.isInteger(value)) {
      value = 0;
      onRemoveCompletely(plant)
      return
    } else if (value < 0) {
      value = quantity
    }
    setConceptPlants(
      conceptPlants.map((x) =>
        x.norwegian_name === plant.norwegian_name
          ? { ...exist, quantity: value }
          : x
      )
    );
    setQuantity(value)
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
          plantsNumber={plantsNumber}
          onAdd={onAdd}
          onRemove={onRemove}
          onRemoveCompletely={onRemoveCompletely}
          handleQuantityInput={handleQuantityInput}
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
          onAdd={onAdd}
          onRemove={onRemove}
          conceptPlants={conceptPlants}
          handleQuantityInput={handleQuantityInput}
        />
      </>
    </ConceptProvider>
  );
}
