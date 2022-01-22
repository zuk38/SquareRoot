//actions
export const FETCH_CATEGORIES = 'fetchCategories';
const CATEGORIES_FETCHED = 'categoriesFetched';
export const FETCH_CONCEPTS = 'fetchConcepts';
const CONCEPTS_FETCHED = 'conceptsFetched';

export const fetchCategories = () => ({
  type: FETCH_CATEGORIES,
});

export const categoriesFetched = (state) => ({
  type: CATEGORIES_FETCHED,
  state,
});

export const fetchConcepts = () => ({
  type: FETCH_CONCEPTS,
});

export const conceptsFetched = (state) => ({
  type: CONCEPTS_FETCHED,
  state,
});

export const initialState = {
  concepts: [],
  tempConcepts: [],
  featuredConcepts: [],
  categories: [],
};

const ConceptsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORIES_FETCHED:
      return { ...initialState, ...action.state };
    case CONCEPTS_FETCHED:
      return { ...initialState, ...action.state };
    default:
      return state;
  }
};

export const getCategory = (name) => {
  let tempCategories = [...initialState.categories];
  return tempCategories.find((category) => category.category_name === name);
};

export const getConcept = (name) => {
  let tempConcepts = [...initialState.concepts];
  return tempConcepts.find((concept) => concept.name === name);
};

export default ConceptsReducer;
