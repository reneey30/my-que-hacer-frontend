import { useState } from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Nav({ userId, setUserId, username, setUsername }) {
  const [authResponse, setAuthResponse] = useState({}) // response from signin and signup from server

  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const logout = () => {
    setUserId = null;
  };
  const register = () => {
    // use fetch to submit form details to our api signup route
  };
  const login = () => {
    // use fetch to submit form details to our api signin route
  };

  const registerHandler = (e) => {
    e.preventDefault();
    register();
  };

  const loginHandler = (e) => {
    e.preventDefault();
    login();
  };

  const handleCloseR = () => setShowRegister(false);
  const handleShowR = () => setShowRegister(true);

  const handleCloseL = () => setShowLogin(false);
  const handleShowL = () => setShowLogin(true);

  return (
    <>
      <nav className="navbar justify-content-between">
        <h2>My Que Hacer</h2>
        <div>
          <div>
            {userId ? (
              <div className="d-flex justify-content-between">
                <div>User: {userId ? username : "Not Logged In"}</div>

                <button className="btn btn-light mx-2" onClick={logout}>
                  logout
                </button>
              </div>
            ) : (
              <div>
                <button className="btn btn-light mx-2" onClick={handleShowL}>
                  Login
                </button>
                <button className="btn btn-light mx-2" onClick={handleShowR}>
                  Register
                </button>
              </div>
            )}
          </div>

          {/* Register modal */}

          {/* <Button variant="primary" onClick={handleShowR}>
              Register
            </Button> */}

          <Modal show={showRegister} onHide={handleCloseR}>
            <Modal.Header closeButton>
              <Modal.Title>Register with Username and Password</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={registerHandler}>
                <h3> Register User </h3>
                <input
                  type="text"
                  placeholder="Username..."
                  className="form-control mb-2"
                  onChange={(event) => {
                    setRegisterUsername(event.target.value);
                  }}
                />
                <input
                  type="password"
                  placeholder="Password..."
                  className="form-control mb-2"
                  onChange={(event) => {
                    setRegisterPassword(event.target.value);
                  }}
                />
                <button type="submit" className="btn btn-outline-dark mb-2">
                  Create User
                </button>

                {/* <button type="submit"> Create User 2</button> */}
              </form>
            </Modal.Body>
          </Modal>

          {/* login modal*/}

          {/* <Button variant="primary" onClick={handleShowL}>
              Sign In
            </Button> */}

          <Modal show={showLogin} onHide={handleCloseL}>
            <Modal.Header closeButton>
              <Modal.Title>Sign In with Username and Password</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={loginHandler}>
                <h3> Login </h3>
                <input
                  type="text"
                  placeholder="Username..."
                  className="form-control mb-2"
                  onChange={(event) => {
                    setLoginUsername(event.target.value);
                  }}
                />
                <input
                  type="password"
                  placeholder="Password..."
                  className="form-control mb-2"
                  onChange={(event) => {
                    setLoginPassword(event.target.value);
                  }}
                />
                <button type="submit" className="btn btn-outline-dark mb-2">
                  Sign In
                </button>

                {/* <button onClick={login}> Login</button> */}
              </form>
            </Modal.Body>
            {/* <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseL}>
                  Close
                </Button>
                <Button variant="primary" onClick={login}>
                  Log In
                </Button>
              </Modal.Footer> */}
          </Modal>
        </div>
      </nav>
    </>
  );
}

export default Nav;
