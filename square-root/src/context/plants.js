import React, { Component } from "react";
import { API } from "aws-amplify";
import { getPlant, listPlants } from "../api/queries";

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
    shadow_lover: false, //shadow lover or sun seeker
    size_in_cm: 0,
    minSize: 0,
    maxSize: 0,
    edible: false,
    pollinator_friendly: false,
    pet_kids_friendly: false,
    rain_garden: false,
    air_puryfying: false,
    name: "all"
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

  getPlant = (n) => {
    let tempPlants = [...this.state.plants];
    let plant = tempPlants.find((plant) => plant.norwegian_name === n);
    return plant    
  };

  handleChange = (selection) => {
    console.log(selection);
    let id, value;
    for (let i = 0; i < selection.length; i++) {
      id = selection[i].id;
      if (
        id === "type" ||
        id === "greenspace_category" ||
        id === "climate_zone"
      ) {
        value = selection[i].value.toLowerCase();
      } else {
        value = true;
      }

      console.log(id + ": " + value);
    }

    this.setState(
      {
        [id]: value,
      },
      () => {this.filterPlants()} //filter as a callback depending on state
    );
  };

  searchName = (n) => {
    console.log(n)
    this.setState(
      {
        name: n,
      },
      () => {this.filterPlants()} //filter as a callback depending on state
    );
  }

  filterPlants = () => {
    console.log(this.state);
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
      shadow_lover,
      edible,
      pollinator_friendly,
      pet_kids_friendly,
      rain_garden,
      air_puryfying,
      name,
    } = this.state;

    let tempPlants = [...plants];
    let state = this.state;
    let plant = null;

    //transform value from string
    size_in_cm = parseInt(size_in_cm);

    // filter by type
    if (type !== "all") {
      tempPlants = tempPlants.filter((plant) => plant.type === type);
    }

    if (name !== "all") {
      plant = tempPlants.find((plant) => plant.norwegian_name === name);
    }

    //filter by properties
    ["edible", "pollinator_friendly", "pet_kids_friendly", "air_puryfying"].forEach(function(filterBy) {
      var filterValue = state[filterBy];
      if (filterValue) {
        tempPlants = tempPlants.filter(function(item) {
          return item[filterBy] === filterValue;
        });
      }
    });

    // filter by type
    /*if (type !== "all") {
      tempPlants = tempPlants.filter((plant) => plant.type === type);
    }

    // filter by climate zone
    if (climate_zone !== "all") {
      tempPlants = tempPlants.filter(
        (plant) => plant.climate_zone === climate_zone
      );
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

    if (shadow_lover) {
      console.log("shadow");
      tempPlants = tempPlants.filter((plant) => plant.sun_seeker === false);
    }

    // filter by properties
    if (pollinator_friendly) {
      tempPlants = tempPlants.filter(
        (plant) => plant.pollinator_friendly === true
      );
    }
    if (edible) {
      tempPlants = tempPlants.filter((plant) => plant.edible === true);
    }
    if (pet_kids_friendly) {
      tempPlants = tempPlants.filter(
        (plant) => plant.pet_kids_friendly === true
      );
    }
    if (air_puryfying) {
      tempPlants = tempPlants.filter((plant) => plant.air_puryfying === true);
    } */

    //change state
    if (plant) {
      console.log(plant)
      this.setState({
        sortedPlants: plant,
      });
    } else {
    this.setState({
      sortedPlants: tempPlants,
    });
  }
  };

  componentDidMount() {
    this.fetchPlants();
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let image = item.metadata.image;
      let metadata = item.metadata;
      let plant = { image, ...metadata };
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
          searchName: this.searchName
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
