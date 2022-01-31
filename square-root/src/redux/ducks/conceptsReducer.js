//actions
export const FETCH_CATEGORIES = 'fetchCategories';
export const CATEGORIES_FETCHED = 'categoriesFetched';
export const FETCH_CONCEPTS = 'fetchConcepts';
export const CONCEPTS_FETCHED = 'conceptsFetched';

export const fetchCategories = () => ({
  type: FETCH_CATEGORIES,
});

export const fetchConcepts = () => ({
  type: FETCH_CONCEPTS,
});

export const initialState = {
  concepts: [],
  categories: [],
};

const ConceptsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORIES_FETCHED:
      return { ...state, categories: action.payload };
    case CONCEPTS_FETCHED:
      return { ...state, concepts: action.payload };
    default:
      return state;
  }
};

export const selectCategory = (state, name) =>
  state.concepts.categories.find((category) => category.category_name === name);

export const selectConcept = (state, name) =>
  state.concepts.concepts.find((concept) => concept.name === name);

export const selectConceptFromCategory = (state, categoryName) =>
  state.concepts.concepts.filter((concept) =>
    concept.categories.some((category) => category === categoryName)
  );

export default ConceptsReducer;
