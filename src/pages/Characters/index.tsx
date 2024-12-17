import { ChangeEvent, FC, useContext, useEffect, useState } from 'react';
import Pagination from 'rc-pagination';

import Card from '../../components/Card';
import CharacterDialog from '../../components/CharacterDialog';
import SearchInput from '../../components/SearchInput';
import Skeleton from '../../components/Skeleton';
import { CharacterContext } from '../../context/character.context';
import { useDebounce } from '../../hooks/useDebounce';
import avatar from '../../assets/images/avatar.png';

const Characters: FC = () => {
  const { listLoading, characters, totalCount, fetchCharacters } = useContext(CharacterContext);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [selectedCharacterId, setSelectedCharacterId] = useState<string | null>(null);

  const debouncedSearch = useDebounce(search);

  const handleClose = () => {
    setSelectedCharacterId(null);
  };

  const handleOpen = (id: string) => {
    setSelectedCharacterId(id);
  };

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetchCharacters(page, debouncedSearch);
  }, [page, debouncedSearch, fetchCharacters]);

  return (
    <div>
      <div className="mb-4 flex gap-2">
        <SearchInput value={search} onChange={handleChangeSearch} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {listLoading ? new Array(10).fill('').map((_, index) => (
            <Card key={index}>
              <Skeleton />
            </Card>
          )) :
          characters.map((character) => (
            <Card
              key={character.id}
              title={character.name}
              description={character.homeworld.name}
              image={avatar}
              onClick={() => handleOpen(character.id)}
            />
          ))
        }
      </div>
      <div className="mt-4 flex justify-center items-center gap-2">
        <Pagination
          className="leading-none"
          onChange={setPage}
          total={totalCount}
          current={page}
          pageSize={10}
        />
      </div>
      <CharacterDialog characterId={selectedCharacterId} isOpen={!!selectedCharacterId} onClose={handleClose} />
    </div>
  )
};

export default Characters;
