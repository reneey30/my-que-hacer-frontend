
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Todo({ todo, index, markTodo, removeTodo }) {
    return (
      <div
        className="todo"
        
      >
        <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
        <div>
          <Button variant="outline-danger" className="ms-1" onClick={() => markTodo(index)}>clock</Button>
          <Button variant="outline-danger" className="ms-1" onClick={() => markTodo(index)}>!</Button>  
          <Button variant="outline-success" className="ms-1" onClick={() => markTodo(index)}>✓</Button>
          <Button variant="outline-danger" className="ms-1" onClick={() => removeTodo(index)}>✕</Button>
        </div>
      </div>
    );
  }


// function TodoList({ todos, index, markTodo, removeTodo }) {
function TodoList({ todos, setTodos }) {

    const markTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isDone = true;
        setTodos(newTodos);
      };
    
      const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
      };

    return (
        <div className='col-9'>
        {todos.map((todo, index) => (
          <Card>
            <Card.Body>
              <Todo
              key={index}
              index={index}
              todo={todo}
              markTodo={markTodo}
              removeTodo={removeTodo}
              />
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }

export default TodoList