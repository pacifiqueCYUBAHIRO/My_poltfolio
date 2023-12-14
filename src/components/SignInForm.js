import React, { useState } from 'react';
import './signin.css';

const SignInForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-in logic here
    console.log('Sign In:', { username, password });
  };

  return (
    <div>
     <br /><br /><br /><br /><br /><br /><br /><br />
      <form onSubmit={handleSubmit}>
         <h3>Sign In Form</h3>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignInForm;
