import React from "react";
import "../css/TodoCounter.css";
import { TodoContext } from "../contexts/TodoContext";

function TodoCounter() {
  return (
    <TodoContext.Consumer>
      {({ completedTodos: completed, totalTodos: total }) => (
        <h5 className="TodoCounter">
          Has completado {completed} de {total} TODOs
        </h5>
      )}
    </TodoContext.Consumer>
  );
}

export { TodoCounter };
