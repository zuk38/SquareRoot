import { call, put, all, takeEvery } from 'redux-saga/effects';
import { API } from 'aws-amplify';
import { listPlants } from '../../api/plantsQueries';
import { FETCH_PLANTS, plantsFetched } from '../ducks/plantsReducer';
import { formatPlantData } from '../helpers/plantsSagaHelper';

export function* fetchPlants() {
  try {
    const { data } = yield call([API, 'graphql'], {
      query: listPlants,
      authMode: 'API_KEY',
    });
    let plants = formatPlantData(data.listPlants.items);

    yield put(plantsFetched({ plants }));
  } catch (error) {
    console.log(error);
  }

  /*fetchPlants = async () => {
    try {
      // Switch authMode to API_KEY for public access
      const { data } = await API.graphql({
        query: listPlants,
        authMode: 'API_KEY',
      });
      let plants = this.formatData(data.listPlants.items);
      //console.log(plants);
      let featuredPlants = plants.filter((plant) => plant.featured === true);
        let maxSize = Math.max(...plants.map((item) => item.size_in_cm)); //find the max size from the data
      this.setState({
        plants,
        featuredPlants,
        sortedPlants: plants,
        loading: false,
        size_in_cm: maxSize,
        maxSize,
      });
    } catch (err) {
      console.log(err);
    }
  };*/
}

function* watchPlantsFetch() {
  yield takeEvery(FETCH_PLANTS, fetchPlants);
}

export function* plantsSaga() {
  yield all([watchPlantsFetch()]);
}
