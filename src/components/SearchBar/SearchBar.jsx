import { MagnifyingGlass } from 'phosphor-react';
import { useContext } from 'react';
import { useState } from 'react';
import { SearchContext } from '../../contexts/SearchContext';

import { StyledButton, StyledInput, StyledSearchBar } from './StyledSearchBar';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const { handleChangeOnSearchTerm } = useContext(SearchContext);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
    handleChangeOnSearchTerm(searchTerm);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);
  };

  return (
    <StyledSearchBar onSubmit={handleSubmit}>
      <StyledInput
        onChange={handleInputChange}
        value={searchTerm}
        spellCheck="false"
      />
      <StyledButton>
        <MagnifyingGlass size={32} color="#000000" />
      </StyledButton>
    </StyledSearchBar>
  );
}
