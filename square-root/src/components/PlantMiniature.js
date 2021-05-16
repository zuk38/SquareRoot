import React, { useEffect } from "react";
import "../styles/Plants.css";
import QualityBadge from "../images/quality.png";
import { ReactComponent as BeeIcon } from "../icons/bee.svg";
import { ReactComponent as EdibleIcon } from "../icons/eat.svg";
import { ReactComponent as NativeIcon } from "../icons/norway.svg";
import { ReactComponent as PetKidsIcon } from "../icons/pets.svg";
import { ReactComponent as AirIcon } from "../icons/air-purifier.svg";
import { ReactComponent as SunIcon } from "../icons/sun.svg";
import PropTypes from "prop-types";

export default function PlantMiniature({
  plant,
  showModal,
  setShowPlantModal, 
}) {
  const iconMap = {
    pollinator_friendly: <BeeIcon />,
    edible: <EdibleIcon />,
    pet_kids_friendly: <PetKidsIcon />,
    air_puryfying: <AirIcon />,
    sun_seeker: <SunIcon />,
    native: <NativeIcon />,
  };

  const {
    name,
    img,
    norwegian_nursery,
    pollinator_friendly,
    edible,
    pet_kids_friendly,
    air_puryfying,
    sun_seeker,
    native,
  } = plant;

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
          <img src={img} alt={name} />
          {norwegian_nursery && (
            <div className="badge-top">
              <img src={QualityBadge} />
            </div>
          )}
          <div className="featureList">
            <div className="featureList-center">
              {features.map((icon) => (
                <span className="icon-button">{iconMap[icon]}</span>
              ))}
            </div>
          </div>
          {!showModal && (
            <button
              class="button is-dark plant-link"
              onClick={() => setShowPlantModal(plant, features)}
            >
              FEATURES
            </button>
          )}
          <p className="plant-info">{name.toUpperCase()}</p>
        </div>
      </article>
    </>
  );
}

PlantMiniature.propTypes = {
  plant: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    norwegian_nursery: PropTypes.bool.isRequired,
    pollinator_friendly: PropTypes.bool.isRequired,
    edible: PropTypes.bool.isRequired,
    pet_kids_friendly: PropTypes.bool.isRequired,
    air_puryfying: PropTypes.bool.isRequired,
    sun_seeker: PropTypes.bool.isRequired,
    native: PropTypes.bool.isRequired,
  }),
};
