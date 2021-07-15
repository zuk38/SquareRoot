import React, { Component } from "react";
import { API } from "aws-amplify";
import { listProjects } from "../api/queries";

const ProjectContext = React.createContext();

export default class ProjectProvider extends Component {
  state = {
    projects: [],
    loading: true,
  };

  fetchProjects = async () => {
    try {
      // Switch authMode to AMAZON_COGNITO_USER_POOLS for non-public access
      const { data } = await API.graphql({
        query: listProjects,
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      const projects = data.listProjects.items;
      console.log(projects);
      this.setState({
        projects,
        loading: false,
      });
      console.log(this.state)
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.fetchProjects();
  }

  render() {
    return (
      <ProjectContext.Provider
        value={{
          ...this.state,
          fetchProjects: this.fetchProjects
        }}
      >
        {this.props.children}
      </ProjectContext.Provider>
    );
  }
}

const ProjectConsumer = ProjectContext.Consumer;

export { ProjectProvider, ProjectConsumer, ProjectContext };

export function withProjectConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <ProjectConsumer>
        {value => <Component {...props} context={value} />}
      </ProjectConsumer>
    );
  };
}
