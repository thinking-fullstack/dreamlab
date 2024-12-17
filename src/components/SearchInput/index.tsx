import { ChangeEvent } from 'react';

import searchIcon from '../../assets/icons/search.svg';

interface ISearchInputProps {
  value: string | undefined;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ value, onChange }: ISearchInputProps) => {
  return (
    <div className="flex relative">
      <img className="absolute left-3 top-3 w-5" src={searchIcon} alt="search" />
      <input
        data-testid="search-input"
        placeholder="Search..."
        className="w-72 rounded border border-gray-400 pl-10 pr-4 py-2 flex items-center gap-2"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;
