import './App.css';

import AddTodo from './components/AddTodo';
import Nav from './components/Nav';
import TodoList from './components/TodoList';


function App() {
  return (
    <div className='main'>
      <Nav />
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
