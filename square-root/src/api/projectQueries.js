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
        createdAt
        updatedAt
        greenspaces {
          items {
            name
            description
            concepts {
              items {
                name
              }
            }
          }
        }
        members {
          items {
            member {
              username
              role
              name
            }
          }
        }
      }
      nextToken
    }
  }
`;
