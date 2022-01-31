import { call, all, takeEvery, put, takeLatest } from 'redux-saga/effects';
import { API } from 'aws-amplify';
import { listProjects } from '../../graphql/projectQueries';
import { formatProjectsData } from '../helpers/projectSagaHelper';
import {
  ADD_PROJECT,
  DELETE_PROJECT,
  FETCH_PROJECTS,
  PROJECT_DELETED,
  SET_PROJECTS_STATE,
} from '../ducks/projectsReducer';
import {
  deleteProject as deleteP,
  createProject,
} from '../../graphql/mutations';
import { v4 as uuidv4 } from 'uuid';

export function* fetchProjects() {
  try {
    // Switch authMode to AMAZON_COGNITO_USER_POOLS for non-public access
    const { data } = yield call([API, 'graphql'], {
      query: listProjects,
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    });
    const projects = data.listProjects.items;
    yield put({
      type: SET_PROJECTS_STATE,
      payload: projects,
    });
  } catch (e) {
    console.log(e);
  }
}

export function* deleteProject({ id }) {
  try {
    yield call([API, 'graphql'], {
      query: deleteP,
      variables: { input: id },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    });
    yield put({
      type: PROJECT_DELETED,
      payload: id,
    });
  } catch (e) {
    console.log(e);
  }
}

export function* addProject({ values }) {
  try {
    const { name, zip, city, address, description } = values;
    let projectDetails = {
      id: uuidv4(),
      name,
      postalCode: zip,
      city,
      address,
      description,
    };
    yield call([API, 'graphql'], {
      query: createProject,
      variables: { input: projectDetails },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    });
    yield fetchProjects();
  } catch (e) {
    console.log(e);
  }
}

function* watchProjectsFetch() {
  yield takeEvery(FETCH_PROJECTS, fetchProjects);
}

function* watchProjectAdd() {
  yield takeLatest(ADD_PROJECT, addProject);
}

function* watchProjectDelete() {
  yield takeEvery(DELETE_PROJECT, deleteProject);
}

export function* projectSaga() {
  yield all([watchProjectsFetch(), watchProjectDelete(), watchProjectAdd()]);
}
