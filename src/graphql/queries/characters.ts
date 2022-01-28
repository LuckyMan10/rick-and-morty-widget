import { gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query Characters($page: Int!) {
    characters(page: $page) {
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
