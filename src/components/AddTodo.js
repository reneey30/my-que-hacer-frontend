import { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// function AddTodo() {
//   return (
//     <div>AddTodo</div>
//   )
// }

function AddTodo({ todos, setTodos }) {
    const [value, setValue] = useState("");

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
      };
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <Form className="col-9" onSubmit={handleSubmit}> 
      <Form.Group>
        <Form.Label><b>Add Todo </b></Form.Label>
        <Form.Control type="text" className="input mb-2" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
      </Form.Group>
      <Button variant="primary mb-3" type="submit">
        Submit
      </Button>
    </Form>
    );
  }

export default AddTodo

