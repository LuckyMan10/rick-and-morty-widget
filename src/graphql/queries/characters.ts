import { gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query Characters(
    $name: String!
    $status: String!
    $species: String!
    $type: String!
    $gender: String!
  ) {
    characters(
      filter: { name: $name, status: $status, species: $species, type: $type, gender: $gender }
    ) {
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
