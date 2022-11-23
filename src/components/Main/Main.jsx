import { useContext } from 'react';
import PokemonBox from '../PokemonBox/PokemonBox';
import { SearchContext } from '../../contexts/SearchContext';
import { StyledMain } from './StyledMain';

export default function Main() {
  const { pokemons, searchTerm } = useContext(SearchContext);
  console.log(searchTerm);
  console.log(pokemons);
  return (
    <StyledMain>
      {searchTerm === ''
        ? pokemons.map((pokemon) => (
            <PokemonBox
              key={pokemon.id}
              pokemonName={pokemon.name}
              pokemonImage={pokemon.sprites.front_default}
              pokemonType={pokemon.types[0].type.name}
            />
          ))
        : pokemons
            .filter((pokemon) => pokemon.name.includes(searchTerm))
            .map((pokemon) => (
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
