import React, { Component } from 'react';
import { API } from 'aws-amplify';
import { listPlants } from '../api/plantsQueries';

const PlantContext = React.createContext();

export default class PlantProvider extends Component {
  state = {
    plants: [],
    sortedPlants: [], //filtered
    featuredPlants: [],
    loading: true,
    //filters
    type: [],
    category: [],
    climate_zone: [],
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
    name: '',
  };

  fetchPlants = async () => {
    try {
      // Switch authMode to API_KEY for public access
      const { data } = await API.graphql({
        query: listPlants,
        authMode: 'API_KEY',
      });
      let plants = this.formatData(data.listPlants.items);
      //console.log(plants);
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
    console.log(selection);
    let id, value;
    if (!Array.isArray(selection)) {
      if (!selection.value) id = selection.id;
      else {
        id = selection.id;
        value = selection.value;
      }
    } else {
      id = selection[0].id;
      value = selection[0].value;
    }

    console.log(id);
    console.log(value);

    if (id === 'type' || id === 'category' || id === 'climate_zone') {
      //all cleared
      if (!value) {
        this.setState(
          {
            [id]: [],
          },
          () => this.filterPlants()
        );
      } else if (!this.state[id].includes(value)) {
        //filter option added
        this.setState(
          {
            [id]: [...this.state[id], value],
          },
          () => this.filterPlants()
        );
      } else {
        //filter option removed
        let newArray = [...this.state[id]];
        newArray.splice(newArray.indexOf(value), 1);
        this.setState(
          {
            [id]: newArray,
          },
          () => this.filterPlants()
        );
      }
    } else {
      //name filter
      if (id === 'name') {
        if (!value || this.state[id] === value) {
          //cleared
          this.setState(
            {
              [id]: '',
            },
            () => this.filterPlants()
          );
        } else {
          //new name
          this.setState(
            {
              [id]: value,
            },
            () => this.filterPlants()
          );
        }
      } else {
        //boolean filters
        if (value === undefined) {
          if (id === 'norwegian_nursery' || id === 'native') {
            //all cleared in native and nursery
            this.setState(
              {
                norwegian_nursery: false,
                native: false,
              },
              () => this.filterPlants()
            );
          } else if (id === 'shadow_lover' || id === 'sun_seeker') {
            //all cleared in light
            this.setState(
              {
                shadow_lover: false,
                sun_seeker: false,
              },
              () => this.filterPlants()
            );
          }
        } else {
          console.log(id);
          if (id === 'shadow_lover') {
            this.setState(
              (prevState) => ({
                [id]: !prevState[id],
                sun_seeker: false,
              }),
              () => this.filterPlants()
            );
          } else if (id === 'sun_seeker') {
            this.setState(
              (prevState) => ({
                [id]: !prevState[id],
                shadow_lover: false,
              }),
              () => this.filterPlants()
            );
          } else {
            this.setState(
              (prevState) => ({
                [id]: !prevState[id],
              }),
              () => this.filterPlants()
            );
          }
        }
      }
    }
  };

  filterPlants = () => {
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
    //let plant = null;

    //transform value from string
    size_in_cm = parseInt(size_in_cm);

    //filter by properties
    [
      'edible',
      'pollinator_friendly',
      'pet_kids_friendly',
      'air_puryfying',
      'sun_seeker',
      'shadow_lover',
      'native',
      'norwegian_nursery',
      'type',
      'climate_zone',
      'category',
      'name',
    ].forEach(function (filterBy) {
      var filterValue = state[filterBy];

      if (filterValue && !Array.isArray(filterValue)) {
        if (filterBy === 'shadow_lover' && shadow_lover) {
          tempPlants = tempPlants.filter(function (item) {
            return item['sun_seeker'] === !filterValue;
          });
        } else if (filterBy != 'shadow_lover' && filterBy != 'name') {
          tempPlants = tempPlants.filter(function (item) {
            return item[filterBy] === filterValue;
          });
        } else if (filterBy === 'name' && name != '') {
          //console.log(tempPlants[3].norwegian_name)
          tempPlants = tempPlants.filter(
            (plant) => plant.norwegian_name === filterValue
          );
        }
      } else if (Array.isArray(filterValue)) {
        if (filterBy === 'category' && !category.length == 0) {
          tempPlants = tempPlants.filter((plant) => {
            return plant.category.some((r) => filterValue.indexOf(r) >= 0);
          });
        } else if (filterBy === 'type' && !type.length == 0) {
          filterValue = filterValue.map((fV) => fV.toLowerCase());
          tempPlants = tempPlants.filter((plant) => {
            return filterValue.indexOf(plant.type) !== -1;
          });
        } else if (filterBy === 'climate_zone' && !climate_zone.length == 0) {
          tempPlants = tempPlants.filter((plant) => {
            return filterValue.indexOf(plant.climate_zone) !== -1;
          });
        }
      }
    });

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
      let id = item.id;
      //let image = item.metadata.image;
      let metadata = item.metadata;
      let category = item.metadata.category.items.map((item) => {
        let c = item.category.category_name;
        return c;
      });
      //let plant = { id, image, ...metadata, category: category };
      let plant = { id, ...metadata, category: category };
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
