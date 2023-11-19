import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import { TodoContext } from "./context/TodoContext";
import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem("todos"));
    if (todoList && todoList.length > 0) {
      setTodos(todoList);
    }
  }, []);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      <div className="container">
        <TodoForm />
        <Todo />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
