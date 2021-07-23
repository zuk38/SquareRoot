import React, { Component } from "react";
import { API } from "aws-amplify";
import { listCategorys, listConcepts } from "../api/conceptQueries"

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
    console.log("lalalalaa")
    try {
      const { data } = await API.graphql({
        query: listConcepts,
        authMode: "API_KEY",
      });

      let concepts = data.listConcepts.items;
      console.log(concepts)
      /*let featuredGreenspaces = greenspaces.filter((greenspace) => greenspace.featured === true);
      
      this.setState({
        greenspaces,
        featuredGreenspaces,
        loading: false,
      });*/

    } catch (error) {
      console.log(error);
    }
  };

  getCategory = (name) => {
    let tempCategories = [...this.state.categories]
    const category = tempCategories.find((category) => category.category_name === name);
    console.log(category)
    return category;
  };

  getConcept = (name) => {
    let tempConcepts = [...this.state.concepts]
    const concept = tempConcepts.find((concept) => concept.name === name);
    return concept;
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
          getConcept: this.getConcept,
          getCategory: this.getCategory
        }}
      >
        {this.props.children}
      </ConceptContext.Provider>
    );
  }
}

const ConceptConsumer = ConceptContext.Consumer;

export { ConceptProvider, ConceptConsumer, ConceptContext };

export function withConceptConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <ConceptConsumer>
        {(value) => <Component {...props} context={value} />}
      </ConceptConsumer>
    );
  };
}