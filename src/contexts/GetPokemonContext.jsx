import { createContext, useEffect, useState } from 'react';

export const GetPokemonContext = createContext({});

export default function GetPokemonContextProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [offSet, setOffSet] = useState(0);

  useEffect(() => {
    const getPokemonByLimit = async () => {
      let limitPokemons = [];
      await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offSet}`)
        .then((response) => response.json())
        .then((data) => {
          for (let i = 0; i < 20; i++) {
            let url = data.results[i].url;
            console.log(url);
            fetch(url)
              .then((response) => response.json())
              .then((data) => limitPokemons.push(data));
          }
          setDataLoaded(true);
          setPokemons(limitPokemons);
          console.log(pokemons);
        });
    };
    getPokemonByLimit();
  }, []);
  return (
    <GetPokemonContext.Provider value={{ pokemons, dataLoaded }}>
      {children}
    </GetPokemonContext.Provider>
  );
}
