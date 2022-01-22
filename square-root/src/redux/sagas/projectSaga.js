import { call, all, takeEvery } from 'redux-saga/effects';
import { API } from 'aws-amplify';
import { listProjects } from '../../api/projectQueries';
import { formatProjectsData } from '../helpers/projectSagaHelper';
import { FETCH_PROJECTS } from '../ducks/projectsReducer';

export function* fetchProjects() {
  try {
    // Switch authMode to AMAZON_COGNITO_USER_POOLS for non-public access
    const { data } = yield call([API, 'graphql'], {
      query: listProjects,
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    });
    formatProjectsData(data.listProjects.items);
  } catch (e) {
    console.log(e);
  }
}

/*fetchProjects = async () => {
  try {
    // Switch authMode to AMAZON_COGNITO_USER_POOLS for non-public access
    const { data } = await API.graphql({
      query: listProjects,
      authMode: 'AMAZON_COGNITO_USER_POOLS',
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
};*/

function* watchProjectsFetch() {
  yield takeEvery(FETCH_PROJECTS, fetchProjects);
}

export function* conceptSaga() {
  yield all([watchProjectsFetch()]);
}
