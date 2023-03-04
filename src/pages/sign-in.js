import React, { useState } from 'react';
import '../css/signin.css';

//login toggle event
const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleToggle = () => {
    setIsSignIn(!isSignIn);
  };

// option to login or sign up 
  return (
    <div className="container">
      <h1>{isSignIn ? 'Login' : 'Sign Up'}</h1>
      <form>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>


        {!isSignIn && (
          <div className="form-control">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" />
          </div>
        )}
        <button type="submit">{isSignIn ? 'Login' : 'Sign Up'}</button>
      </form>


      <div className="toggle">
        {isSignIn ? (
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

export default SignIn;