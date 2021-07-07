import React, { Component } from "react";
import { API } from "aws-amplify";
import { listGreenspaces } from "../api/greenspaceQueries";

const GreenspaceContext = React.createContext();

export default class GreenspaceProvider extends Component {
  state = {
    greenspaces: [],
    featuredGreenspaces: [],
    loading: false,
  };

  fetchGreenspaces = async () => {
    try {
      const { data } = await API.graphql({
        query: listGreenspaces,
        authMode: "API_KEY",
      });

      let greenspaces = this.formatData(data.listGreenspaces.items);
      console.log(greenspaces)
      let featuredGreenspaces = greenspaces.filter((greenspace) => greenspace.featured === true);
      
      this.setState({
        greenspaces,
        featuredGreenspaces,
        loading: false,
      });

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  getGreenspace = (name) => {
    let tempGreenspaces = [...this.state.greenspaces];
    const greenspace = tempGreenspaces.find(
      (greenspace) => greenspace.name === name
    );
    return greenspace;
  };

  formatData(items) {
    console.log(items)
    let tempItems = items.map((item) => {
      let tempPlants = item.plants.items.map((p) => {
        let metadata = p.plant.metadata;
        let id = p.plant.id
        let plant = { id, ...metadata}
        console.log(plant)
        return plant;
      })
      let name = item.name
      let description = item.description
      let image = item.image
      let featured = item.featured
      let greenspace = { name, description, image, featured, plants: tempPlants};
      return greenspace
    })
    return tempItems
  }

  componentDidMount() {
    this.fetchGreenspaces();
  }

  render() {
    return (
      <GreenspaceContext.Provider
        value={{
          ...this.state,
          getGreenspace: this.getGreenspace,
        }}
      >
        {this.props.children}
      </GreenspaceContext.Provider>
    );
  }
}

const GreenspaceConsumer = GreenspaceContext.Consumer;

export { GreenspaceProvider, GreenspaceConsumer, GreenspaceContext };
