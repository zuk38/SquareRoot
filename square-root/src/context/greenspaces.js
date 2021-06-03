import React, { Component } from "react";
import { API } from "aws-amplify";
import { listGreenspaces } from "../api/queries";

const GreenspaceContext = React.createContext();

export default class GreenspaceProvider extends Component {
  state = {
    greenspaces: [],
    featuredGreenspaces: [],
    loading: true,
  };

  fetchGreenspaces = async () => {
    try {
      const { data } = await API.graphql({
        query: listGreenspaces,
        authMode: "API_KEY",
      });

      let greenspaces = this.formatData(data.listGreenspaces.items);
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
