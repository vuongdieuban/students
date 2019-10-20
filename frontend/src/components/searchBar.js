import React from "react";

const SearchBar = props => {
  const { onChange, placeholder } = props;
  return (
    <div className="row inputBarContainer">
      <input
        className="customSearchBar"
        type="text"
        placeholder={placeholder}
        aria-label="Search"
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
