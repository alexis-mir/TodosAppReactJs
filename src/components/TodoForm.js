import React from "react";
import { TodoContext } from "../contexts/TodoContext";
import "../css/TodoForm.css";

function TodoForm(props) {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (newTodoValue) {
      addTodo(newTodoValue);
    }
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Nueva tarea</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Escribe aquí la tarea..."
        autoFocus={true}
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Agregar
        </button>
      </div>
    </form>
  );
}
export { TodoForm };
