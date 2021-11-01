import React from "react";
import "../css/CreateTodoButton.css";

function CreateTodoButton() {
  const onClickButton = () => {
    alert("necesitamos un modal");
  };
  return (
    <button className="CreateTodoButton" onClick={onClickButton}>
      <i className="fas fa-plus" />
    </button>
  );
}

export { CreateTodoButton };
