import React from "react";
import "../css/TodoItem.css";

function TodoItem(props) {
  let checkClass = "Icon Icon-check fa-check-circle";
  let textClass = "TodoItem-p";
  if (props.completed) {
    checkClass += " fas Icon-check-active";
    textClass += " TodoItem-p-complete";
  } else {
    checkClass += " far";
  }
  return (
    <li className="TodoItem">
      <i className={checkClass} onClick={props.onComplete} />
      <p className={textClass}>{props.text}</p>
      <i
        className="fas fa-trash-alt Icon Icon-delete"
        onClick={props.onDelete}
      />
    </li>
  );
}

export { TodoItem };
