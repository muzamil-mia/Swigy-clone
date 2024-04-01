import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const Search = () => {
  const [searchText, setsearchText] = useState("");
  return (
    <div className="search">
      <input type="text" value = {searchText} placeholder="Search Your Restaurant"/>
      <button className="search-btn">Search</button>
    </div>
  )
}
export default Search;