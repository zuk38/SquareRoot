import React, { useState, useEffect } from "react";
import "../styles/Plants.css";
import QualityBadge from "../images/quality.png";
import { ReactComponent as BeeIcon } from "../icons/bee.svg";
import { ReactComponent as EdibleIcon } from "../icons/eat.svg";
import { ReactComponent as NativeIcon } from "../icons/norway.svg";
import { ReactComponent as PetKidsIcon } from "../icons/pets.svg";
import { ReactComponent as AirIcon } from "../icons/air-purifier.svg";
import { ReactComponent as SunIcon } from "../icons/sun.svg";
import ModifyPlantsQuantity from "./user/ModifyPlantsQuantity";

export default function PlantMiniature(props) {
  const [checked, setCheckPlant] = useState(props.conceptPlant);
  const setCheckedPlant = () => {
    setCheckPlant(!checked)
    props.onAdd(props.plant)
  }

  useEffect(() => {
    if (props.quantity === 0) setCheckPlant(false)
  }, [props.quantity])

  //const [quantity, setQuantity] = useState(props.quantity);

  /*useEffect(() => {
    let confirm = document.getElementById(props.plant.id);
    if (confirm != undefined) confirm.value = quantity
  }, [quantity]);

  const setCheckedPlant = () => {
    setCheckPlant(!checkPlant);
    if (quantity === 0) {
      setQuantity(1);
    }
    props.handleChange(props.plant);
  };

  const addQuantity = (e) => {
    e.preventDefault();
    setQuantity(quantity + 1);
    document.getElementById(props.plant.id).value = quantity;
  };

  const subtractQuantity = (e) => {
    e.preventDefault();
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
      setCheckedPlant(false);
    }
    document.getElementById(props.plant.id).value = quantity;
  };

  const handleQuantityInput = (e) => {
    e.preventDefault();
    let value = parseInt(e.target.value);
    console.log(value)
    if (value === 0 || !Number.isInteger(value)) {
      value = 0;
      setCheckedPlant(false);
      setQuantity(value);
      return
    } else if (value < 0) {
      value = quantity
    }
    console.log(value)
    setQuantity(value)
    document.getElementById(props.plant.id).value = value;
  };*/

  const iconMap = {
    pollinator_friendly: <BeeIcon />,
    edible: <EdibleIcon />,
    pet_kids_friendly: <PetKidsIcon />,
    air_puryfying: <AirIcon />,
    sun_seeker: <SunIcon />,
    native: <NativeIcon />,
  };

  const {
    norwegian_name,
    latin_name,
    image,
    norwegian_nursery,
    pollinator_friendly,
    edible,
    pet_kids_friendly,
    air_puryfying,
    sun_seeker,
    native,
  } = props.plant;

  let tempFeatures = {
    pollinator_friendly,
    edible,
    pet_kids_friendly,
    air_puryfying,
    sun_seeker,
    native,
  };

  var features = Object.keys(tempFeatures).filter(function(x) {
    return tempFeatures[x] !== false;
  });

  return (
    <>
      <article className="plant">
        <div className="plant-img-container">
          <img src={image} alt={norwegian_name} />

          {norwegian_nursery && !props.customising && (
            <div className="badge-top">
              <img src={QualityBadge} />
            </div>
          )}
          {!props.customising && (
            <div className="featureList">
              <div className="featureList-center">
                {features.map((icon, index) => (
                  <span className="icon-button" key={index}>
                    {iconMap[icon]}
                  </span>
                ))}
              </div>
            </div>
          )}

          {!props.showModal && (
            <button
              className="button is-dark plant-link"
              onClick={() => props.setShowPlantModal(props.plant, features)}
            >
              FEATURES
            </button>
          )}
          <div className="plant-name">
            <p>{latin_name.toUpperCase()}</p>
          </div>
          <div className="add-button-container">
            {props.customising && checked ? (
              <>
                <button className="add-button-added">Added</button>
                <ModifyPlantsQuantity plant={props.plant} quantity={props.quantity} onAdd={props.onAdd} onRemove={props.onRemove}/>
              </>
            ) : (
              <button className="add-btn" onClick={() => setCheckedPlant()}>
                Add to greenspace
              </button>
            )}
          </div>
        </div>
      </article>
    </>
  );
}
