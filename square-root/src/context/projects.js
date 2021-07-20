import React, { Component } from "react";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { listProjects, listMembers } from "../api/queries";
import { createProject } from "../api/mutations";
import { v4 as uuidv4 } from "uuid";
import { createMember } from "../api/mutations";

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
      console.log(this.state);
    } catch (err) {
      console.log(err);
    }
  };

  createNewProject = async (values) => {
    try {
      let projectDetails = {
        name: values.name,
        postalCode: values.zip,
        city: values.city,
        address: values.address,
      };
      await API.graphql(
        graphqlOperation(createProject, { input: projectDetails })
      );
    } catch (err) {
      console.log("error creating todo:", err);
    }
  };

  getProject = (name) => {
    let tempProjects = [...this.state.projects];
    const project = tempProjects.find((project) => project.name === name);
    return project;
  };

  createMember = async () => {
    let members;
    const user = await Auth.currentAuthenticatedUser();
    console.log(user.username);
    try {
      const { data } = await API.graphql({
        query: listMembers,
      });
      members = data.listMembers.items;
      console.log(members);
    } catch (err) {
      console.log(err);
    }
    const found = members.some((el) => el.username === user.username);
    if (found) return;

    try {
      await API.graphql(
        graphqlOperation(createMember, {
          input: { id: uuidv4(), username: user.username, role: user.attributes["custom:role"] },
        })
      );
    } catch (err) {
      console.log("error creating todo:", err);
    }
  };

  componentDidMount() {
    this.fetchProjects();
    this.createMember();
  }

  render() {
    return (
      <ProjectContext.Provider
        value={{
          ...this.state,
          fetchProjects: this.fetchProjects,
          createProject: this.createNewProject,
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
        {(value) => <Component {...props} context={value} />}
      </ProjectConsumer>
    );
  };
}
