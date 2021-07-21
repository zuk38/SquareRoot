import React, { Component } from "react";
import { API } from "aws-amplify";
import { listCategorys } from "../api/queries"

const ConceptContext = React.createContext();

export default class ConceptProvider extends Component {
  state = {
    concepts: [],
    featuredConcepts: [],
    categories: [],
    loadingCat: true,
    loading: false,
  };

  fetchCategories = async () => {
    try {
      const { data } = await API.graphql({
        query: listCategorys,
        authMode: "API_KEY",
      });

      let categories = data.listCategorys.items;      
      
      this.setState({
        categories,
        loadingCat: false,
      });

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchConcepts = async () => {
    /*try {
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
    }*/
  };

  getConcept = (name) => {
    /*let tempGreenspaces = [...this.state.greenspaces];
    const greenspace = tempGreenspaces.find(
      (greenspace) => greenspace.name === name
    );
    return greenspace;*/
  };

  formatData(items) {
    console.log(items)
    /*let tempItems = items.map((item) => {
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
    return tempItems*/
  }

  componentDidMount() {
    this.fetchCategories();
    this.fetchConcepts();
  }

  render() {
    return (
      <ConceptContext.Provider
        value={{
          ...this.state,
        }}
      >
        {this.props.children}
      </ConceptContext.Provider>
    );
  }
}

const ConceptConsumer = ConceptContext.Consumer;

export { ConceptProvider, ConceptConsumer, ConceptContext };
