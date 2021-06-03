/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProjectTeam = /* GraphQL */ `
  subscription OnCreateProjectTeam {
    onCreateProjectTeam {
      id
      member_ID
      projectGroup_ID
      project {
        id
        owner
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateProjectTeam = /* GraphQL */ `
  subscription OnUpdateProjectTeam {
    onUpdateProjectTeam {
      id
      member_ID
      projectGroup_ID
      project {
        id
        owner
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteProjectTeam = /* GraphQL */ `
  subscription OnDeleteProjectTeam {
    onDeleteProjectTeam {
      id
      member_ID
      projectGroup_ID
      project {
        id
        owner
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
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
      greenspaces {
        items {
          id
          projectID
          greenspaceID
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
      greenspaces {
        items {
          id
          projectID
          greenspaceID
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
      greenspaces {
        items {
          id
          projectID
          greenspaceID
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
