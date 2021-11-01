import React from "react";
import "../css/TodoSearch.css";
import { TodoContext } from "../contexts/TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  const onSearchValueChanged = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };
  return (
    <input
      className="TodoSearch"
      placeholder="Buscar tareas..."
      value={searchValue}
      onChange={onSearchValueChanged}
    />
  );
}

export { TodoSearch };
