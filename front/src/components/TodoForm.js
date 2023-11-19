import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import { uuid4 } from "uuid4";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const { todos, setTodos } = useContext(TodoContext);

  const handleSubmit = (e) => {
    const newTodo = {
      title,
      id: uuid4(),
      complete: false,
    };
    e.preventDefault();
    setTodos([...todos, newTodo]);
    setTitle("");
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <button>Save</button>
    </form>
  );
};

export default TodoForm;
