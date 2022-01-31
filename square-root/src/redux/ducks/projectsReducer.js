//actions
export const FETCH_PROJECTS = 'fetchProjects';
export const SET_PROJECTS_STATE = 'setProjectsState';
export const DELETE_PROJECT = 'deleteProject';
const OPEN_MODAL = 'openAddProjectModal';
export const ADD_PROJECT = 'addProject';
export const PROJECT_DELETED = 'projectDeleted';

export const fetchProjects = () => ({
  type: FETCH_PROJECTS,
});

export const addProject = (values) => ({
  type: ADD_PROJECT,
  values,
});

export const deleteProject = (payload) => ({
  type: DELETE_PROJECT,
  payload,
});

export const openAddProjectModal = (payload) => ({
  type: OPEN_MODAL,
  payload,
});

export const initialState = {
  projects: [],
  addProjectModalOpen: false,
  currentMember: null,
  members: [],
};

const ProjectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROJECTS_STATE:
      return { ...state, projects: action.payload };
    case OPEN_MODAL:
      return { ...state, addProjectModalOpen: action.payload };
    case PROJECT_DELETED:
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default ProjectsReducer;
