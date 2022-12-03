import { createContext, useEffect, useState } from 'react';

export const GetPokemonContext = createContext({});

export default function GetPokemonContextProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [offSet, setOffSet] = useState(0);

  const nextPage = () => {
    setOffSet(offSet + 10);
    console.log(`next ${offSet}`);
  };
  const previousPage = () => {
    if (offSet > 10) {
      setOffSet(offSet - 10);
      console.log(`previous ${offSet}`);
    } else {
      setOffSet(0);
      console.log(`else ${offSet}`);
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
        fetch(url)
          .then((response) => response.json())
          .then((data) => limitPokemons.push(data));
        setDataLoaded(true);
        setPokemons(limitPokemons);
      }
    };
    const getPokemon = (url) => {};
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
