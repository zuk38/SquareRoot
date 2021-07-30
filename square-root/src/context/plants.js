import React, { Component } from "react";
import { API } from "aws-amplify";
import { listPlants } from "../api/plantsQueries";

const PlantContext = React.createContext();

export default class PlantProvider extends Component {
  state = {
    plants: [],
    sortedPlants: [], //filtered
    featuredPlants: [],
    loading: true,
    //filters
    type: "",
    category: [],
    climate_zone: "",
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
    name: "all",
  };

  fetchPlants = async () => {
    try {
      // Switch authMode to API_KEY for public access
      const { data } = await API.graphql({
        query: listPlants,
        authMode: "API_KEY",
      });
      let plants = this.formatData(data.listPlants.items);
      console.log(plants);
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
    return plant;
  };

  handleChange = (selection) => {
    if (selection === undefined) return;
    console.log(selection)

    let id = selection[0].id,
      value = selection[0].value;

    console.log(id);
    console.log(value);
    console.log(this.state[id]);

    if (id === "type" || id === "category" || id === "climate_zone") {
      if (!this.state[id].includes(value)) {
        this.setState(
          {
            [id]: this.state[id].concat([value]),
          },
          () => this.filterPlants()
        );
      } else {
        let newArray = [...this.state[id]];
        console.log(newArray)
        newArray.splice(newArray.indexOf(value), 1);
        console.log(newArray);
        this.setState(
          {
            [id]: newArray,
            //[id]: "",
          },
          () => this.filterPlants()
        );
      }
    } else {
      this.setState(
        (prevState) => ({
          [id]: !prevState[id],
        }),
        () => this.filterPlants()
      );
    }
  };

  searchName = (n) => {
    console.log(n);
    this.setState(
      {
        name: n,
      },
      () => {
        this.filterPlants();
      } //filter as a callback depending on state
    );
  };

  filterPlants = () => {
    console.log(this.state);
    //backup all original values
    let {
      plants,
      type,
      category,
      size_in_cm,
      minSize,
      maxSize,
      climate_zone,
      shadow_lover,
      rain_garden,
      name,
    } = this.state;

    let tempPlants = [...plants];
    let state = this.state;
    console.log(state);
    let plant = null;

    //transform value from string
    size_in_cm = parseInt(size_in_cm);

    /*if (name !== "all") {
      plant = tempPlants.find((plant) => plant.norwegian_name === name);
    }*/

    //filter by properties
    [
      "edible",
      "pollinator_friendly",
      "pet_kids_friendly",
      "air_puryfying",
      "sun_seeker",
      "shadow_lover",
      "native",
      "norwegian_nursery",
      "type",
      "climate_zone",
      "category",
    ].forEach(function(filterBy) {
      var filterValue;

      if (filterBy === "type" && type != "")
        filterValue = state[filterBy].toLowerCase();
      else if (
        (filterBy === "climate_zone" && climate_zone != "") ||
        (filterBy === "category" && category != "")
      ) {
        filterValue = state[filterBy];
        //filterValue = filterValue[filterValue.length - 1];
        category.includes(filterValue)
          ? category.splice(category.indexOf(filterValue))
          : category.push(filterValue);
        console.log(category);
      } else filterValue = state[filterBy];

      console.log(filterValue);

      if (filterValue) {
        if (filterBy === "shadow_lover" && shadow_lover) {
          tempPlants = tempPlants.filter(function(item) {
            return item["sun_seeker"] === !filterValue[0];
          });
        } else if (filterBy === "category" && category) {
          tempPlants = tempPlants.filter((plant) => {
            return plant.category.some((r) => category.indexOf(r) >= 0);
          });
        } else if (filterBy != "shadow_lover") {
          tempPlants = tempPlants.filter(function(item) {
            return item[filterBy] === filterValue[0];
          });
        }
      }
    });

    // filter by size
    /*tempPlants = tempPlants.filter(
      (plant) => plant.size_in_cm >= minSize && plant.size_in_cm <= maxSize
    );
     */

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
      let category = item.metadata.category.items.map((item) => {
        let c = item.category.category_name;
        return c;
      });
      let plant = { image, ...metadata, category: category };
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
          searchName: this.searchName,
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
