import { GET_CHARACTERS } from "graphql/queries/characters";

const mocks = [
  {
    request: {
      query: GET_CHARACTERS,
      variables: {
        page: 1,
        name: "",
        status: "",
        species: "",
        type: "",
        gender: ""
      }
    },
    result: {
      data: {
        characters: {
          info: {
            pages: 1,
            next: 1,
            count: 1
          },
          results: [
            {
              name: "Abradolf Lincler",
              status: "unknown",
              species: "Human",
              type: "Genetic experiment",
              gender: "Male",
              image: "Image url",
              location: {
                name: "Location"
              },
              origin: {
                name: "Origin"
              },
              id: 1
            }
          ]
        }
      }
    }
  }
];

export { mocks };
