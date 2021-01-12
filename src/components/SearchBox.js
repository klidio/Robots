import React from "react";

const SearchBox = ({searchChange,searchfield}) => {
  return (
    <div className="pa2">
      <input
        className="pa3 b--green bg-lightest-blue"
        type="search"
        placeholder="robot search"
        onChange={searchChange}
      ></input>
    </div>
  );
};
export default SearchBox;
