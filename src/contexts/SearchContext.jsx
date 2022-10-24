import { createContext, useEffect, useState } from 'react';

export const SearchContext = createContext({});

export default function SearchContextProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState(' ');
  const [pokemon, setPokemon] = useState(null);

  const handleChangeOnSearchTerm = (data) => {
    setSearchTerm(data);
    console.log(data);
  };

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}/`)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, [searchTerm]);

  return (
    <SearchContext.Provider value={{ pokemon, handleChangeOnSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
}
