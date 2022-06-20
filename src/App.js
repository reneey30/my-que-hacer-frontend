import './App.css';

import AddTodo from './components/AddTodo';
import Nav from './components/Nav';
import TodoList from './components/TodoList';


function App() {
  return (
    <>
      <Nav />
      <AddTodo />
      <TodoList />
    </>
  );
}

export default App;
