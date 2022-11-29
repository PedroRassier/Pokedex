import { useContext } from "react";
import PokemonBox from "../PokemonBox/PokemonBox";
import { SearchContext } from "../../contexts/SearchContext";
import { GetPokemonContext } from "../../contexts/GetPokemonContext";

import { StyledMain } from "./StyledMain";
import Loading from "../Loading/Loading";

export default function Main() {
  const { pokemons, dataLoaded } = useContext(GetPokemonContext);
  const { searchTerm, searchPokemon } = useContext(SearchContext);

  console.log(searchPokemon);

  const showComponents = () => {
    if (searchTerm === "") {
      return pokemons.map((pokemon) => (
        <PokemonBox
          key={pokemon.id}
          pokemonName={pokemon.name}
          pokemonImage={pokemon.sprites.front_default}
          pokemonType={pokemon.types[0].type.name}
        />
      ));
    } else {
      return (
        <PokemonBox
          key={searchPokemon?.id}
          pokemonName={searchPokemon?.name}
          pokemonImage={searchPokemon?.sprites.front_default}
          pokemonType={searchPokemon?.types[0].type.name}
        />
      );
    }
  };

  return <StyledMain>{dataLoaded ? showComponents() : <Loading />}</StyledMain>;
}
