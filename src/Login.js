import React from 'react';
import { useState } from 'react';
import './Login.css'; // Make sure to import your CSS file

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <h2 style={{ textAlign: 'center' }}>Login with Social Media or Manually</h2>
          <div className="vl">
            <span className="vl-innertext">or</span>
          </div>

          <div className="col">
            <a href="#" className="fb btn">
              <i className="fa fa-facebook fa-fw"></i> Login with Facebook
            </a>
            <a href="#" className="twitter btn">
              <i className="fa fa-twitter fa-fw"></i> Login with Twitter
            </a>
            <a href="#" className="google btn">
              <i className="fa fa-google fa-fw"></i> Login with Google+
            </a>
          </div>

          <div className="col">
            <div className="hide-md-lg">
              <p>Or sign in manually:</p>
            </div>

            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <input type="submit" value="Login" />
          </div>
        </div>
      </form>

      <div className="bottom-container">
        <div className="row">
          <div className="col">
            <a href="#" style={{ color: 'white' }} className="btn">
              Sign up
            </a>
          </div>
          <div className="col">
            <a href="#" style={{ color: 'white' }} className="btn">
              Forgot password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
