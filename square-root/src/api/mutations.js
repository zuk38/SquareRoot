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
export const updatePlant = /* GraphQL */ `
  mutation UpdatePlant(
    $input: UpdatePlantInput!
    $condition: ModelPlantConditionInput
  ) {
    updatePlant(input: $input, condition: $condition) {
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
export const deletePlant = /* GraphQL */ `
  mutation DeletePlant(
    $input: DeletePlantInput!
    $condition: ModelPlantConditionInput
  ) {
    deletePlant(input: $input, condition: $condition) {
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
export const createGreenspacePlants = /* GraphQL */ `
  mutation CreateGreenspacePlants(
    $input: CreateGreenspacePlantsInput!
    $condition: ModelGreenspacePlantsConditionInput
  ) {
    createGreenspacePlants(input: $input, condition: $condition) {
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
export const updateGreenspacePlants = /* GraphQL */ `
  mutation UpdateGreenspacePlants(
    $input: UpdateGreenspacePlantsInput!
    $condition: ModelGreenspacePlantsConditionInput
  ) {
    updateGreenspacePlants(input: $input, condition: $condition) {
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
export const deleteGreenspacePlants = /* GraphQL */ `
  mutation DeleteGreenspacePlants(
    $input: DeleteGreenspacePlantsInput!
    $condition: ModelGreenspacePlantsConditionInput
  ) {
    deleteGreenspacePlants(input: $input, condition: $condition) {
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
