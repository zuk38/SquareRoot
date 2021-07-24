/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($owner: String!) {
    onCreateProject(owner: $owner) {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($owner: String!) {
    onUpdateProject(owner: $owner) {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($owner: String!) {
    onDeleteProject(owner: $owner) {
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
export const onCreateProjectMember = /* GraphQL */ `
  subscription OnCreateProjectMember {
    onCreateProjectMember {
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
      createdAt
      updatedAt
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
    }
  }
`;
export const onUpdateProjectMember = /* GraphQL */ `
  subscription OnUpdateProjectMember {
    onUpdateProjectMember {
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
      createdAt
      updatedAt
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
    }
  }
`;
export const onDeleteProjectMember = /* GraphQL */ `
  subscription OnDeleteProjectMember {
    onDeleteProjectMember {
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
      createdAt
      updatedAt
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
    }
  }
`;
export const onCreateConceptPlant = /* GraphQL */ `
  subscription OnCreateConceptPlant {
    onCreateConceptPlant {
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
export const onUpdateConceptPlant = /* GraphQL */ `
  subscription OnUpdateConceptPlant {
    onUpdateConceptPlant {
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
export const onDeleteConceptPlant = /* GraphQL */ `
  subscription OnDeleteConceptPlant {
    onDeleteConceptPlant {
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
export const onCreateConceptCategory = /* GraphQL */ `
  subscription OnCreateConceptCategory {
    onCreateConceptCategory {
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
        subheader
        description
        image
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
export const onUpdateConceptCategory = /* GraphQL */ `
  subscription OnUpdateConceptCategory {
    onUpdateConceptCategory {
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
        subheader
        description
        image
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
export const onDeleteConceptCategory = /* GraphQL */ `
  subscription OnDeleteConceptCategory {
    onDeleteConceptCategory {
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
        subheader
        description
        image
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
export const onCreatePlantCategory = /* GraphQL */ `
  subscription OnCreatePlantCategory {
    onCreatePlantCategory {
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
        subheader
        description
        image
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
export const onUpdatePlantCategory = /* GraphQL */ `
  subscription OnUpdatePlantCategory {
    onUpdatePlantCategory {
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
        subheader
        description
        image
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
export const onDeletePlantCategory = /* GraphQL */ `
  subscription OnDeletePlantCategory {
    onDeletePlantCategory {
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
        subheader
        description
        image
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
export const onCreateMember = /* GraphQL */ `
  subscription OnCreateMember {
    onCreateMember {
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
export const onUpdateMember = /* GraphQL */ `
  subscription OnUpdateMember {
    onUpdateMember {
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
export const onDeleteMember = /* GraphQL */ `
  subscription OnDeleteMember {
    onDeleteMember {
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
