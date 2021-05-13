import React, { Component } from "react";
import items from "../data.js";

const PlantContext = React.createContext();

class PlantProvider extends Component {
  state = {
    plants: [],
    sortedPlants: [], //filtered
    featuredPlants: [],
    loading: true,
  };
  //fetchPlants() {}

  getPlant = (name) => {
    let tempPlants = [...this.state.plants];
    const plant = tempPlants.find((plant) => plant.name === name);
    return plant;
  };

  componentDidMount() {
    //this.fetchPlants();
    let plants = this.formatData(items);
    console.log(plants);
    let featuredPlants = plants.filter((plant) => plant.featured === true);
    this.setState({
      plants,
      featuredPlants,
      sortedPlants: plants,
      loading: false,
    });
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let plant = item;
      return plant;
    });
    return tempItems;
  }

  render() {
    return (
      <PlantContext.Provider value={{ ...this.state, getPlant: this.getPlant }}>
        {this.props.children}
      </PlantContext.Provider>
    );
  }
}

const PlantConsumer = PlantContext.Consumer;

export { PlantProvider, PlantConsumer, PlantContext };
