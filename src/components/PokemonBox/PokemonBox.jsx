import { StyledPokemonBox } from './StyledPokemonBox';

export default function PokemonBox(props) {
  return (
    <StyledPokemonBox pokemonTypes={props.pokemonType}>
      <img src={props.pokemonImage} alt="pokemon-image" />
      <div id="boxBody">
        <h2>{props.pokemonName}</h2>
        <p>{props.pokemonType}</p>
      </div>
    </StyledPokemonBox>
  );
}
