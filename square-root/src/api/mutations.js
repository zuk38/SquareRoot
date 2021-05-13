/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const updatePlant = /* GraphQL */ `
  mutation UpdatePlant(
    $input: UpdatePlantInput!
    $condition: ModelPlantConditionInput
  ) {
    updatePlant(input: $input, condition: $condition) {
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
export const deletePlant = /* GraphQL */ `
  mutation DeletePlant(
    $input: DeletePlantInput!
    $condition: ModelPlantConditionInput
  ) {
    deletePlant(input: $input, condition: $condition) {
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
export const createPlantMetadata = /* GraphQL */ `
  mutation CreatePlantMetadata(
    $input: CreatePlantMetadataInput!
    $condition: ModelPlantMetadataConditionInput
  ) {
    createPlantMetadata(input: $input, condition: $condition) {
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
export const updatePlantMetadata = /* GraphQL */ `
  mutation UpdatePlantMetadata(
    $input: UpdatePlantMetadataInput!
    $condition: ModelPlantMetadataConditionInput
  ) {
    updatePlantMetadata(input: $input, condition: $condition) {
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
export const deletePlantMetadata = /* GraphQL */ `
  mutation DeletePlantMetadata(
    $input: DeletePlantMetadataInput!
    $condition: ModelPlantMetadataConditionInput
  ) {
    deletePlantMetadata(input: $input, condition: $condition) {
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
export const createGreenspacePlant = /* GraphQL */ `
  mutation CreateGreenspacePlant(
    $input: CreateGreenspacePlantInput!
    $condition: ModelGreenspacePlantConditionInput
  ) {
    createGreenspacePlant(input: $input, condition: $condition) {
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
export const updateGreenspacePlant = /* GraphQL */ `
  mutation UpdateGreenspacePlant(
    $input: UpdateGreenspacePlantInput!
    $condition: ModelGreenspacePlantConditionInput
  ) {
    updateGreenspacePlant(input: $input, condition: $condition) {
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
export const deleteGreenspacePlant = /* GraphQL */ `
  mutation DeleteGreenspacePlant(
    $input: DeleteGreenspacePlantInput!
    $condition: ModelGreenspacePlantConditionInput
  ) {
    deleteGreenspacePlant(input: $input, condition: $condition) {
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
export const updateGreenspace = /* GraphQL */ `
  mutation UpdateGreenspace(
    $input: UpdateGreenspaceInput!
    $condition: ModelGreenspaceConditionInput
  ) {
    updateGreenspace(input: $input, condition: $condition) {
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
export const deleteGreenspace = /* GraphQL */ `
  mutation DeleteGreenspace(
    $input: DeleteGreenspaceInput!
    $condition: ModelGreenspaceConditionInput
  ) {
    deleteGreenspace(input: $input, condition: $condition) {
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
