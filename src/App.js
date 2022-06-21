import { useState } from "react";
import "./App.css";

import AddTodo from "./components/AddTodo";
import Nav from "./components/Nav";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "This is a sampe todo",
      isDone: false,
      isUrgent: true,
      isImportant: false,
    },
  ]);

  return (
    <div className="main">
      <Nav />
      <div className="container">
        <div className="row justify-content-md-center">
          <AddTodo todos={todos} setTodos={setTodos} />
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
}

export default App;
