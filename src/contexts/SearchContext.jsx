import { createContext, useEffect, useState } from 'react';

export const SearchContext = createContext({});

export default function SearchContextProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [dataLoaded, setDataLoaded] = useState(false);

  const handleChangeOnSearchTerm = (data) => {
    setSearchTerm(data);
  };

  useEffect(() => {
    const getPokemonData = async () => {
      let pokemonArray = [];
      for (let i = 1; i < 300; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await response.json();
        pokemonArray.push(data);
      }
      setPokemons(pokemonArray);
      setDataLoaded(true);
    };
    getPokemonData();
  }, []);
  return (
    <SearchContext.Provider
      value={{ pokemons, handleChangeOnSearchTerm, searchTerm, dataLoaded }}
    >
      {children}
    </SearchContext.Provider>
  );
}
