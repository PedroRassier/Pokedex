import styled from 'styled-components';

export const StyledSearchBar = styled.form`
  display: flex;
  width: 35rem;
  height: 2.5rem;
  background-color: #ffffff;
  border-radius: 5px;

  @media only screen and (max-width: 600px) {
    width: 20rem;
  }
  @media only screen and (max-width: 440px) {
    width: 15rem;
  }
`;
export const StyledInput = styled.input`
  border-radius: 5px;
  padding-left: 1rem;
  font-size: 24px;
  width: 100%;
  height: 100%;
  border: 0;
`;
