//actions
export const FETCH_PLANTS = 'fetchPlants';
export const PLANTS_SET_STATE = 'setPlantsState';

export const fetchPlants = () => ({
  type: FETCH_PLANTS,
});

export const initialState = {
  plants: [],
};

const PlantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLANTS_SET_STATE:
      return { ...state, plants: action.payload };
    default:
      return state;
  }
};

export default PlantsReducer;
