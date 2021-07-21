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
      members {
        items {
          id
          project_ID
          member_ID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      greenspaces {
        items {
          id
          project_ID
          name
          description
          owner
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
        name
        address
        city
        postalCode
        end_date
        owner
        members {
          nextToken
        }
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
export const getMember = /* GraphQL */ `
  query GetMember($id: ID!) {
    getMember(id: $id) {
      id
      username
      role
      projects {
        items {
          id
          project_ID
          member_ID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listMembers = /* GraphQL */ `
  query ListMembers(
    $filter: ModelMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        role
        projects {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPlantMetadata = /* GraphQL */ `
  query GetPlantMetadata($id: ID!) {
    getPlantMetadata(id: $id) {
      id
      category {
        items {
          id
          plant_ID
          category_ID
          createdAt
          updatedAt
        }
        nextToken
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
        category {
          nextToken
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
        category {
          nextToken
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
      }
      concepts {
        items {
          id
          plant_id
          concept_id
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
        concepts {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getConcept = /* GraphQL */ `
  query GetConcept($id: ID!) {
    getConcept(id: $id) {
      id
      greenspace_id
      name
      owner
      userDefined
      image
      featured
      price
      description
      categories {
        items {
          id
          concept_ID
          category_ID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      plants {
        items {
          id
          plant_id
          concept_id
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
        categories {
          nextToken
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
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      category_name
      header
      subheader
      plants {
        items {
          id
          plant_ID
          category_ID
          createdAt
          updatedAt
        }
        nextToken
      }
      concepts {
        items {
          id
          concept_ID
          category_ID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
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
        header
        subheader
        plants {
          nextToken
        }
        concepts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGreenspace = /* GraphQL */ `
  query GetGreenspace($id: ID!) {
    getGreenspace(id: $id) {
      id
      project_ID
      name
      description
      owner
      createdAt
      updatedAt
      concepts {
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
        project_ID
        name
        description
        owner
        createdAt
        updatedAt
        concepts {
          nextToken
        }
      }
      nextToken
    }
  }
`;
