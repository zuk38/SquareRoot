/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPlantMetadata = /* GraphQL */ `
  mutation CreatePlantMetadata(
    $input: CreatePlantMetadataInput!
    $condition: ModelPlantMetadataConditionInput
  ) {
    createPlantMetadata(input: $input, condition: $condition) {
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
export const updatePlantMetadata = /* GraphQL */ `
  mutation UpdatePlantMetadata(
    $input: UpdatePlantMetadataInput!
    $condition: ModelPlantMetadataConditionInput
  ) {
    updatePlantMetadata(input: $input, condition: $condition) {
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
export const deletePlantMetadata = /* GraphQL */ `
  mutation DeletePlantMetadata(
    $input: DeletePlantMetadataInput!
    $condition: ModelPlantMetadataConditionInput
  ) {
    deletePlantMetadata(input: $input, condition: $condition) {
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
      owner
      concept {
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
      owner
      concept {
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
      owner
      concept {
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
export const updateConcept = /* GraphQL */ `
  mutation UpdateConcept(
    $input: UpdateConceptInput!
    $condition: ModelConceptConditionInput
  ) {
    updateConcept(input: $input, condition: $condition) {
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
export const deleteConcept = /* GraphQL */ `
  mutation DeleteConcept(
    $input: DeleteConceptInput!
    $condition: ModelConceptConditionInput
  ) {
    deleteConcept(input: $input, condition: $condition) {
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
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
      category {
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
      category {
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
      category {
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
      category {
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
      category {
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
      category {
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
    }
  }
`;
export const createGreenspace = /* GraphQL */ `
  mutation CreateGreenspace(
    $input: CreateGreenspaceInput!
    $condition: ModelGreenspaceConditionInput
  ) {
    createGreenspace(input: $input, condition: $condition) {
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
export const updateGreenspace = /* GraphQL */ `
  mutation UpdateGreenspace(
    $input: UpdateGreenspaceInput!
    $condition: ModelGreenspaceConditionInput
  ) {
    updateGreenspace(input: $input, condition: $condition) {
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
export const deleteGreenspace = /* GraphQL */ `
  mutation DeleteGreenspace(
    $input: DeleteGreenspaceInput!
    $condition: ModelGreenspaceConditionInput
  ) {
    deleteGreenspace(input: $input, condition: $condition) {
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
        members {
          nextToken
        }
        createdAt
        updatedAt
        greenspaces {
          nextToken
        }
      }
      member {
        id
        username
        role
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
        members {
          nextToken
        }
        createdAt
        updatedAt
        greenspaces {
          nextToken
        }
      }
      member {
        id
        username
        role
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
        members {
          nextToken
        }
        createdAt
        updatedAt
        greenspaces {
          nextToken
        }
      }
      member {
        id
        username
        role
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
