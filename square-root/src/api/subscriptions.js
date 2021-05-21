/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProjectGroup = /* GraphQL */ `
  subscription OnCreateProjectGroup {
    onCreateProjectGroup {
      id
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProjectGroup = /* GraphQL */ `
  subscription OnUpdateProjectGroup {
    onUpdateProjectGroup {
      id
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProjectGroup = /* GraphQL */ `
  subscription OnDeleteProjectGroup {
    onDeleteProjectGroup {
      id
      owner
      createdAt
      updatedAt
    }
  }
`;
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
      createdAt
      updatedAt
    }
  }
`;
