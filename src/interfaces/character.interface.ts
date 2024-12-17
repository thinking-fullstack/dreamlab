export interface IHomeWorld {
  id: string;
  name: string;
  orbitalPeriod: number;
}

export interface ICharacter {
  id: string;
  birthYear: string;
  eyeColor: string;
  gender: string;
  hairColor: string;
  height: number;
  mass: number;
  name: string;
  skinColor: string;
  homeworld: IHomeWorld;
  filmConnection: {
    films: IFilm[];
  }
}

export interface IFilm {
  id: string;
  releaseDate: string;
  title: string;
}

export interface ICharacterContext {
  loading: boolean;
  listLoading: boolean;
  character?: ICharacter;
  characters: ICharacter[];
  totalCount: number;
  fetchCharacters: (page: number, search?: string) => void;
  getCharacterById: (id: string) => void;
}

export interface IFetchAllCharactersResponse {
  allPeople: {
    totalCount: number;
    people: ICharacter[];
  }
}

export interface IGetCharacterResponse {
  person: ICharacter;
}
