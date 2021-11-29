import React from "react";
import "../css/TodoSearch.css";
import { TodoContext } from "../contexts/TodoContext";
import { SearchIcon } from "./icons/SearchIcon";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  const onSearchValueChanged = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };
  return (
    <React.Fragment>
      <label for="search" className="TodoSearch">
        <SearchIcon />
        <input
          id="search"
          className=""
          placeholder="Buscar tareas..."
          value={searchValue}
          onChange={onSearchValueChanged}
        />
      </label>
    </React.Fragment>
  );
}

export { TodoSearch };
