import styled from 'styled-components';

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
  background-color: #ececec;
  border-radius: 10%;

  p {
    border-radius: 20%;
    padding: 0.3rem;
  }
`;
