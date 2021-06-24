import React, { useState } from "react";
import "../styles/Plants.css";
import PlantMiniature from "../components/PlantMiniature";
import SinglePlant from "../components/SinglePlant";

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

/*export default class PlantsList extends Component {
  constructor() {
    super();
    this.state = {
      showPlantModal: false,
      activePlant: null, //plant that triggered modal
      features: [],
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal = (plant, features) => {
    this.setState({
      showPlantModal: true,
      activePlant: plant,
      features: features,
    });
  };

  closeModal = () => {
    this.setState({
      showPlantModal: false,
      activePlant: null,
      features: [],
    });
  };

  setFeatures = (features) => {
    this.setState({
      features: features,
    });
  };

  render() {
      let {plants} = this.props.plants;
      console.log(plants)
    /*let { plants } = this.props.plants;

    if (plants.length === 0) {
      return (
        <div className="empty-search">
          <h3>unfortunately no plants matched your search parameters</h3>
        </div>
      );
    }*/

/*plants = plants.map((plant) => {
      return (
        <PlantMiniature
          key={plant.Id}
          plant={plant}
          showModal={this.state.showPlantModal}
          setShowPlantModal={this.openModal}
        />
      );
    });*/

/*return (
      <>
        <Title
          title="PLANTER"
          subtitle="I Oslo anbefales det med biologisk mangfoldige planter og
              temperaturregulerende planter. Vi kan skrive mer her for å gi mer
              informasjon."
          style="plants-title"
        />
        <div className="plantList">
          <div className="plantList-center">{plants}</div>
        </div>
        {this.state.activePlant && (
          <SinglePlant
            plant={this.state.activePlant}
            showModal={this.state.showPlantModal}
            setShowPlantModal={this.closeModal}
            features={this.state.features}
          />
        )}
        ;
      </>
    );
  }
}*/
