import React, { useState } from "react";
import "../styles/Plants.css";
import PlantMiniature from "./PlantMiniature";
import SinglePlant from "./SinglePlant";

export default function PlantsList({ plants, conceptPlants }) {
  const [showPlantModal, setShowPlantModal] = useState(false);
  const [activePlant, setActivePlant] = useState(null);
  const [features, setFeatures] = useState([]);

  const openModal = (plant, features) => {
    setShowPlantModal(true);
    setActivePlant(plant);
    setFeatures(features);
  };

  const closeModal = () => {
    setShowPlantModal(false);
    setActivePlant(null);
    setFeatures([]);
  };

  if (plants.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no plants matched your search parameters</h3>
      </div>
    );
  }

  let cP = [];
  plants = plants.map((plant) => {
    let found = false;
    conceptPlants && conceptPlants.map((p) => {
      if (p.norwegian_name === plant.norwegian_name) found = true;
    })
    
    return (
      <PlantMiniature
        key={plant.id}
        plant={plant}
        conceptPlant={found}
        showModal={showPlantModal}
        setShowPlantModal={openModal}
      />
    );
  });

  return (
    <>
      <div className="plantList">
        <div className="plantList-center">{plants}</div>
      </div>
      {activePlant && (
        <SinglePlant
          plant={activePlant}
          showModal={showPlantModal}
          setShowPlantModal={closeModal}
          features={features}
        />
      )}
      ;
    </>
  );
}
