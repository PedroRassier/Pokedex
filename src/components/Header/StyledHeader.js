import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #670cee;

  @media only screen and (max-width: 600px) {
    height: 6rem;
  }
`;
