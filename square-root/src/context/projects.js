import React, { Component } from "react";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { listMembers } from "../api/queries";
import { listProjects } from "../api/projectQueries";
import { v4 as uuidv4 } from "uuid";
import {
  createProject,
  createMember,
  createProjectMember,
} from "../api/mutations";

const ProjectContext = React.createContext();

export default class ProjectProvider extends Component {
  state = {
    projects: [],
    currentMember: null,
    loading: true,
    members: [],
  };

  fetchProjects = async () => {
    try {
      // Switch authMode to AMAZON_COGNITO_USER_POOLS for non-public access
      const { data } = await API.graphql({
        query: listProjects,
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      const projects = this.formatData(data.listProjects.items);
      console.log(projects);
      this.setState({
        projects,
        loading: false,
      });
    } catch (err) {
      console.log(err);
    }
  };

  createNewProject = async (values) => {
    try {
      let project_ID = uuidv4();
      let projectDetails = {
        id: project_ID,
        name: values.name,
        postalCode: values.zip,
        city: values.city,
        address: values.address,
      };
      await API.graphql(
        graphqlOperation(createProject, { input: projectDetails })
      );
      await API.graphql(
        graphqlOperation(createProjectMember, {
          input: {
            id: uuidv4(),
            project_ID: project_ID,
            member_ID: this.state.currentMember.id,
          },
        })
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
    let members, user;
    try {
      user = await Auth.currentAuthenticatedUser();
      console.log(user);
      const { data } = await API.graphql({
        query: listMembers,
      });
      members = data.listMembers.items;
      const found = members.find((el) => el.username === user.username);
      if (found) {
        this.setState({ currentMember: found });
        return;
      }
    } catch (err) {
      console.log(err);
    }

    try {
      let member = {
        id: uuidv4(),
        username: user.username,
        role: user.attributes["custom:role"],
        name: user.attributes.name,
      };
      await API.graphql(
        graphqlOperation(createMember, {
          input: member,
        })
      );
      this.setState({ currentMember: member });
    } catch (err) {
      console.log("error creating todo:", err);
    }
  };

  formatData = (items) => {
    let tempItems = items.map((item) => {
      let members = item.members.items.map((member) => {
        let name = member.member.name;
        let role = member.member.role;
        let username = member.member.username;
        let m = { name, username, role };
        return m;
      });
      let greenspaces = item.greenspaces.items;
      let project = { ...item, members, greenspaces };
      return project;
    });
    return tempItems;
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
          getProject: this.getProject,
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
