export const listPlants = /* GraphQL */ `
  query ListPlants(
    $filter: ModelPlantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        metadata {
          latin_name
          norwegian_name
          #type
          #native
          #norwegian_nursery
          #size_in_cm
          #image
          #featured
          #climate_zone
          #pollinator_friendly
          #edible
          #rain_garden
          #pet_kids_friendly
          #air_puryfying
          #sun_seeker
          category {
            items {
              category {
                category_name
              }
            }
          }
        }
        concepts {
          nextToken
        }
      }
      nextToken
    }
  }
`;
