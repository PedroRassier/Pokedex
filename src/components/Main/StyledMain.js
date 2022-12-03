import styled from 'styled-components';

export const StyledMain = styled.main`
  margin: 2rem 5rem;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fill, minmax(17.5rem, 1fr));
  column-gap: 1rem;
  row-gap: 1rem;
  margin-bottom: 7rem;
  @media only screen and (max-width: 440px) {
    margin: 2rem;
  }
`;
