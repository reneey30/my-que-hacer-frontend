
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alarm, ExclamationCircle, CheckCircle, XCircle } from 'react-bootstrap-icons';

function Todo({ todo, index, markTodo, removeTodo }) {
    return (
      <div
        className="todo"
        key={index}
        index={index}
      >
        <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
        <div>
          <span className="ms-1" onClick={() => markTodo(index)}><Alarm className={`ms-1 ${todo.isUrgent ? "text-danger" : "text-secondary"}`} size={32}/></span>
          <span className="ms-1" onClick={() => markTodo(index)}> <ExclamationCircle className={`ms-1 ${todo.isImportant ? "text-danger" : "text-secondary"}`} size={32}/> </span>  
          <span className="ms-1" onClick={() => markTodo(index)}> <CheckCircle color="green" size={32}/> </span>
          <span className="ms-1" onClick={() => removeTodo(index)}> <XCircle color="red" size={32}/> </span>
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