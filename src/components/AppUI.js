import React from "react";
import { TodoContext } from "../contexts/TodoContext";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { Modal } from "./Modal";
import { TodoForm } from "./TodoForm";
import "../css/AppUI.css";

function AppUI() {
  const {
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <section className="container">
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>error...</p>}
        {!searchedTodos.length && <p align="center">¡No hay TODOs que mostrar!</p>}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
            text={todo.text}
          />
        ))}
      </TodoList>
      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />
    </section>
  );
}

export { AppUI };
