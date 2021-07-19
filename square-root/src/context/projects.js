import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listProjects } from "../api/queries";
import { createProject } from "../api/mutations";

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

  createNewProject = async (values) => {
    try {
      let projectDetails = {name: values.name, postalCode: values.zip, city: values.city, address: values.address};
      await API.graphql(
        graphqlOperation(createProject, { input: projectDetails })
      );
    } catch (err) {
      console.log("error creating todo:", err);
    }
  }

  componentDidMount() {
    this.fetchProjects();
  }

  render() {
    return (
      <ProjectContext.Provider
        value={{
          ...this.state,
          fetchProjects: this.fetchProjects,
          createProject: this.createNewProject
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
