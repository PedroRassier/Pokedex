import { useContext } from "react";
import { useState } from "react";
import { SearchContext } from "../../contexts/SearchContext";

import { StyledInput, StyledSearchBar } from "./StyledSearchBar";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const { handleChangeOnSearchTerm } = useContext(SearchContext);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleChangeOnSearchTerm(searchTerm);
  };

  return (
    <StyledSearchBar onSubmit={handleSubmit}>
      <StyledInput
        onChange={handleInputChange}
        value={searchTerm}
        spellCheck="false"
      />
      <button onClick={handleSubmit}>
        <svg viewBox="0 0 512 512" fill="currentColor" height="1em" width="1em">
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7l126.6 126.7c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208zM208 352c79.5 0 144-64.5 144-144S287.5 64 208 64 64 128.5 64 208s64.5 144 144 144z" />
        </svg>
      </button>
    </StyledSearchBar>
  );
}
