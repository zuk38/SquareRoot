import React, { useState, useEffect } from "react";
import "./SinglePlant.css";
import Modal from "react-modal";
import Title from "./Title";
import { CSSTransition } from "react-transition-group";

Modal.setAppElement("body");

export default function SinglePlant({
  plant,
  showModal,
  setShowPlantModal,
  features,
}) {
  const { name, img, norwegian_nursery, sun_seeker, native } = plant;

  const [planBenefits, setPlantBenefits] = useState([]);
  useEffect(() => {
    setPlantBenefits([...features]);
  }, []);

  const removeFeatures = (e) => {
    var array = [...planBenefits]; // make a separate copy of the array
    var index = array.indexOf(e);
    if (index !== -1) {
      array.splice(index, 1);
      setPlantBenefits(...array);
    }
  };

  const normalizeFeatures = () => {
    let normalizedBenefits = [];
    for (var i of planBenefits) {
      if (i == "pollinator_friendly")
        normalizedBenefits.push("pollinator friendly");
      if (i == "edible") normalizedBenefits.push("edible");
      if (i == "pet_kids_friendly")
        normalizedBenefits.push("pet & children friendly");
      if (i == "air_puryfying") normalizedBenefits.push("air puryfying");
    }
    return normalizedBenefits.join(", ");
  };

  removeFeatures(norwegian_nursery);
  removeFeatures(native);
  removeFeatures(sun_seeker);
  console.log(planBenefits);

  const featureMap = [
    /*{
      featureName: "Suitable for", 
      featureContent: greenspace_category
    },
    {
      featureName: "Size", 
      featureContent: size
    },
    {
      featureName: "Type", 
      featureContent: type
    },*/
    {
      feature: norwegian_nursery,
      featureName: "Nursery:",
      featureContent: norwegian_nursery ? `norwegian` : `external`,
    },
    {
      feature: native,
      featureName: "Origin:",
      featureContent: native ? `local` : `imported`,
    },
    {
      feature: sun_seeker,
      featureName: "Light:",
      featureContent: sun_seeker ? `sun seeker` : `shadow lover`,
    },
    {
      featureName: "Benefits:",
      featureContent: normalizeFeatures(),
    },
  ];

  return (
    <Modal
      isOpen={showModal}
      onRequestClose={setShowPlantModal}
      className="plant-modal"
      contentLabel="Plant Modal"
      closeTimeoutMS={500}
    >
      <button
        onClick={setShowPlantModal}
        className="btn-plant-modal-close"
        alt="Lukk"
      >
        <i class="fas fa-times fa-lg"></i>
      </button>

      <div className="plant-modal-header">
        <Title
          title={name.toUpperCase()}
          subtitle={name.toUpperCase()}
          style="plant-modal-title"
        />
      </div>
      <div className="plant-modal-content">
        <div className="plant-modal-img-container">
          <img src={img} alt={name} />
        </div>
        <div className="features-container">
          {features &&
            featureMap.map((feature) => (
              <div className="feature">
                <div className="feature-name">{feature.featureName}</div>
                <div className="feature-content">{feature.featureContent}</div>
              </div>
            ))}
        </div>
      </div>
    </Modal>
  );
}
