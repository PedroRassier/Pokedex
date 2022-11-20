import { StyledPokemonBox } from "./StyledPokemonBox";

export default function PokemonBox(props) {
  return (
    <StyledPokemonBox>
      <img src={props.pokemonImage} alt="pokemon-image" />
      <h2>{props.pokemonName}</h2>
      <p pokemontype={props.pokemonType}>{props.pokemonType}</p>
    </StyledPokemonBox>
  );
}
