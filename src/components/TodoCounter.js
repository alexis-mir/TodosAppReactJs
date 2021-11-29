import React from "react";
import "../css/TodoCounter.css";
import { TodoContext } from "../contexts/TodoContext";

function TodoCounter() {
  return (
    <React.Fragment>
      <h3 className="TodoTitle">¡Disfruta de tu gestor de tareas!</h3>
      <TodoContext.Consumer>
        {({ completedTodos: completed, totalTodos: total }) => (
          <h5 className="TodoCounter">
            Has completado {completed} de {total} tareas
          </h5>
        )}
      </TodoContext.Consumer>
    </React.Fragment>
  );
}

export { TodoCounter };
