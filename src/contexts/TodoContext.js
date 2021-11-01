import React from "react";
import { useLocalStorage } from "../hooks/LocalStorageHook";

const TodoContext = React.createContext();

const defaultTodos = [
  { id: 1, text: "Pedir una pizza", completed: false },
  { id: 2, text: "Tomar agua", completed: false },
  { id: 3, text: "Tomar un helado", completed: false },
  { id: 4, text: "Quitar el susbrallado rojo del codigo", completed: true },
];

function TodoProvider(props) {
  const {
    items: todos,
    saveItem: saveTodos,
    error,
  } = useLocalStorage("TODOS_V1", defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  if (!searchValue.length > 0) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  return (
    <TodoContext.Provider
      value={{
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoProvider, TodoContext };
