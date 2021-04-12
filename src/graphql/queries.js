/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listPlants = /* GraphQL */ `
  query ListPlants(
    $filter: ModelPlantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        images
        price_per_meter
        pollinator_friendly
        edible
        allergen
        light_requirement
        watering_needs
        soil_type
        soil_depth
        featured
        rooftop
        rainbed
        indoor
        green_wall
        createdAt
        updatedAt
        greenspaces {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getPlant = /* GraphQL */ `
  query GetPlant($id: ID!) {
    getPlant(id: $id) {
      id
      name
      images
      price_per_meter
      pollinator_friendly
      edible
      allergen
      light_requirement
      watering_needs
      soil_type
      soil_depth
      featured
      rooftop
      rainbed
      indoor
      green_wall
      createdAt
      updatedAt
      greenspaces {
        items {
          id
          plant_id
          greenspace_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
    }
  }
`;
export const getGreenspacePlants = /* GraphQL */ `
  query GetGreenspacePlants($id: ID!) {
    getGreenspacePlants(id: $id) {
      id
      plant_id
      greenspace_id
      createdAt
      updatedAt
      plant {
        id
        name
        images
        price_per_meter
        pollinator_friendly
        edible
        allergen
        light_requirement
        watering_needs
        soil_type
        soil_depth
        featured
        rooftop
        rainbed
        indoor
        green_wall
        createdAt
        updatedAt
        greenspaces {
          nextToken
        }
      }
      customer
      greenspace {
        id
        name
        images
        price
        createdAt
        updatedAt
        plants {
          nextToken
        }
      }
    }
  }
`;
export const listGreenspacePlantss = /* GraphQL */ `
  query ListGreenspacePlantss(
    $filter: ModelGreenspacePlantsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGreenspacePlantss(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        plant_id
        greenspace_id
        createdAt
        updatedAt
        plant {
          id
          name
          images
          price_per_meter
          pollinator_friendly
          edible
          allergen
          light_requirement
          watering_needs
          soil_type
          soil_depth
          featured
          rooftop
          rainbed
          indoor
          green_wall
          createdAt
          updatedAt
        }
        customer
        greenspace {
          id
          name
          images
          price
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const listGreenspaces = /* GraphQL */ `
  query ListGreenspaces(
    $filter: ModelGreenspaceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGreenspaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        images
        price
        createdAt
        updatedAt
        plants {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getGreenspace = /* GraphQL */ `
  query GetGreenspace($id: ID!) {
    getGreenspace(id: $id) {
      id
      name
      images
      price
      createdAt
      updatedAt
      plants {
        items {
          id
          plant_id
          greenspace_id
          createdAt
          updatedAt
          customer
        }
        nextToken
      }
    }
  }
`;
