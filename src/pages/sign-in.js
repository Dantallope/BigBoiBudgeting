import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signup, setSignup] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make API call to login or sign up user
    if (signup) {
      // Make API call to sign up user
      // ...
    } else {
      // Make API call to login user
      // ...
    }
    // Navigate to /budget page
    navigate('/budget');
  };

  return (
    <div>
      <h2>{signup ? 'Sign Up' : 'Log In'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">{signup ? 'Sign Up' : 'Log In'}</button>
      </form>
      <p>
        {signup ? 'Already have an account?' : "Don't have an account?"}
        <button onClick={() => setSignup(!signup)}>{signup ? 'Log In' : 'Sign Up'}</button>
      </p>
    </div>
  );
}

export default SignIn;