import React, { useState } from "react";
import "../styles/Plants.css";
import PlantMiniature from "./PlantMiniature";
import SinglePlant from "./SinglePlant";
import { useLocation } from "react-router-dom";

export default function PlantsList(props) {
  const location = useLocation();
  let isCustomising;
  if (location.pathname.indexOf("/customize") <= -1) {
    isCustomising = false;
  } else {
    isCustomising = true;
  }
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

  const onAdd = (plant) => {
    console.log(plant);
    props.onAdd(plant);
  };

  const onRemove = (plant) => {
    console.log(plant);
    props.onRemove(plant);
  };

  if (props.plants.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no plants matched your search parameters</h3>
      </div>
    );
  }

  let plants = props.plants;

  plants = plants.map((plant) => {
    let found = false, quantity = 0;
    props.conceptPlants &&
      props.conceptPlants.map((p) => {
        if (p.norwegian_name === plant.norwegian_name) {
          found = true;
          quantity = p.quantity
        }
      });
    return (
      <PlantMiniature
        key={plant.id}
        plant={plant}
        conceptPlant={found}
        quantity={quantity}
        customising={isCustomising}
        showModal={showPlantModal}
        setShowPlantModal={openModal}
        onAdd={(plant) => onAdd(plant)}
        onRemove={(plant) => onRemove(plant)}
      />
    );
  });

  return (
    <>
      <div className="plantList">
        <div className={isCustomising ? "plantList-center-customise" : "plantList-center"}>{plants}</div>
      </div>
      {activePlant && (
        <SinglePlant
          plant={activePlant}
          showModal={showPlantModal}
          setShowPlantModal={closeModal}
          features={features}
        />
      )}
    </>
  );
}
