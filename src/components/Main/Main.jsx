import { useContext } from 'react';
import PokemonBox from '../PokemonBox/PokemonBox';
import { SearchContext } from '../../contexts/SearchContext';
import { GetPokemonContext } from '../../contexts/GetPokemonContext';
import { StyledMain } from './StyledMain';
import Loading from '../Loading/Loading';
import SearchAdvice from '../SearchAdvice/SearchAdvice';
import Pagination from '../PaginationButtons/Pagination';

export default function Main() {
  const { pokemons, dataLoaded, nextPage, previousPage } =
    useContext(GetPokemonContext);
  const { searchTerm, searchPokemon, fetchSuccess } = useContext(SearchContext);
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
    }
    if (fetchSuccess === true) {
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
  let searchInfo;
  fetchSuccess === true
    ? (searchInfo =
        "If you want to search a pokemon that is not in the list, search for the full pokemon's name")
    : (searchInfo = 'Ops, no results found');

  return (
    <StyledMain>
      <SearchAdvice searchInfo={searchInfo} />
      {dataLoaded ? showComponents() : <Loading />}
      <Pagination nextPage={nextPage} previousPage={previousPage} />
    </StyledMain>
  );
}
