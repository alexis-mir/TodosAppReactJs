import React from "react";
import "../css/TodoList.css";

function TodoList(props) {
  return (
    <div>
      <ul>{props.children}</ul>
    </div>
  );
}

export { TodoList };
