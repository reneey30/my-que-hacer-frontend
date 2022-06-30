
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alarm, ExclamationCircle, CheckCircle, XCircle } from 'react-bootstrap-icons';

function Todo({ todo, index, markTodo, removeTodo, markUrgent, markImportant }) {
    return (
      <div
        className="todo"
        key={index}
        index={index}
      >
        <span style={{ textDecoration: todo.done? "line-through" : "" }}>{todo.title}</span>
        <div>
          <span className="ms-1" onClick={() => markUrgent(index)}><Alarm color={todo.urgent ? "#e7a84a" : "grey"} size={32}/></span>
          <span className="ms-1" onClick={() => markImportant(index)}> <ExclamationCircle color={todo.important ? "#e7a84a" : "grey"} size={32}/> </span>  
          <span className="ms-1" onClick={() => markTodo(index)}> <CheckCircle color="green" size={32}/> </span>
          <span className="ms-1" onClick={() => removeTodo(index)}> <XCircle color="red" size={32}/> </span>
        </div>
      </div>
    );
  }


// function TodoList({ todos, index, markTodo, removeTodo }) {
function TodoList({ todos, setTodos }) {
  // const [localTodos, setLocalTodos] = useState({});

  // useEffect(() => {
  //   const instance_todos = [...todos];
  //   setLocalTodos(instance_todos)
  // }, []);

  async function deleteData(id) {
    
    await fetch(`http://localhost:9292/delete/${id}`, {method: 'DELETE'})
      .then((res) => res.json())
      .then((data) => {
        console.log("the data: ");
        console.log(data);
      });
  }

  async function updateDone(id, todo_value) {
    
    const formData = {
      done: todo_value
    }

    
    await fetch(`http://localhost:9292/update/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("the data: ");
        console.log(data);
      });
  }

  async function updateUrgent(id, todo_value) {
    
    const formData = {
      urgent: todo_value,
    }

    
    await fetch(`http://localhost:9292/update/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("the data: ");
        console.log(data);
      });
  }

  async function updateImportant(id, todo_value) {
    
    const formData = {
      important: todo_value,
    }

    
    await fetch(`http://localhost:9292/update/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("the data: ");
        console.log(data);
      });
  }

  const markUrgent = index => {
    const newTodos = [...todos];
    // let current_state = newTodos[index].urgent;
    // current_state = !current_state;
    // newTodos[index].urgent = current_state;
    newTodos[index].urgent = !newTodos[index].urgent;
    updateUrgent(newTodos[index].id, newTodos[index].urgent);
    setTodos(newTodos);
  };

  const markImportant = index => {
    const newTodos = [...todos];
    newTodos[index].important = !newTodos[index].important;
    updateImportant(newTodos[index].id, newTodos[index].important);
    setTodos(newTodos);
  };

    const markTodo = index => {
        const newTodos = [...todos];
        newTodos[index].done = !newTodos[index].done;
        updateDone(newTodos[index].id, newTodos[index].done);
        setTodos(newTodos);
    };

    
    const removeTodo = index => {
        const newTodos = [...todos];
        deleteData(newTodos[index].id);
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
              markImportant={markImportant}
              markUrgent={markUrgent}
              />
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }

export default TodoList