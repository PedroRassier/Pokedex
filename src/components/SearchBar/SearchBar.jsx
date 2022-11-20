import { MagnifyingGlass } from "phosphor-react";
import { useState } from "react";

import { StyledButton, StyledInput, StyledSearchBar } from "./StyledSearchBar";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);
  };

  return (
    <StyledSearchBar onSubmit={handleSubmit}>
      <StyledInput
        onChange={handleInputChange}
        value={searchTerm}
        spellCheck="false"
      />
      <StyledButton>
        <MagnifyingGlass size={32} color="#000000" />
      </StyledButton>
    </StyledSearchBar>
  );
}
