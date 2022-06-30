import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alarm, ExclamationCircle } from 'react-bootstrap-icons';

function AddTodo({ todos, setTodos }) {
  const [value, setValue] = useState("");

  const [urgentSelect, setUrgentSelect] = useState(false);
  const [importantSelect, setImportantSelect] = useState(false);

  const addTodo = (text, isUrgent, isImportant, isDone = false) => {
    
    const submission = { text, isUrgent, isImportant, isDone};
    // send submission variable to database on backend
    // eg fetch("https://end.point/", {
    //  method: "POST",
    //  headers: {"content-type": "application/json"},
    //  body: JSON.stringify(submission)
    //} )
    //.then....
    const newTodos = [...todos, submission];
    setTodos(newTodos);
    console.log(todos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value, urgentSelect, importantSelect);
    console.log(value);
    setValue("");
  };

  return (
    <Form className="col-9" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>
          <b>Add Todo </b>
        </Form.Label>
        <div className="row">
          <div className="d-inline-flex">
            <Form.Control
              type="text"
              className="input mb-2"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Add new todo"
            />
            <div className="d-flex flex-column justify-content-center ms-2">
              <Alarm  size={24} color={urgentSelect ? "#e7a84a" : "grey"} className="ms-1 mb-1"/>
              <div className="form-check form-switch mx-auto">
                <Form.Control
                  className="input form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault1"
                  onChange={()=>{
                    setUrgentSelect(!urgentSelect)
                  }}
                  // checked={urgentSelect}
                />
              </div>
            </div>
            <div className="d-flex flex-column justify-content-center ms-2">
              <ExclamationCircle size={24} color={importantSelect ? "#e7a84a" : "grey"} className="ms-1 mb-1"/>
              <div className="form-check form-switch mx-auto">
                <Form.Control
                  className="input form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault2"
                  onChange={()=>{
                    setImportantSelect(!importantSelect)
                  }}
                  // checked={importantSelect}
                />
              </div>
            </div>
          </div>
        </div>
      </Form.Group>
      <Button variant="primary mb-3" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AddTodo;
