import { useContext } from "react";
import PokemonBox from "../PokemonBox/PokemonBox";
import { SearchContext } from "../../contexts/SearchContext";
import { StyledMain } from "./StyledMain";

export default function Main() {
  const { pokemons } = useContext(SearchContext);
  console.log(pokemons);
  return (
    <StyledMain>
      {pokemons.map((pokemon) => (
        <PokemonBox
          key={pokemon.id}
          pokemonName={pokemon.name}
          pokemonImage={pokemon.sprites.front_default}
          pokemonType={pokemon.types[0].type.name}
        />
      ))}
    </StyledMain>
  );
}
