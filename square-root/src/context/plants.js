import React, { Component } from "react";
import items from "../data.js";

const PlantContext = React.createContext();

export default class PlantProvider extends Component {
  state = {
    plants: [],
    sortedPlants: [], //filtered
    featuredPlants: [],
    loading: true,
    //filters
    type: "all",
    nursery: "all", //norwegian or external
    origin: "all", //native or imported
    light: "all", //shadow lover or sun seeker
    greenspace_category: "all",
    size: 0,
    minSize: 0,
    maxSize: 0,
    climateZone: "all",
    edible: false,
    pollinator_friendly: false,
    pet_kids_friendly: false,
    rain_garden: false,
    air_puryfying: false,
  };

  //fetchPlants() {}

  getPlant = (name) => {
    let tempPlants = [...this.state.plants];
    const plant = tempPlants.find((plant) => plant.name === name);
    return plant;
  };

  handleChange = (event) => {
    //filtering
    const type = event.target.type;
    const name = event.target.name;
    const value = event.target.value;
    console.log(type, name, value);
  };

  filterRooms = () => {
    console.log("hello");
  };

  componentDidMount() {
    //this.fetchPlants();
    let plants = this.formatData(items);
    console.log(plants);
    let featuredPlants = plants.filter((plant) => plant.featured === true);
    let maxSize = Math.max(...plants.map((item) => item.size)); //find the max size from the data
    this.setState({
      plants,
      featuredPlants,
      sortedPlants: plants,
      loading: false,
      size: maxSize,
      maxSize: maxSize,
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
      <PlantContext.Provider
        value={{
          ...this.state,
          getPlant: this.getPlant,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </PlantContext.Provider>
    );
  }
}

const PlantConsumer = PlantContext.Consumer;

export { PlantProvider, PlantConsumer, PlantContext };

export function withPlantConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <PlantConsumer>
        {value => <Component {...props} context={value} />}
      </PlantConsumer>
    );
  };
}
