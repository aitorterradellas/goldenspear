import React from "react";
import constants from "../config/constants";
import TextInput from "./TextInput";

function SearchInput({ onSearch }) {
  return (
    <TextInput
      type="search"
      placeholder={constants.PLACEHOLDERS.SEARCH}
      onChange={onSearch}
    />
  );
}

export default SearchInput;
