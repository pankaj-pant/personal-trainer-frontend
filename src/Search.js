import React, { useState } from "react";
import { placeholder } from "@babel/types";

const Search = ({ search }) => {
 

  return (
    <form className="search">
      <input
        placeholder="Enter keyword"
        type="text"
      />
      <button>Search</button>
    </form>
  );
};

export default Search;