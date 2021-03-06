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
export const onCreateMember = /* GraphQL */ `
  subscription OnCreateMember {
    onCreateMember {
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
export const onUpdateMember = /* GraphQL */ `
  subscription OnUpdateMember {
    onUpdateMember {
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
export const onDeleteMember = /* GraphQL */ `
  subscription OnDeleteMember {
    onDeleteMember {
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
