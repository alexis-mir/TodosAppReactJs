import React from "react";
import { CompleteIcon } from "./icons/CompleteIcon";
import { DeleteIcon } from "./icons/DeleteIcon";
import "../css/TodoItem.css";

function TodoItem(props) {
  let textClass =
    "TodoItem-p" + (props.completed ? " TodoItem-p-complete" : "");
  return (
    <li className="TodoItem">
      <CompleteIcon completed={props.completed} onComplete={props.onComplete} />
      <p className={textClass}>{props.text}</p>
      <DeleteIcon onDelete={props.onDelete} />
    </li>
  );
}

export { TodoItem };
