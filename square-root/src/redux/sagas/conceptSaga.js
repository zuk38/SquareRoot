import { call, put, all, takeEvery } from 'redux-saga/effects';
import { listCategorys, listConcepts } from '../../graphql/conceptQueries';
import { API } from 'aws-amplify';
import {
  CONCEPTS_FETCHED,
  CATEGORIES_FETCHED,
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
    yield put({ type: CATEGORIES_FETCHED, payload: categories });
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
    yield put({ type: CONCEPTS_FETCHED, payload: concepts });
  } catch (e) {
    console.log(e);
  }
}

function* watchCatFetch() {
  yield takeEvery(FETCH_CATEGORIES, fetchCategories);
}

function* watchConceptsFetch() {
  yield takeEvery(FETCH_CONCEPTS, fetchConcepts);
}

export function* conceptSaga() {
  yield all([watchCatFetch(), watchConceptsFetch()]);
}
