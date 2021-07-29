import React, { Component } from "react";
import { API } from "aws-amplify";
import { listCategorys, listConcepts } from "../api/conceptQueries";

const ConceptContext = React.createContext();

export default class ConceptProvider extends Component {
  state = {
    concepts: [],
    tempConcepts: [],
    featuredConcepts: [],
    categories: [],
    loadingCat: true,
    loading: true,
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
    try {
      const { data } = await API.graphql({
        query: listConcepts,
        authMode: "API_KEY",
      });

      let tempConcepts = data.listConcepts.items;
      let concepts = this.formatData(data.listConcepts.items);
      console.log(concepts);
      let featuredConcepts = concepts.filter((concept) => concept.featured);
      this.setState({
        concepts,
        tempConcepts,
        featuredConcepts,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  getCategory = (name) => {
    let tempCategories = [...this.state.categories];
    const category = tempCategories.find(
      (category) => category.category_name === name
    );
    console.log(category);
    return category;
  };

  getConcept = (name) => {
    let tempConcepts = [...this.state.concepts];
    const concept = tempConcepts.find((concept) => concept.name === name);
    return concept;
  };

  modifyConceptPlants = (plants) => {
  }

  //saveCustomisedConcept()

  truthyObjLoop = (user) => {
    for (var key in user) {
      if (user.hasOwnProperty(key) && !user[key]) delete user[key];
    }
    return user;
  };

  highest = (arr) =>
    (arr || []).reduce(
      (acc, el) => {
        acc.k[el] = acc.k[el] ? acc.k[el] + 1 : 1;
        acc.max = acc.max ? (acc.max < acc.k[el] ? el : acc.max) : el;
        return acc;
      },
      { k: {} }
    ).max;

  formatData(items) {
    let maintenance = items.map((item) => {
      let tempItems = item.plants.items.map((p) => {
        return p.plant.metadata.sun_seeker;
      });
      return tempItems;
    });
    console.log(maintenance);
    let m = this.highest(maintenance[0]);
    let tempItems = items.map((item) => {
      let benefits;

      let tempPlants = item.plants.items.map((p) => {
        let metadata = p.plant.metadata;
        let quantity = p.quantity;
        let plant = { quantity, ...metadata };
        const {
          pollinator_friendly,
          edible,
          pet_kids_friendly,
          air_puryfying,
        } = metadata;

        benefits = {
          pollinator_friendly: pollinator_friendly,
          edible: edible,
          pet_kids_friendly: pet_kids_friendly,
          air_puryfying: air_puryfying,
        };
        this.truthyObjLoop(benefits);
        return plant;
      });
      let concept = {
        ...item,
        plants: tempPlants,
        benefits: benefits,
        maintenance: m,
      };
      return concept;
    });
    return tempItems;
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
          getCategory: this.getCategory,
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
