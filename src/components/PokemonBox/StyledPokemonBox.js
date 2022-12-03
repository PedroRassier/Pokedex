import styled from "styled-components";

const pokemonsTypesColor = {
  grass: '#8fce00',
  fire: '#fa7445',
  poison: '#ab0068',
  water: '#2ad3ff',
  bug: '#75ff7e',
  normal: '#ffffff',
  ground: '#bc8602',
  psychic: '#685c68',
  fighting: '#ff2336',
  rock: '#bbb295',
  eletric: '#fdef19',
  ice: '#c3e8de',
  fairy: '#ff92f6',
  dark: '#833a00',
};

export const StyledPokemonBox = styled.div`
  img {
    position: relative;
    width: 100%;
    height: 15rem;
    transition: 0.3s;
  }
  img:hover {
    transform: scale(1.2);
  }

  #boxBody {
    padding-top: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border-top: 2.5px solid #ff2d2d;
  }
  h2 {
    margin-bottom: 0.3rem;
    text-transform: capitalize;
    font-size: 24px;
  }
  padding: 1rem;
  width: 17rem;
  height: 22rem;
  background-color: #dddddd;
  border-radius: 10%;

  p {
    border-radius: 20%;
    padding: 0.3rem;
    background-color: ${(props) => pokemonsTypesColor[props.pokemonType]};
  }
`;
