import { gql } from '@apollo/client';

export const FETCH_CHARACTERS = gql`
  query AllPeople {
    allPeople {
      totalCount
      people {
        id
        name
        homeworld {
          id
          name
        }
      }
    }
  }
`;

export const GET_CHARACTER = gql`
  query Person($personId: ID) {
    person(id: $personId) {
      id
      birthYear
      eyeColor
      gender
      hairColor
      height
      mass
      name
      skinColor
      homeworld {
        id
        name
        orbitalPeriod
      }
      filmConnection {
        films {
          id
          releaseDate
          title
        }
      }
    }
  }
`;
