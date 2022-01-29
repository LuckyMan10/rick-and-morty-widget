import { gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query Characters(
    $page: Int!
    $name: String!
    $status: String!
    $species: String!
    $type: String!
    $gender: String!
  ) {
    characters(
      page: $page
      filter: { name: $name, status: $status, species: $species, type: $type, gender: $gender }
    ) {
      info {
        count
        pages
        next
      }
      results {
        id
        name
        status
        species
        gender
        type
        image
        location {
          name
        }
      }
    }
  }
`;

export { GET_CHARACTERS };
