import { useContext, useEffect } from 'react';

import Skeleton from '../Skeleton';
import { CharacterContext } from '../../context/character.context';
import BaseDialog from '../BaseDialog';

interface PropertyProps {
  label: string;
  value: string | number;
}

const Property = ({ label, value }: PropertyProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-3">
      <div>{label}:</div>
      <div className="font-bold">{value}</div>
    </div>
  );
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  characterId: string | null;
}

const CharacterDialog = ({
  isOpen,
  onClose,
  characterId,
}: Props) => {
  const { loading, character, getCharacterById } = useContext(CharacterContext);

  useEffect(() => {
    if (characterId) {
      getCharacterById(characterId);
    }
  }, [characterId, getCharacterById]);

  return (
    <BaseDialog isOpen={isOpen} onClose={onClose}>
      {(loading || !character) ? (
        <Skeleton />
      ) : (
        <div data-testid="character-dialog">
          <div className="text-lg font-bold">
            {character.name}
          </div>
          <div className="mt-4">
            <Property label="Name" value={character.name} />
            <Property label="Birth Year" value={character.birthYear} />
            <Property label="Eye Color" value={character.eyeColor} />
            <Property label="Gender" value={character.gender} />
            <Property label="Hair Color" value={character.hairColor} />
            <Property label="Height" value={character.height} />
            <Property label="Mass" value={character.mass} />
            <Property label="Skin Color" value={character.skinColor} />
            <Property label="Home World" value={character.homeworld.name} />
            <Property label="Home World Orbital Period" value={character.homeworld.orbitalPeriod} />
            <div className="grid grid-cols-2 gap-4">
              <div className="text-left flex-shrink-0">Films:</div>
              <div className="font-bold">
                {character.filmConnection.films
                  .map((film) => (
                    <div key={film.id}>
                      {film.title}
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              data-testid="close-btn"
              className="mt-4 border hover:bg-gray-100 py-2 px-4 rounded"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </BaseDialog>
  );
};

export default CharacterDialog;
