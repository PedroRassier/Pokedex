import { StyledPagination } from './StyledPagination';

export default function Pagination(props) {
  return (
    <StyledPagination>
      <button onClick={props.previousPage}>-</button>
      <button onClick={props.nextPage}> +</button>
    </StyledPagination>
  );
}
