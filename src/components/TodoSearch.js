import React from "react";
import "../css/TodoSearch.css";
import { TodoContext } from "../contexts/TodoContext";

function TodoSearch() {
  const onSearchValueChanged = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };
  return (
    <TodoContext.Consumer>
      {({ searchValue, setSearchValue }) => (
        <input
          className="TodoSearch"
          placeholder="Buscar tareas..."
          value={searchValue}
          onChange={onSearchValueChanged}
        />
      )}
    </TodoContext.Consumer>
  );
}

export { TodoSearch };
