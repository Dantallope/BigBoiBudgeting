import React, { useState } from 'react';
import '/css/login.css';

//login toggle event
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

// option to login or sign up 
  return (
    <div className="container">
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>


        {!isLogin && (
          <div className="form-control">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" />
          </div>
        )}
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>


      <div className="toggle">
        {isLogin ? (
          <p>
            Don't have an account?{' '}
            <button onClick={handleToggle}>Sign Up</button>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <button onClick={handleToggle}>Login</button>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;