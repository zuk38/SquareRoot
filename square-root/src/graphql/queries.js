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
      description
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
        description
        members {
          nextToken
        }
        createdAt
        updatedAt
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
      name
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
        name
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
      latin_name
      norwegian_name
      createdAt
      updatedAt
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
        latin_name
        norwegian_name
        createdAt
        updatedAt
        category {
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
        latin_name
        norwegian_name
        createdAt
        updatedAt
        category {
          nextToken
        }
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
      name
      owner
      userDefined
      image
      price
      description
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
        plants {
          nextToken
        }
        categories {
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
      description
      createdAt
      updatedAt
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
        description
        createdAt
        updatedAt
        concepts {
          nextToken
        }
        plants {
          nextToken
        }
      }
      nextToken
    }
  }
`;
