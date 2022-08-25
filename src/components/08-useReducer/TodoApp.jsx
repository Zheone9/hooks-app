import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";

import "./styles.css";

const init = () => {
  //Al iniciar el componente revisa si hay todos en el local storage, si lo hay
  //entonces los todos iniciales serán los que esten allí
  return JSON.parse(localStorage.getItem("todos")) || [];
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    //Si hay algún cambio en los todos, actualiza ese cambio en el localStorage
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    dispatch({
      type: "delete",
      payload: todoId,
    });
  };
  const handleToggle = (todoId) => {
    dispatch({
      type: "toggle",
      payload: todoId,
    });
  };
  const handleAddTodo = (newTodo) => {
    dispatch({
      type: "add",
      payload: newTodo,
    });
  };

  return (
    <div>
      <h1>
        TodoApp: <small>({todos.length})</small>
      </h1>
      <hr />
      <div className="row">
        <div className=" col-12 col-sm-7">
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>
        <TodoAdd handleAddTodo={handleAddTodo} />
      </div>
    </div>
  );
};

export default TodoApp;
