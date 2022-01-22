//actions
export const FETCH_PROJECTS = 'fetchProjects';
const PROJECTS_FETCHED = 'projectsFetched';

export const fetchProjects = () => ({
  type: FETCH_PROJECTS,
});

export const projectsFetched = (state) => ({
  type: PROJECTS_FETCHED,
  state,
});

export const initialState = {
  projects: [],
  currentMember: null,
  members: [],
};

const ProjectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROJECTS_FETCHED:
      return { ...initialState, ...action.state };
    default:
      return state;
  }
};

export const getProject = (name) => {
  let tempProjects = [...initialState.projects];
  return tempProjects.find((project) => project.name === name);
};

export default ProjectsReducer;
