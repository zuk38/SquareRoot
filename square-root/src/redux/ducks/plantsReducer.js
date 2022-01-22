//actions
export const FETCH_PLANTS = 'fetchPlants';
const PLANTS_FETCHED = 'plantsFetched';

export const fetchPlants = () => ({
  type: FETCH_PLANTS,
});

export const plantsFetched = (state) => ({
  type: PLANTS_FETCHED,
  state,
});

export const initialState = {
  plants: [],
  sortedPlants: [], //filteres
  featuredPlants: [],
  loading: true,
  //filters
  type: [],
  categories: [],
  climate_zone: [],
  norwegian_nursery: false, //norwegian or external
  native: false, //native or imported
  sun_seeker: false, //shadow lover or sun seeker
  shadow_lover: false, //shadow lover or sun seeker
  size_in_cm: 0,
  minSize: 0,
  maxSize: 0,
  edible: false,
  pollinator_friendly: false,
  pet_kids_friendly: false,
  rain_garden: false,
  air_puryfying: false,
  name: '',
};

const PlantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLANTS_FETCHED:
      return { ...initialState, ...action.state };
    default:
      return state;
  }
};

export const getPlant = (name) => {
  let tempPlants = [...initialState.plants];
  let plant = tempPlants.find((plant) =>
    plant.norwegian_name
      ? plant.norwegian_name === name
      : plant.latin_name === name
  );
  return plant;
};

export default PlantsReducer;
