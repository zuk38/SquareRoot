import React, { useState } from "react";
import "../styles/Plants.css";
import QualityBadge from "../images/quality.png";
import { ReactComponent as BeeIcon } from "../icons/bee.svg";
import { ReactComponent as EdibleIcon } from "../icons/eat.svg";
import { ReactComponent as NativeIcon } from "../icons/norway.svg";
import { ReactComponent as PetKidsIcon } from "../icons/pets.svg";
import { ReactComponent as AirIcon } from "../icons/air-purifier.svg";
import { ReactComponent as SunIcon } from "../icons/sun.svg";
import { ReactComponent as AddIcon } from "../icons/add.svg";

export default function PlantMiniature(props) {
  const [checkPlant, setCheckPlant] = useState(props.conceptPlant);
  const setCheckedPlant = () => {
    setCheckPlant(!checkPlant);
    props.handleChange(props.plant)
  };

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
          {props.customising ? (
            <div className="add-button" onClick={() => setCheckedPlant()}>
              <span>{checkPlant ? <AddIcon /> : <></>}</span>
            </div>
          ) : (
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
        </div>
      </article>
    </>
  );
}
