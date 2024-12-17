import { client } from '../index';
import { GET_CHARACTER, FETCH_CHARACTERS } from '../queries/character.query';
import { ICharacter, IFetchAllCharactersResponse, IGetCharacterResponse } from '../../interfaces/character.interface';

export const fetchCharacters = async (page: number, search?: string) => {
  const result = await client.query<IFetchAllCharactersResponse>({
    query: FETCH_CHARACTERS,
  });

  let allPeople = result.data.allPeople.people;

  if (search) {
    const lowerCasedSearch = search.toLowerCase();
    allPeople = allPeople.filter((person: ICharacter) => {
      return person.name.toLowerCase().includes(lowerCasedSearch) || person.homeworld.name.toLowerCase().includes(lowerCasedSearch);
    });
  }

  return {
    data: allPeople.slice((page - 1) * 10, page * 10),
    totalCount: allPeople.length,
  };
}

export const getCharacterById = async (personId: string) => {
  const result = await client.query<IGetCharacterResponse>({
    query: GET_CHARACTER,
    variables: { personId },
  });
  const films = [...result.data.person.filmConnection.films];
  return {
    ...result.data.person,
    filmConnection: {
      films: films.sort((a, b) => +new Date(a.releaseDate) - +new Date(b.releaseDate)),
    }
  };
};
