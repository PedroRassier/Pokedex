import styled from 'styled-components';
/* 
 props.pokemonTypes == 'grass' ? '#8fce00' : '#ffffff'};
 props.pokemonTypes == 'fire' ? '#fa7445' : '#ffffff'};
 props.pokemonTypes == 'poison' ? '#ab0068' : '#ffffff'
 props.pokemonTypes == 'water' ? '#2ad3ff' : '#ffffff'}
 props.pokemonTypes == 'bug' ? '#75ff7e' : '#ffffff'};

 props.pokemonTypes == 'normal' ? '#ffffff' : '#ffffff'
 props.pokemonTypes == 'ground' ? '#bc8602' : '#ffffff'
 props.pokemonTypes == 'psychic' ? '#685c68' : '#ffffff
 props.pokemonTypes == 'fighting' ? '#ff2336' : '#fffff
  props.pokemonTypes == 'rock' ? '#bbb295' : '#ffffff'}
 props.pokemonTypes == 'eletric' ? '#fdef19' : '#ffffff
 props.pokemonTypes == 'ice' ? '#c3e8de' : '#ffffff'};

 props.pokemonTypes == 'fairy' ? '#ff92f6' : '#ffffff'}
 props.pokemonTypes == 'dark' ? '#833a00' : '#ffffff'};
*/

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
  width: 18rem;
  height: 22rem;
  background-color: #dddddd;
  border-radius: 5px;

  p {
    border-radius: 20%;
    padding: 0.3rem;
  }
`;
