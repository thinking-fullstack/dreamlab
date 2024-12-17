import { createContext, PropsWithChildren, useCallback, useState } from 'react';

import * as CharacterApi from '../graphql/apis/character.api';
import { ICharacter, ICharacterContext } from '../interfaces/character.interface.ts';

export const CharacterContext = createContext<ICharacterContext>({} as ICharacterContext);

const CharacterProvider = ({ children }: PropsWithChildren) => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [character, setCharacter] = useState<ICharacter>();
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [listLoading, setListLoading] = useState(false);

  const getCharacterById = useCallback(async (id: string) => {
    setLoading(true);
    CharacterApi.getCharacterById(id).then((result) => {
      setCharacter(result);
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  }, []);
  
  const fetchCharacters = useCallback(async (page: number, search?: string) => {
    setListLoading(true);
    CharacterApi.fetchCharacters(page, search).then((result) => {
      setCharacters(result.data);
      setTotalCount(result.totalCount);
      setListLoading(false);
    }).catch(() => {
      setListLoading(false);
    });
  }, []);

  const value = {
    loading,
    listLoading,
    character,
    characters,
    totalCount,
    fetchCharacters,
    getCharacterById,
  };

  return <CharacterContext.Provider value={value}>{children}</CharacterContext.Provider>;
};

export default CharacterProvider;
