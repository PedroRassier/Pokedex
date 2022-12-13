import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const SearchContext = createContext();

export default function SearchContextProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchPokemon, setSearchPokemon] = useState(null);
  const [fetchSuccess, setFetchSuccess] = useState(true);

  useEffect(() => {
    if (searchTerm) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
        .then((response) => response.json())
        .then((data) => {
          setSearchPokemon(data);
          setFetchSuccess(true);
        })
        .catch(() => setFetchSuccess(false));
    }
  }, [searchTerm]);

  const handleChangeOnSearchTerm = (data) => {
    if (searchTerm === '') {
      setSearchPokemon(null);
    }
    setSearchTerm(data);
  };

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        handleChangeOnSearchTerm,
        searchPokemon,
        fetchSuccess,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
