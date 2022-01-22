import { call, put, all, takeEvery } from 'redux-saga/effects';
import { listCategorys, listConcepts } from '../../api/conceptQueries';
import { API } from 'aws-amplify';
import {
  categoriesFetched,
  conceptsFetched,
  FETCH_CATEGORIES,
  FETCH_CONCEPTS,
} from '../ducks/conceptsReducer';
import {
  formatCategoryData,
  formatConceptData,
} from '../helpers/conceptSagaHelper';

export function* fetchCategories() {
  try {
    const { data } = yield call([API, 'graphql'], {
      query: listCategorys,
      authMode: 'API_KEY',
    });
    let categories = formatCategoryData(data.listCategorys.items);
    yield put(categoriesFetched({ categories }));
  } catch (error) {
    console.log(error);
  }
}

export function* fetchConcepts() {
  try {
    const { data } = yield call([API, 'graphql'], {
      query: listConcepts,
      authMode: 'API_KEY',
    });
    let concepts = formatConceptData(data.listConcepts.items);
    //let featuredConcepts = concepts.filter((concept) => concept.featured);
    yield put(conceptsFetched({ concepts }));
  } catch (e) {
    console.log(e);
  }
}

/*fetchConcepts = async () => {
  try {
    const { data } = await API.graphql({
      query: listConcepts,
      authMode: 'API_KEY',
    });
    console.log(data);
    let tempConcepts = this.formatData(data.listConcepts.items);
    let concepts = this.formatConceptData(data.listConcepts.items);
    console.log(concepts);
    let featuredConcepts = concepts.filter((concept) => concept.featured);
    this.setState({
      concepts,
      tempConcepts,
      featuredConcepts,
      loading: false,
    });
  } catch (error) {
    console.log(error);
  }
};*/

function* watchCatFetch() {
  yield takeEvery(FETCH_CATEGORIES, fetchCategories);
}

function* watchConceptsFetch() {
  yield takeEvery(FETCH_CONCEPTS, fetchConcepts);
}

export function* conceptSaga() {
  yield all([watchCatFetch(), watchConceptsFetch()]);
}
