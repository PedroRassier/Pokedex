import { createContext, useEffect, useState } from 'react';

export const GetPokemonContext = createContext({});

export default function GetPokemonContextProvider({ children }) {
  const [pokemons, setPokemons] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [offSet, setOffSet] = useState(0);

  const nextPage = () => {
    setOffSet(offSet + 10);
  };

  const previousPage = () => {
    if (offSet >= 10) {
      setOffSet(offSet - 10);
    }
  };

  useEffect(() => {
    const getPokemonByLimit = async () => {
      let limitPokemons = [];
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=30&offset=${offSet}`
      );
      const data = await response.json();
      for (let i = 0; i < 30; i++) {
        let url = data.results[i].url;
        const pokemonResponse = await fetch(url);
        const pokemonData = await pokemonResponse.json();
        limitPokemons.push(pokemonData);
      }
      setDataLoaded(true);
      setPokemons(limitPokemons);
    };

    getPokemonByLimit();
  }, [offSet]);

  return (
    <GetPokemonContext.Provider
      value={{ pokemons, dataLoaded, nextPage, previousPage }}
    >
      {children}
    </GetPokemonContext.Provider>
  );
}
