import React from "react";
import {MdAdd} from 'react-icons/md';
import "../css/CreateTodoButton.css";

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal((prevState) => !prevState);
  };
  return (
    <button className="CreateTodoButton" onClick={onClickButton}>
      <MdAdd />
    </button>
  );
}

export { CreateTodoButton };
