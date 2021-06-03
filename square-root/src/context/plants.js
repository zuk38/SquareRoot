import React, { Component } from "react";
import { API } from "aws-amplify";
import { listPlants } from "../api/queries";

const PlantContext = React.createContext();

export default class PlantProvider extends Component {
  state = {
    plants: [],
    sortedPlants: [], //filtered
    featuredPlants: [],
    loading: true,
    //filters
    type: "all",
    greenspace_category: "all",
    climate_zone: "all",
    norwegian_nursery: false, //norwegian or external
    native: false, //native or imported
    sun_seeker: false, //shadow lover or sun seeker
    size_in_cm: 0,
    minSize: 0,
    maxSize: 0,
    edible: false,
    pollinator_friendly: false,
    pet_kids_friendly: false,
    rain_garden: false,
    air_puryfying: false,
  };

  fetchPlants = async () => {
    try {
      // Switch authMode to API_KEY for public access
      const { data } = await API.graphql({
        query: listPlants,
        authMode: "API_KEY",
      });
      let plants = this.formatData(data.listPlants.items);
      let featuredPlants = plants.filter((plant) => plant.featured === true);
      let maxSize = Math.max(...plants.map((item) => item.size_in_cm)); //find the max size from the data
      this.setState({
        plants,
        featuredPlants,
        sortedPlants: plants,
        loading: false,
        size_in_cm: maxSize,
        maxSize,
      });
    } catch (err) {
      console.log(err);
    }
  };

  getPlant = (name) => {
    let tempPlants = [...this.state.plants];
    const plant = tempPlants.find((plant) => plant.norwegian_name === name);
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
      native,
      greenspace_category,
      size_in_cm,
      minSize,
      maxSize,
      climate_zone,
      sun_seeker,
      edible,
      pollinator_friendly,
      pet_kids_friendly,
      rain_garden,
      air_puryfying,
    } = this.state;

    let tempPlants = [...plants];
    //transform value from string
    size_in_cm = parseInt(size_in_cm);

    // filter by type
    if (type !== "all") {
      tempPlants = tempPlants.filter((plant) => plant.type === type);
    }

    // filter by size
    tempPlants = tempPlants.filter(
      (plant) => plant.size_in_cm >= minSize && plant.size_in_cm <= maxSize
    );

    // filter by nursery
    if (norwegian_nursery) {
      tempPlants = tempPlants.filter(
        (plant) => plant.norwegian_nursery === true
      );
    }

    // filter by origin
    if (native) {
      tempPlants = tempPlants.filter((plant) => plant.native === true);
    }

    // filter by light
    if (sun_seeker) {
      tempPlants = tempPlants.filter((plant) => plant.sun_seeker === true);
    }

    //change state
    this.setState({
      sortedPlants: tempPlants,
    });
  };

  componentDidMount() {
    this.fetchPlants();
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let image = item.metadata.image;
      let metadata = item.metadata;
      let plant = { image, ...metadata };
      console.log(plant)
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
