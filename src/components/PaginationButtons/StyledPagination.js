import styled from 'styled-components';

export const StyledPagination = styled.div`
  position: fixed;
  bottom: 1rem;
  height: 5rem;
  width: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  button {
    border: 1px solid black;
    width: 4rem;
    height: 4rem;
    border-radius: 5px;
  }
`;
