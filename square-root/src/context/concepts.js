import React, { Component } from "react";
import { API } from "aws-amplify";
import { listCategorys, listConcepts } from "../api/conceptQueries";
import {
  createConceptPlant,
  createConceptCategory,
  createConcept,
} from "../api/conceptQueries";

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
      let categories = this.formatData(data.listCategorys.items);
      console.log(categories)
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

      let tempConcepts = this.formatData(data.listConcepts.items);
      let concepts = this.formatConceptData(data.listConcepts.items);
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

  saveModifiedConcept = (concept, conceptPlants) => {
    console.log(concept);
    console.log(conceptPlants);
  };

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

  formatConceptData(items) {
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

  formatData(items) {
    let categorys = items.map((item) => {
      let tempPlants = item.plants.items.map((plant) => {
        let norwegian_name = plant.plant.norwegian_name;
        let latin_name = plant.plant.latin_name;
        let p = { norwegian_name, latin_name };
        return p;
      });
      let category = {...item, plants: tempPlants}
      return category;
    });
    return categorys;
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
