//export const listGreenspaces = /* GraphQL */ `
/*query ListGreenspaces(
    $filter: ModelGreenspaceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGreenspaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        featured
        price
        description
        category
        plants {
          items {
            id
            plant_id
            greenspace_id
            quantity
            plant {
              id
              metadataID
              metadata {
                id
                greenspace_category
                latin_name
                norwegian_name
                type
                native
                norwegian_nursery
                size_in_cm
                image
                featured
                climate_zone
                pollinator_friendly
                edible
                rain_garden
                pet_kids_friendly
                air_puryfying
                sun_seeker
              }
            }
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;*/

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
        subheader
        description
        createdAt
        updatedAt
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
              metadata {
                norwegian_name
              }
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
        greenspace_id
        name
        owner
        userDefined
        image
        featured
        price
        description
        createdAt
        updatedAt
        plants {
          items {
            plant {
              metadata {
                norwegian_name
              }
            }
          }
        }       
      }
      nextToken
    }
  }
`;
