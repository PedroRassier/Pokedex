import { createContext, useEffect, useState } from "react";

export const SearchContext = createContext({});

export default function SearchContextProvider({ children }) {
  const [pokemons, setPokemon] = useState([]);

  useEffect(() => {
    let pokemonArray = [];
    for (let i = 1; i < 50; i++) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then((response) => response.json())
        .then((data) => {
          pokemonArray.push(data);
        })
        .catch((error) => console.log(error));
    }
    setPokemon(pokemonArray);
  }, []);
  return (
    <SearchContext.Provider value={{ pokemons }}>
      {children}
    </SearchContext.Provider>
  );
}
