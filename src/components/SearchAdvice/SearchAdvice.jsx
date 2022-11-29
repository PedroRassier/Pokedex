import { StyledSearchAdvice } from "./StyledSearchAdvice";

export default function SearchAdvice(props) {
  return (
    <StyledSearchAdvice>
      <p>{props.searchInfo}</p>
    </StyledSearchAdvice>
  );
}
