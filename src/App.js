import { useEffect, useState } from "react";
import "./App.css";

import AddTodo from "./components/AddTodo";
import Nav from "./components/Nav";
import TodoList from "./components/TodoList";


function App() {
  const [todos, setTodos] = useState([
    {
      // title: "This is a sampe todo",
      // isDone: false,
      // isUrgent: true,
      // isImportant: false,
      // id: id
    },
  ]);
  const [userId, setUserId] = useState(null); // get userId from server response {user_id: 123}
  const [username, setUsername] = useState("");


  useEffect(() => {
    fetchData();
  }, [userId]);

  async function fetchData() {
    if(!userId){
      return;
    }
    fetch(`http://localhost:9292/todos/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("the data: ");
        console.log(data);
        setTodos(data);
      });
  }
  

  // fetch from endpoint all todos and use 'setTodos' to put this fetched data to the 'todos' state

  return (
    <div className="main">
      <Nav 
        userId = {userId}
        setUserId = {setUserId}
        username = {username}
        setUsername = {setUsername}
      />

      <div className="container">
        <div className="row justify-content-md-center">
          {userId ? (
            <>
              <AddTodo todos={todos} setTodos={setTodos} userId={userId} fetchData={fetchData}/>
              <TodoList todos={todos} setTodos={setTodos} />
            </>
            
          ) : (
            <div>
              <h2>Welcome to Que Hacer</h2>
              <p> Please Log in or Sign up</p>
            </div>
          )}
          {/* <AddTodo todos={todos} setTodos={setTodos} />
          <TodoList todos={todos} setTodos={setTodos} /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
