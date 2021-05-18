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
    norwegian_nursery: false, //norwegian or external
    origin: false, //native or imported
    light: false, //shadow lover or sun seeker
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
    const target = event.target; //to check if it's a checkbox
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;

    this.setState(
      {
        [name]: value,
      },
      this.filterRooms
    ); //filter as a callback depending on state
  };

  filterRooms = () => {
    //backup all original values
    let {
      plants,
      type,
      norwegian_nursery,
      origin,
      light,
      greenspace_category,
      size,
      minSize,
      maxSize,
      climateZone,
      edible,
      pollinator_friendly,
      pet_kids_friendly,
      rain_garden,
      air_puryfying,
    } = this.state;

    let tempPlants = [...plants];
    //transform value from string
    size = parseInt(size);

    // filter by type
    if (type !== "all") {
      tempPlants = tempPlants.filter((plant) => plant.type === type);
    }

    // filter by size
    tempPlants = tempPlants.filter(
      (plant) => plant.size >= minSize && plant.size <= maxSize
    );

    // filter by nursery
    if (norwegian_nursery) {
      tempPlants = tempPlants.filter((plant) => plant.norwegian_nursery === true);
    }

    // filter by origin
    if (origin) {
      tempPlants = tempPlants.filter((plant) => plant.origin === true);
    }

    // filter by light
    if (light) {
      tempPlants = tempPlants.filter((plant) => plant.light === true);
    }

    //change state
    this.setState({
      sortedPlants: tempPlants,
    });
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
      maxSize,
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
        {(value) => <Component {...props} context={value} />}
      </PlantConsumer>
    );
  };
}
