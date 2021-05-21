/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProjectGroup = /* GraphQL */ `
  mutation CreateProjectGroup(
    $input: CreateProjectGroupInput!
    $condition: ModelProjectGroupConditionInput
  ) {
    createProjectGroup(input: $input, condition: $condition) {
      id
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateProjectGroup = /* GraphQL */ `
  mutation UpdateProjectGroup(
    $input: UpdateProjectGroupInput!
    $condition: ModelProjectGroupConditionInput
  ) {
    updateProjectGroup(input: $input, condition: $condition) {
      id
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteProjectGroup = /* GraphQL */ `
  mutation DeleteProjectGroup(
    $input: DeleteProjectGroupInput!
    $condition: ModelProjectGroupConditionInput
  ) {
    deleteProjectGroup(input: $input, condition: $condition) {
      id
      owner
      createdAt
      updatedAt
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
        greenspace_category_ID
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
        greenspace_category_ID
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
        greenspace_category_ID
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
export const createPlantMetadata = /* GraphQL */ `
  mutation CreatePlantMetadata(
    $input: CreatePlantMetadataInput!
    $condition: ModelPlantMetadataConditionInput
  ) {
    createPlantMetadata(input: $input, condition: $condition) {
      id
      greenspace_category_ID
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
      greenspace_category_ID
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
      greenspace_category_ID
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
    }
  }
`;
export const createGreenspacePlant = /* GraphQL */ `
  mutation CreateGreenspacePlant(
    $input: CreateGreenspacePlantInput!
    $condition: ModelGreenspacePlantConditionInput
  ) {
    createGreenspacePlant(input: $input, condition: $condition) {
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
          greenspace_category_ID
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
        category_ID
        image
        featured
        price
        description
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
export const updateGreenspacePlant = /* GraphQL */ `
  mutation UpdateGreenspacePlant(
    $input: UpdateGreenspacePlantInput!
    $condition: ModelGreenspacePlantConditionInput
  ) {
    updateGreenspacePlant(input: $input, condition: $condition) {
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
          greenspace_category_ID
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
        category_ID
        image
        featured
        price
        description
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
export const deleteGreenspacePlant = /* GraphQL */ `
  mutation DeleteGreenspacePlant(
    $input: DeleteGreenspacePlantInput!
    $condition: ModelGreenspacePlantConditionInput
  ) {
    deleteGreenspacePlant(input: $input, condition: $condition) {
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
          greenspace_category_ID
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
        category_ID
        image
        featured
        price
        description
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
export const createGreenspaceCategory = /* GraphQL */ `
  mutation CreateGreenspaceCategory(
    $input: CreateGreenspaceCategoryInput!
    $condition: ModelGreenspaceCategoryConditionInput
  ) {
    createGreenspaceCategory(input: $input, condition: $condition) {
      id
      category_id
      category_name
      createdAt
      updatedAt
    }
  }
`;
export const updateGreenspaceCategory = /* GraphQL */ `
  mutation UpdateGreenspaceCategory(
    $input: UpdateGreenspaceCategoryInput!
    $condition: ModelGreenspaceCategoryConditionInput
  ) {
    updateGreenspaceCategory(input: $input, condition: $condition) {
      id
      category_id
      category_name
      createdAt
      updatedAt
    }
  }
`;
export const deleteGreenspaceCategory = /* GraphQL */ `
  mutation DeleteGreenspaceCategory(
    $input: DeleteGreenspaceCategoryInput!
    $condition: ModelGreenspaceCategoryConditionInput
  ) {
    deleteGreenspaceCategory(input: $input, condition: $condition) {
      id
      category_id
      category_name
      createdAt
      updatedAt
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
      name
      category_ID
      image
      featured
      price
      description
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
export const updateGreenspace = /* GraphQL */ `
  mutation UpdateGreenspace(
    $input: UpdateGreenspaceInput!
    $condition: ModelGreenspaceConditionInput
  ) {
    updateGreenspace(input: $input, condition: $condition) {
      id
      name
      category_ID
      image
      featured
      price
      description
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
export const deleteGreenspace = /* GraphQL */ `
  mutation DeleteGreenspace(
    $input: DeleteGreenspaceInput!
    $condition: ModelGreenspaceConditionInput
  ) {
    deleteGreenspace(input: $input, condition: $condition) {
      id
      name
      category_ID
      image
      featured
      price
      description
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
