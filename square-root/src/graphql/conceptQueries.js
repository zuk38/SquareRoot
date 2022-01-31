export const listCategorys = /* GraphQL */ `
  query ListCategorys(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        category_name
        concepts {
          items {
            concept {
              name
            }
          }
        }
        plants {
          items {
            plant {
              norwegian_name
              latin_name
            }
          }
        }
      }
      nextToken
    }
  }
`;

export const listConcepts = /* GraphQL */ `
  query ListConcepts(
    $filter: ModelConceptFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConcepts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        owner
        userDefined
        image
        price
        description
        createdAt
        updatedAt
        categories {
          items {
            category {
              category_name
            }
          }
        }
        plants {
          items {
            quantity
            plant {
              id
              metadata {
                norwegian_name
                latin_name
                #type
                #native
                #norwegian_nursery
                #size_in_cm
                #image

                #climate_zone
                #pollinator_friendly
                #edible
                #rain_garden
                #pet_kids_friendly
                #air_puryfying
                #sun_seeker
              }
            }
          }
        }
      }
      nextToken
    }
  }
`;
export const createConceptPlant = /* GraphQL */ `
  mutation CreateConceptPlant(
    $input: CreateConceptPlantInput!
    $condition: ModelConceptPlantConditionInput
  ) {
    createConceptPlant(input: $input, condition: $condition) {
      id
      plant_id
      concept_id
      quantity
      createdAt
      updatedAt
      owner
    }
  }
`;
