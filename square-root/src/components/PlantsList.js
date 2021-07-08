import React, { useState } from "react";
import "../styles/Plants.css";
import PlantMiniature from "./PlantMiniature";
import SinglePlant from "./SinglePlant";

export default function PlantsList({ plants }) {
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

  plants = plants.map((plant) => {
    return (
      <PlantMiniature
        key={plant.id}
        plant={plant}
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