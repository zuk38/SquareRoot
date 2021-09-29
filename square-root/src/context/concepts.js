
import React, { Component } from "react";
import { API, Auth, graphqlOperation } from "aws-amplify";
import {
  listCategorys,
  listConcepts,
  createConceptPlant,
} from "../api/conceptQueries";
import { v4 as uuidv4 } from "uuid";
import { createConcept } from "../api/mutations";

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
      console.log(categories);
      this.setState({
        categories,
        loadingCat: false,
      });
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
      console.log(data)
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

  saveModifiedConcept = async (concept, conceptPlants) => {
    console.log(concept);
    console.log(conceptPlants);

    let user = await Auth.currentAuthenticatedUser();

    let conceptID = uuidv4();
    let owner = user.username;
    let conceptDetails = {
      id: conceptID,
      name: concept["name"] + uuidv4(),
      owner: owner,
      userDefined: true,
      image: concept.image,
      featured: false,
      /*price: concept.price,
      description: concept.description,*/
   
    };

    try {
      await API.graphql(
        graphqlOperation(createConcept, {
          input: conceptDetails,
        })
      );
    } catch (err) {
      console.log("error creating todo:", err);
    }

    try {
      for (var i = 0, l = conceptPlants.length; i < l; i++) {
        let conceptPlantDetails = {
          id: uuidv4(),
          concept_id: conceptID,
          plant_id: conceptPlants[i].id,
          quantity: conceptPlants[i].quantity,
        };
        console.log(conceptPlantDetails);
        await API.graphql(
          graphqlOperation(createConceptPlant, {
            input: conceptPlantDetails,
          })
        );
      }
    } catch (err) {
      console.log("error creating todo:", err);
    }
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
    let m = this.highest(maintenance[0]);
    let tempItems = items.map((item) => {
      let benefits;

      let tempPlants = item.plants.items.map((p) => {
        let id = p.plant.id;
        let metadata = p.plant.metadata;
        let quantity = p.quantity;
        let plant = { id, quantity, ...metadata };
        console.log(plant)
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
      let category = { ...item, plants: tempPlants };
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
          saveModifiedConcept: this.saveModifiedConcept,
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
