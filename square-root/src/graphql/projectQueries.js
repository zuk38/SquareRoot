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
        description
        createdAt
        updatedAt
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
