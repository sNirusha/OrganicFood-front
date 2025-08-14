


import React, { useState } from 'react';
import './Login.css';
import { Assets } from '../../Assets/Assets';

const Login = () => {
  const [action, setAction] = useState("Login");
  const [values, setValue] = useState({ email: '', password: '' });

  const handleChanges = (e) => {
    setValue({ ...values, [e.target.name]: e.target.value });
  };

  

  return (
    <div className="login-popup">
      <div className="login-popup-container">
        <div className="login-popup-title">
          <h2>{action}</h2>
          <img src= {Assets.cross_icon} alt="Close" onClick={() => console.log('Close clicked')} />
        </div>

        <div className="login-popup-inputs">
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={handleChanges}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={handleChanges}
            required
          />
        </div>

        {action === "Login" && (
          <div className="login-popup-condition">
            <input type="checkbox" />
            <p>Remember me</p>
          </div>
        )}

        <button onClick={() => console.log(values)}>
          {action}
        </button>

        {/* {action === "Login" ? (
          <p>
            Don’t have an account?{" "}
            <span onClick={() => setAction("Sign Up")}>Sign Up</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setAction("Login")}>Login</span>
          </p>
        )} */}
      </div>
    </div>
  );
};

export default Login;
