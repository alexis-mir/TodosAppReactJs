import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoProvider, TodoContext } from "./contexts/TodoContext";

function App() {
  return (
    <React.Fragment>
      <TodoProvider>
        <TodoCounter />

        <TodoSearch />

        <TodoContext.Consumer>
          {({ error, searchedTodos, completeTodo, deleteTodo }) => (
            <TodoList>
              {error && <p>error...</p>}
              {!searchedTodos.length && <p>¡Crea tu primer TODO!</p>}

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
          )}
        </TodoContext.Consumer>

        <CreateTodoButton />
      </TodoProvider>
    </React.Fragment>
  );
}

export default App;
