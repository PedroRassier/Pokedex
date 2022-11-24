import { useContext } from 'react';
import PokemonBox from '../PokemonBox/PokemonBox';
import { SearchContext } from '../../contexts/SearchContext';
import { StyledMain } from './StyledMain';
import Loading from '../Loading/Loading';

export default function Main() {
  const { pokemons, searchTerm, dataLoaded } = useContext(SearchContext);

  const showComponents = () => {
    if (searchTerm === '') {
      return pokemons.map((pokemon) => (
        <PokemonBox
          key={pokemon.id}
          pokemonName={pokemon.name}
          pokemonImage={pokemon.sprites.front_default}
          pokemonType={pokemon.types[0].type.name}
        />
      ));
    } else {
      return pokemons
        .filter((pokemon) => pokemon.name.includes(searchTerm))
        .map((pokemon) => (
          <PokemonBox
            key={pokemon.id}
            pokemonName={pokemon.name}
            pokemonImage={pokemon.sprites.front_default}
            pokemonType={pokemon.types[0].type.name}
          />
        ));
    }
  };

  return <StyledMain>{dataLoaded ? showComponents() : <Loading />}</StyledMain>;
}
