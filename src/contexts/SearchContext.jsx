import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const SearchContext = createContext();

export default function SearchContextProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchPokemon, setSearchPokemon] = useState(null);

  useEffect(() => {
    if (searchTerm) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
        .then((response) => response.json())
        .then((data) => setSearchPokemon(data));
      console.log(searchPokemon);
    }
  }, [searchTerm]);

  const handleChangeOnSearchTerm = (data) => {
    setSearchTerm(data);
  };

  return (
    <SearchContext.Provider
      value={{ searchTerm, handleChangeOnSearchTerm, searchPokemon }}
    >
      {children}
    </SearchContext.Provider>
  );
}
