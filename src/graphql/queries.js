/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      name
      address
      city
      postalCode
      end_date
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        address
        city
        postalCode
        end_date
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGreenspaceCategory = /* GraphQL */ `
  query GetGreenspaceCategory($id: ID!) {
    getGreenspaceCategory(id: $id) {
      id
      category_id
      category_name
      createdAt
      updatedAt
      plant {
        id
        greenspace_category {
          id
          category_id
          category_name
          createdAt
          updatedAt
        }
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
        createdAt
        updatedAt
        plant {
          id
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const listGreenspaceCategorys = /* GraphQL */ `
  query ListGreenspaceCategorys(
    $filter: ModelGreenspaceCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGreenspaceCategorys(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        category_id
        category_name
        createdAt
        updatedAt
        plant {
          id
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
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const listPlants = /* GraphQL */ `
  query ListPlants(
    $filter: ModelPlantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        metadata {
          id
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
          createdAt
          updatedAt
        }
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
      createdAt
      updatedAt
      metadata {
        id
        greenspace_category {
          id
          category_id
          category_name
          createdAt
          updatedAt
        }
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
        createdAt
        updatedAt
        plant {
          id
          createdAt
          updatedAt
        }
      }
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
export const listPlantMetadatas = /* GraphQL */ `
  query ListPlantMetadatas(
    $filter: ModelPlantMetadataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlantMetadatas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        greenspace_category {
          id
          category_id
          category_name
          createdAt
          updatedAt
        }
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
        createdAt
        updatedAt
        plant {
          id
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getPlantMetadata = /* GraphQL */ `
  query GetPlantMetadata($id: ID!) {
    getPlantMetadata(id: $id) {
      id
      greenspace_category {
        id
        category_id
        category_name
        createdAt
        updatedAt
        plant {
          id
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
          createdAt
          updatedAt
        }
      }
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
      createdAt
      updatedAt
      plant {
        id
        createdAt
        updatedAt
        metadata {
          id
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
          createdAt
          updatedAt
        }
        greenspaces {
          nextToken
        }
      }
    }
  }
`;
export const getGreenspacePlant = /* GraphQL */ `
  query GetGreenspacePlant($id: ID!) {
    getGreenspacePlant(id: $id) {
      id
      plant_id
      greenspace_id
      createdAt
      updatedAt
      plant {
        id
        createdAt
        updatedAt
        metadata {
          id
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
          createdAt
          updatedAt
        }
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
        project {
          id
          name
          address
          city
          postalCode
          end_date
          owner
          createdAt
          updatedAt
        }
        category {
          id
          category_id
          category_name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        plants {
          nextToken
        }
      }
    }
  }
`;
export const listGreenspacePlants = /* GraphQL */ `
  query ListGreenspacePlants(
    $filter: ModelGreenspacePlantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGreenspacePlants(
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
        project {
          id
          name
          address
          city
          postalCode
          end_date
          owner
          createdAt
          updatedAt
        }
        category {
          id
          category_id
          category_name
          createdAt
          updatedAt
        }
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
      project {
        id
        name
        address
        city
        postalCode
        end_date
        owner
        createdAt
        updatedAt
      }
      category {
        id
        category_id
        category_name
        createdAt
        updatedAt
        plant {
          id
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
          createdAt
          updatedAt
        }
      }
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
