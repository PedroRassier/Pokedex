import styled from "styled-components";

export const StyledPokemonBox = styled.div`
  img {
    width: 100%;
    height: 15rem;
    transition: 0.3s;
  }
  img:hover {
    height: 16rem;
  }
  h2 {
    text-transform: capitalize;
    font-size: 24px;
  }
  padding: 1rem;
  width: 18rem;
  height: 20rem;
  border: 1px solid;

  p {
    color: ${(props) => (props.pokemontype === "normal" ? "yellow" : "black")};
  }
`;
