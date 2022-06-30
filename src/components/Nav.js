import { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav({ userId, setUserId, username, setUsername }) {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const logout =  () => {
    setUserId = null;
  };
  const register = () => {
    // use fetch to submit form details to our api signup route
  }
  const login = () => {
    // use fetch to submit form details to our api signin route
  }

  const registerHandler = (e) => {
    e.preventDefault();
    register();
  }

  const loginHandler = (e) => {
    e.preventDefault();
    login();
  }

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
            </div>        
        </nav>
    </>
  )
}

export default Nav