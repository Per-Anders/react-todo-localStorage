import React, { useCallback, useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const Todo = () => {
  const { todos, setTodos } = useContext(TodoContext);

  const handleDelete = (id) => {
    const newArr = todos.filter((todo) => todo.id != id);
    setTodos(newArr);
    localStorage.setItem("todos", JSON.stringify(newArr));
  };

  const handleDoubleClick = (id) => {
    const newArr = [...todos];
    const todo = newArr.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newArr);
    localStorage.setItem("todos", JSON.stringify(newArr));
  };

  return (
    <div>
      {todos && (
        <div>
          {todos.map((todo) => (
            <div key={todo.id} className="card">
              <div
                className={todo.complete ? "todo complete" : "todo"}
                onDoubleClick={(e) => handleDoubleClick(todo.id)}
              >
                {todo.title}
              </div>
              <span className="delete" onClick={(e) => handleDelete(todo.id)}>
                🗙
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Todo;
