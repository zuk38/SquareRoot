import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";
import { listProjects } from "../api/queries";

const ProjectContext = React.createContext();

const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      // Switch authMode to AMAZON_COGNITO_USER_POOLS for non-public access
      const { data } = await API.graphql({
        query: listProjects,
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      const projects = data.listProjects.items;
      console.log(projects)
      setProjects(projects);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ProjectContext.Provider value={{ projects, fetchProjects, loading }}>
      {children}
    </ProjectContext.Provider>
  );
};

export { ProjectContext, ProjectProvider };
