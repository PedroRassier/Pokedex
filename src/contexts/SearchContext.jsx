import { createContext, useEffect, useState } from 'react';

export const SearchContext = createContext({});

export default function SearchContextProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleChangeOnSearchTerm = (data) => {
    setSearchTerm(data);
  };

  useEffect(() => {
    const getPokemonData = async () => {
      let pokemonArray = [];
      for (let i = 1; i < 200; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await response.json();
        pokemonArray.push(data);
      }
      setPokemons(pokemonArray);
    };
    getPokemonData();
  }, []);
  return (
    <SearchContext.Provider
      value={{ pokemons, handleChangeOnSearchTerm, searchTerm }}
    >
      {children}
    </SearchContext.Provider>
  );
}
