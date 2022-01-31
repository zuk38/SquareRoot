/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPlantMetadata = /* GraphQL */ `
  mutation CreatePlantMetadata(
    $input: CreatePlantMetadataInput!
    $condition: ModelPlantMetadataConditionInput
  ) {
    createPlantMetadata(input: $input, condition: $condition) {
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
export const updatePlantMetadata = /* GraphQL */ `
  mutation UpdatePlantMetadata(
    $input: UpdatePlantMetadataInput!
    $condition: ModelPlantMetadataConditionInput
  ) {
    updatePlantMetadata(input: $input, condition: $condition) {
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
export const deletePlantMetadata = /* GraphQL */ `
  mutation DeletePlantMetadata(
    $input: DeletePlantMetadataInput!
    $condition: ModelPlantMetadataConditionInput
  ) {
    deletePlantMetadata(input: $input, condition: $condition) {
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
export const createPlant = /* GraphQL */ `
  mutation CreatePlant(
    $input: CreatePlantInput!
    $condition: ModelPlantConditionInput
  ) {
    createPlant(input: $input, condition: $condition) {
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
export const updatePlant = /* GraphQL */ `
  mutation UpdatePlant(
    $input: UpdatePlantInput!
    $condition: ModelPlantConditionInput
  ) {
    updatePlant(input: $input, condition: $condition) {
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
export const deletePlant = /* GraphQL */ `
  mutation DeletePlant(
    $input: DeletePlantInput!
    $condition: ModelPlantConditionInput
  ) {
    deletePlant(input: $input, condition: $condition) {
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
      plant {
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
      owner
      concept {
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
    }
  }
`;
export const updateConceptPlant = /* GraphQL */ `
  mutation UpdateConceptPlant(
    $input: UpdateConceptPlantInput!
    $condition: ModelConceptPlantConditionInput
  ) {
    updateConceptPlant(input: $input, condition: $condition) {
      id
      plant_id
      concept_id
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
          latin_name
          norwegian_name
          createdAt
          updatedAt
        }
        concepts {
          nextToken
        }
      }
      owner
      concept {
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
    }
  }
`;
export const deleteConceptPlant = /* GraphQL */ `
  mutation DeleteConceptPlant(
    $input: DeleteConceptPlantInput!
    $condition: ModelConceptPlantConditionInput
  ) {
    deleteConceptPlant(input: $input, condition: $condition) {
      id
      plant_id
      concept_id
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
          latin_name
          norwegian_name
          createdAt
          updatedAt
        }
        concepts {
          nextToken
        }
      }
      owner
      concept {
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
    }
  }
`;
export const createConcept = /* GraphQL */ `
  mutation CreateConcept(
    $input: CreateConceptInput!
    $condition: ModelConceptConditionInput
  ) {
    createConcept(input: $input, condition: $condition) {
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
export const updateConcept = /* GraphQL */ `
  mutation UpdateConcept(
    $input: UpdateConceptInput!
    $condition: ModelConceptConditionInput
  ) {
    updateConcept(input: $input, condition: $condition) {
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
export const deleteConcept = /* GraphQL */ `
  mutation DeleteConcept(
    $input: DeleteConceptInput!
    $condition: ModelConceptConditionInput
  ) {
    deleteConcept(input: $input, condition: $condition) {
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
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
export const createConceptCategory = /* GraphQL */ `
  mutation CreateConceptCategory(
    $input: CreateConceptCategoryInput!
    $condition: ModelConceptCategoryConditionInput
  ) {
    createConceptCategory(input: $input, condition: $condition) {
      id
      concept_ID
      category_ID
      createdAt
      updatedAt
      concept {
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
      category {
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
    }
  }
`;
export const updateConceptCategory = /* GraphQL */ `
  mutation UpdateConceptCategory(
    $input: UpdateConceptCategoryInput!
    $condition: ModelConceptCategoryConditionInput
  ) {
    updateConceptCategory(input: $input, condition: $condition) {
      id
      concept_ID
      category_ID
      createdAt
      updatedAt
      concept {
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
      category {
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
    }
  }
`;
export const deleteConceptCategory = /* GraphQL */ `
  mutation DeleteConceptCategory(
    $input: DeleteConceptCategoryInput!
    $condition: ModelConceptCategoryConditionInput
  ) {
    deleteConceptCategory(input: $input, condition: $condition) {
      id
      concept_ID
      category_ID
      createdAt
      updatedAt
      concept {
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
      category {
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
    }
  }
`;
export const createPlantCategory = /* GraphQL */ `
  mutation CreatePlantCategory(
    $input: CreatePlantCategoryInput!
    $condition: ModelPlantCategoryConditionInput
  ) {
    createPlantCategory(input: $input, condition: $condition) {
      id
      plant_ID
      category_ID
      createdAt
      updatedAt
      plant {
        id
        latin_name
        norwegian_name
        createdAt
        updatedAt
        category {
          nextToken
        }
      }
      category {
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
    }
  }
`;
export const updatePlantCategory = /* GraphQL */ `
  mutation UpdatePlantCategory(
    $input: UpdatePlantCategoryInput!
    $condition: ModelPlantCategoryConditionInput
  ) {
    updatePlantCategory(input: $input, condition: $condition) {
      id
      plant_ID
      category_ID
      createdAt
      updatedAt
      plant {
        id
        latin_name
        norwegian_name
        createdAt
        updatedAt
        category {
          nextToken
        }
      }
      category {
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
    }
  }
`;
export const deletePlantCategory = /* GraphQL */ `
  mutation DeletePlantCategory(
    $input: DeletePlantCategoryInput!
    $condition: ModelPlantCategoryConditionInput
  ) {
    deletePlantCategory(input: $input, condition: $condition) {
      id
      plant_ID
      category_ID
      createdAt
      updatedAt
      plant {
        id
        latin_name
        norwegian_name
        createdAt
        updatedAt
        category {
          nextToken
        }
      }
      category {
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
    }
  }
`;
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
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
export const createProjectMember = /* GraphQL */ `
  mutation CreateProjectMember(
    $input: CreateProjectMemberInput!
    $condition: ModelProjectMemberConditionInput
  ) {
    createProjectMember(input: $input, condition: $condition) {
      id
      project_ID
      member_ID
      project {
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
      member {
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
      createdAt
      updatedAt
    }
  }
`;
export const updateProjectMember = /* GraphQL */ `
  mutation UpdateProjectMember(
    $input: UpdateProjectMemberInput!
    $condition: ModelProjectMemberConditionInput
  ) {
    updateProjectMember(input: $input, condition: $condition) {
      id
      project_ID
      member_ID
      project {
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
      member {
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteProjectMember = /* GraphQL */ `
  mutation DeleteProjectMember(
    $input: DeleteProjectMemberInput!
    $condition: ModelProjectMemberConditionInput
  ) {
    deleteProjectMember(input: $input, condition: $condition) {
      id
      project_ID
      member_ID
      project {
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
      member {
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
      createdAt
      updatedAt
    }
  }
`;
export const createMember = /* GraphQL */ `
  mutation CreateMember(
    $input: CreateMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    createMember(input: $input, condition: $condition) {
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
export const updateMember = /* GraphQL */ `
  mutation UpdateMember(
    $input: UpdateMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    updateMember(input: $input, condition: $condition) {
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
export const deleteMember = /* GraphQL */ `
  mutation DeleteMember(
    $input: DeleteMemberInput!
    $condition: ModelMemberConditionInput
  ) {
    deleteMember(input: $input, condition: $condition) {
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
