import React from "react";
import "../css/CreateTodoButton.css";

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal((prevState) => !prevState);
  };
  return (
    <button className="CreateTodoButton" onClick={onClickButton}>
      <i className="fas fa-plus" />
    </button>
  );
}

export { CreateTodoButton };
