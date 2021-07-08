/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProjectTeam = /* GraphQL */ `
  query GetProjectTeam($id: ID!) {
    getProjectTeam(id: $id) {
      id
      member_ID
      projectGroup_ID
      project {
        id
        owner
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listProjectTeams = /* GraphQL */ `
  query ListProjectTeams(
    $filter: ModelProjectTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjectTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        member_ID
        projectGroup_ID
        project {
          id
          owner
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getProjectGroup = /* GraphQL */ `
  query GetProjectGroup($id: ID!) {
    getProjectGroup(id: $id) {
      id
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listProjectGroups = /* GraphQL */ `
  query ListProjectGroups(
    $filter: ModelProjectGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjectGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      projectgroup_ID
      project_group {
        id
        owner
        createdAt
        updatedAt
      }
      name
      address
      city
      postalCode
      end_date
      owner
      createdAt
      updatedAt
      greenspaces {
        items {
          id
          projectID
          greenspaceID
          createdAt
          updatedAt
        }
        nextToken
      }
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
        projectgroup_ID
        project_group {
          id
          owner
          createdAt
          updatedAt
        }
        name
        address
        city
        postalCode
        end_date
        owner
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
      metadataID
      createdAt
      updatedAt
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
        createdAt
        updatedAt
      }
      greenspaces {
        items {
          id
          plant_id
          greenspace_id
          quantity
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
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
        metadataID
        createdAt
        updatedAt
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
export const getPlantMetadata = /* GraphQL */ `
  query GetPlantMetadata($id: ID!) {
    getPlantMetadata(id: $id) {
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
      createdAt
      updatedAt
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGreenspacePlant = /* GraphQL */ `
  query GetGreenspacePlant($id: ID!) {
    getGreenspacePlant(id: $id) {
      id
      plant_id
      greenspace_id
      quantity
      createdAt
      updatedAt
      plant {
        id
        metadataID
        createdAt
        updatedAt
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
          createdAt
          updatedAt
        }
        greenspaces {
          nextToken
        }
      }
      owner
      greenspace {
        id
        name
        image
        featured
        price
        description
        category
        createdAt
        updatedAt
        plants {
          nextToken
        }
        projects {
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
        quantity
        createdAt
        updatedAt
        plant {
          id
          metadataID
          createdAt
          updatedAt
        }
        owner
        greenspace {
          id
          name
          image
          featured
          price
          description
          category
          createdAt
          updatedAt
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
      image
      featured
      price
      description
      category
      createdAt
      updatedAt
      plants {
        items {
          id
          plant_id
          greenspace_id
          quantity
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      projects {
        items {
          id
          projectID
          greenspaceID
          createdAt
          updatedAt
        }
        nextToken
      }
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
        image
        featured
        price
        description
        category
        createdAt
        updatedAt
        plants {
          nextToken
        }
        projects {
          nextToken
        }
      }
      nextToken
    }
  }
`;
