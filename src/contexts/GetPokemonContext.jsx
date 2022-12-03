import { createContext, useEffect, useState } from "react";

export const GetPokemonContext = createContext({});

export default function GetPokemonContextProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const getPokemonData = async () => {
      let pokemonArray = [];
      for (let i = 1; i < 25; i++) {
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
    <GetPokemonContext.Provider value={{ pokemons, dataLoaded }}>
      {children}
    </GetPokemonContext.Provider>
  );
}
