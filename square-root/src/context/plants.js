import React, { Component } from "react";
import items from "../data.js";

const PlantContext = React.createContext();

class PlantProvider extends Component {
  state = {
    plants: [],
    sortedPlants: [], //filtered
    featuredPlants: [],
    loading: true,
    //filters
    type: 'all',
    nursery: '',  //norwegian or external
    origin: '', //native or imported 
    light: '', //shadow lover or sun seeker
    greenspace_category: 'all',
    size: 0,
    minSize: 0,
    maxSize: 0,
    climateZone: 'all',
    edible: false,
    pollinator_friendly: false,
    pet_kids_friendly: false,
    rain_garden: false, 
    air_puryfying: false
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
